const { app } = require('@azure/functions');
const { CosmosClient } = require('@azure/cosmos');
const crypto = require('crypto');

// Pulls securely from Azure Application Settings at runtime
const connectionString = process.env.CosmosDBConnectionString;
const databaseId = "kidneysforall";
const containerId = "users";

app.http('submitForm', {
    methods: ['POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log('Processing a new submission form registration entry...');

        try {
            // 1. Check Azure environment configuration
            if (!connectionString) {
                return { 
                    status: 500, 
                    body: JSON.stringify({ error: "Database connection configuration is missing on the host server." }) 
                };
            }

            // 2. Parse and unpack the incoming body payload safely
            let body;
            try {
                body = await request.json();
            } catch (jsonErr) {
                return { 
                    status: 400, 
                    body: JSON.stringify({ error: "Invalid JSON payload format." }) 
                };
            }

            // 3. Extract and validate required fields matching the frontend form contract
            const { docType, fullName, email, phone, message } = body;

            if (!fullName || !email) {
                return { 
                    status: 400, 
                    body: JSON.stringify({ error: "Missing required fields: Full Name and Email are mandatory." }) 
                };
            }

            // 4. Construct the finalized data object for Cosmos DB
            const newRecord = {
                id: crypto.randomUUID(), // Generates a unique guid row identifier
                docType: docType || "submission",
                fullName: fullName.trim(),
                email: email.trim(),
                phone: phone || "Not Provided",
                message: message || "",
                status: "Pending", // Default sorting flag state
                timestamp: new Date().toISOString() // Generates standard ISO timestamp string
            };

            // 5. Initialize Cosmos DB Client and write item
            const client = new CosmosClient(connectionString);
            const database = client.database(databaseId);
            const container = database.container(containerId);

            const { resource: createdItem } = await container.items.create(newRecord);

            context.log(`Successfully written record item to database container: ID ${createdItem.id}`);

            // 6. Return standard success payload matching frontend expectations
            return {
                status: 201,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ success: true, id: createdItem.id })
            };

        } catch (error) {
            context.error(`Form Submission Server Failure: ${error.message}`);
            return {
                status: 500,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ error: `Database Save Error: ${error.message}` })
            };
        }
    }
});
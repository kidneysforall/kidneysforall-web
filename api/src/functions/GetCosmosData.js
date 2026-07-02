const { app } = require('@azure/functions');
const { CosmosClient } = require('@azure/cosmos');

// Pulls securely from Azure Application Settings at runtime
const connectionString = process.env.CosmosDBConnectionString;

// Update these to match your actual Cosmos DB Database and Container IDs
const databaseId = "kidneysforall";
const containerId = "users";

app.http('GetCosmosData', {
    methods: ['GET'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Processing data request for database: "${databaseId}", container: "${containerId}"`);

        try {
            // 1. Guard check to ensure the Azure configuration key exists
            if (!connectionString) {
                context.error("Configuration Error: 'CosmosDBConnectionString' is missing from Environment Variables.");
                return { 
                    status: 500, 
                    body: "Internal Server Error: Database configuration is missing on the host server." 
                };
            }

            // 2. Initialize the Cosmos Client securely on the server side
            const client = new CosmosClient(connectionString);
            const database = client.database(databaseId);
            const container = database.container(containerId);

            // 3. Define the query to grab all documents
            const querySpec = {
                query: "SELECT * FROM c"
            };

            // 4. Fetch results from the database
            const { resources: items } = await container.items.query(querySpec).fetchAll();

            // 5. Return the payload safely to your frontend
            return {
                status: 200,
                headers: { 
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify(items)
            };

        } catch (error) {
            context.error(`Database Operation Failed: ${error.message}`);
            return {
                status: 500,
                body: `Database Error: ${error.message}`
            };
        }
    }
});
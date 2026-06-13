\# KidneysForAll.org – Community Support Platform



A centralized, community-driven social infrastructure framework designed to support kidney disease patients navigating chronic illness, dialysis, and transplant lists without traditional localized family or social safety nets.



\## 🤝 Project Mission

Medical infrastructure manages the physical path of chronic kidney disease, but the human spirit requires social stability. \*\*KidneysForAll.org\*\* bridges this critical gap by organizing, vetting, and matching isolated patients with localized, non-medical support circles.



\## 📂 Web Platform Structure

The initial launch platform is constructed using lightweight, accessible, and standards-compliant HTML5 and CSS3, structured into three distinct pipeline entry points:



1\. \*\*`index.html` (Main Portal):\*\* - Establishes the organization’s foundational thesis.

&#x20;  - Highlights the three primary pillars of action: Treatment Companionship, Surrogate Advocacy, and Post-Op Preparation Circles.

&#x20;  - Provides clear directional funnels to both support seekers and prospective advocates.



2\. \*\*`need-support.html` (Intake Pipeline):\*\*

&#x20;  - Designed with clear, low-fatigue typography for accessibility during taxing clinical treatments.

&#x20;  - Features a non-medical social intake engine gathering critical contextual metrics: current treatment status (Pre-dialysis, Hemodialysis, Peritoneal, or Post-Op Recovery) and explicit care targets.

&#x20;  - Reassures vulnerable individuals regarding volunteer validation and identity matching protocols.



3\. \*\*`volunteer.html` (Onboarding Portal):\*\*

&#x20;  - Directs public community engagement into actionable, specialized volunteer tracks (Treatment Companion, Voice Surrogate/Digital Advocate, or Neighborhood Care Pod Member).

&#x20;  - Establishes clear organizational guardrails, transparently outlining the mandatory verification and security screening pipeline.



\## ☁️ Deployment Architecture (Microsoft Azure)

This platform is engineered to run seamlessly on \*\*Azure Static Web Apps\*\* under the permanent \*\*Free Tier\*\*, ensuring zero monthly hosting overhead for the organization while maintaining professional-grade parameters:



\- \*\*Continuous Integration (CI/CD):\*\* Integrated natively via GitHub Actions. Pushing updates directly to the `main` branch triggers an automated build and hot-swap execution to the Azure Content Delivery Network (CDN).

\- \*\*Security \& Compliance:\*\* Native SSL/TLS certificates handled implicitly via the Microsoft boundary.

\- \*\*Custom Identity Mapping:\*\* Configured to map directly to the canonical apex and subdomains (`kidneysforall.org` / `www.kidneysforall.org`).



\## 🛠️ Local Development \& Quick Start

Because the platform relies on native web compilation engines without heavy JavaScript dependencies, local environment setup requires no package managers:



1\. Clone or download the source files repository locally:

&#x20;  ```bash

&#x20;  git clone \[https://github.com/kidneysforall/kidneysforall-website.git](https://github.com/kidneysforall/kidneysforall-website.git)


import { Client, Migrations } from "@appwrite.io/console";

const client = new Client();

const migrations = new Migrations(client);

client
    .setEndpoint('https://[HOSTNAME_OR_IP]/v1') // Your API Endpoint
    .setProject('5df5acd0d48c2') // Your project ID
;

// Go to OAuth provider login page
migrations.createFirebaseAuth('[PROJECT_ID]');


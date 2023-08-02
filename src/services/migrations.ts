import { Service } from '../service';
import { AppwriteException, Client } from '../client';
import type { Models } from '../models';
import type { UploadProgress, Payload } from '../client';

export class Migrations extends Service {

     constructor(client: Client)
     {
        super(client);
     }

        /**
         * List Migrations
         *
         * Get a list of all the project's migrations. You can use the query params to
         * filter your results.
         *
         * @param {string} queries
         * @param {string} search
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        async list(queries?: string, search?: string): Promise<Models.MigrationList> {
            let path = '/migrations';
            let payload: Payload = {};

            if (typeof queries !== 'undefined') {
                payload['queries'] = queries;
            }

            if (typeof search !== 'undefined') {
                payload['search'] = search;
            }

            const uri = new URL(this.client.config.endpoint + path);
            return await this.client.call('get', uri, {
                'content-type': 'application/json',
            }, payload);
        }

        /**
         * Migrate Appwrite Data
         *
         * Initialize a migration to transfer data from an Appwrite instance over to
         * your current Appwrite instance. The migration will be queued and processed
         * by the Appwrite server. To learn more about the migration process, please
         * check out our [migration guide](/docs/migrations).
         *
         * @param {string[]} resources
         * @param {string} endpoint
         * @param {string} projectId
         * @param {string} apiKey
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        async migrateAppwrite(resources: string[], endpoint: string, projectId: string, apiKey: string): Promise<Models.Migration> {
            if (typeof resources === 'undefined') {
                throw new AppwriteException('Missing required parameter: "resources"');
            }

            if (typeof endpoint === 'undefined') {
                throw new AppwriteException('Missing required parameter: "endpoint"');
            }

            if (typeof projectId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "projectId"');
            }

            if (typeof apiKey === 'undefined') {
                throw new AppwriteException('Missing required parameter: "apiKey"');
            }

            let path = '/migrations/appwrite';
            let payload: Payload = {};

            if (typeof resources !== 'undefined') {
                payload['resources'] = resources;
            }

            if (typeof endpoint !== 'undefined') {
                payload['endpoint'] = endpoint;
            }

            if (typeof projectId !== 'undefined') {
                payload['projectId'] = projectId;
            }

            if (typeof apiKey !== 'undefined') {
                payload['apiKey'] = apiKey;
            }

            const uri = new URL(this.client.config.endpoint + path);
            return await this.client.call('post', uri, {
                'content-type': 'application/json',
            }, payload);
        }

        /**
         * Generate a report on Appwrite Data
         *
         * Perform permission checks and generate a report of the total data contained
         * within a Appwrite instance including it's version number
         *
         * @param {string[]} resources
         * @param {string} endpoint
         * @param {string} projectID
         * @param {string} key
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        async getAppwriteReport(resources: string[], endpoint: string, projectID: string, key: string): Promise<Models.MigrationReport> {
            if (typeof resources === 'undefined') {
                throw new AppwriteException('Missing required parameter: "resources"');
            }

            if (typeof endpoint === 'undefined') {
                throw new AppwriteException('Missing required parameter: "endpoint"');
            }

            if (typeof projectID === 'undefined') {
                throw new AppwriteException('Missing required parameter: "projectID"');
            }

            if (typeof key === 'undefined') {
                throw new AppwriteException('Missing required parameter: "key"');
            }

            let path = '/migrations/appwrite/report';
            let payload: Payload = {};

            if (typeof resources !== 'undefined') {
                payload['resources'] = resources;
            }

            if (typeof endpoint !== 'undefined') {
                payload['endpoint'] = endpoint;
            }

            if (typeof projectID !== 'undefined') {
                payload['projectID'] = projectID;
            }

            if (typeof key !== 'undefined') {
                payload['key'] = key;
            }

            const uri = new URL(this.client.config.endpoint + path);
            return await this.client.call('get', uri, {
                'content-type': 'application/json',
            }, payload);
        }

        /**
         * Migrate Firebase Data (Service Account)
         *
         * Initialize a migration to transfer data from an Firebase project over to
         * your current Appwrite instance. The migration will be queued and processed
         * by the Appwrite server. To learn more about the migration process, please
         * check out our [migration guide](/docs/migrations).
         *
         * @param {string[]} resources
         * @param {string} serviceAccount
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        async migrateFirebase(resources: string[], serviceAccount: string): Promise<Models.Migration> {
            if (typeof resources === 'undefined') {
                throw new AppwriteException('Missing required parameter: "resources"');
            }

            if (typeof serviceAccount === 'undefined') {
                throw new AppwriteException('Missing required parameter: "serviceAccount"');
            }

            let path = '/migrations/firebase';
            let payload: Payload = {};

            if (typeof resources !== 'undefined') {
                payload['resources'] = resources;
            }

            if (typeof serviceAccount !== 'undefined') {
                payload['serviceAccount'] = serviceAccount;
            }

            const uri = new URL(this.client.config.endpoint + path);
            return await this.client.call('post', uri, {
                'content-type': 'application/json',
            }, payload);
        }

        /**
         * Authorize with firebase
         *
         *
         * @param {string} projectId
         * @param {string} redirect
         * @throws {AppwriteException}
         * @returns {void|string}
         */
        createFirebaseAuth(projectId: string, redirect?: string): void | URL {
            if (typeof projectId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "projectId"');
            }

            let path = '/migrations/firebase/connect';
            let payload: Payload = {};

            if (typeof redirect !== 'undefined') {
                payload['redirect'] = redirect;
            }

            if (typeof projectId !== 'undefined') {
                payload['projectId'] = projectId;
            }

            const uri = new URL(this.client.config.endpoint + path);
            payload['project'] = this.client.config.project;


            for (const [key, value] of Object.entries(Service.flatten(payload))) {
                uri.searchParams.append(key, value);
            }
            if (typeof window !== 'undefined' && window?.location) {
                window.location.href = uri.toString();
            } else {
                return uri;
            }
        }

        /**
         * Revoke Appwrite&#039;s authorization to access Firebase Projects
         *
         *
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        async firebaseDeauthorize(): Promise<{}> {
            let path = '/migrations/firebase/deauthorize';
            let payload: Payload = {};

            const uri = new URL(this.client.config.endpoint + path);
            return await this.client.call('get', uri, {
                'content-type': 'application/json',
            }, payload);
        }

        /**
         * List Firebase Projects
         *
         *
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        async listFirebaseProjects(): Promise<Models.FirebaseProjectList> {
            let path = '/migrations/firebase/projects';
            let payload: Payload = {};

            const uri = new URL(this.client.config.endpoint + path);
            return await this.client.call('get', uri, {
                'content-type': 'application/json',
            }, payload);
        }

        /**
         * Generate a report on Firebase Data
         *
         * Perform permission checks against a Firebase project to make sure migration
         * is possible with the supplied credentials. This API does not return any
         * data. It only checks the permissions.
         *
         * @param {string[]} resources
         * @param {string} serviceAccount
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        async getFirebaseReport(resources: string[], serviceAccount: string): Promise<Models.MigrationReport> {
            if (typeof resources === 'undefined') {
                throw new AppwriteException('Missing required parameter: "resources"');
            }

            if (typeof serviceAccount === 'undefined') {
                throw new AppwriteException('Missing required parameter: "serviceAccount"');
            }

            let path = '/migrations/firebase/report';
            let payload: Payload = {};

            if (typeof resources !== 'undefined') {
                payload['resources'] = resources;
            }

            if (typeof serviceAccount !== 'undefined') {
                payload['serviceAccount'] = serviceAccount;
            }

            const uri = new URL(this.client.config.endpoint + path);
            return await this.client.call('get', uri, {
                'content-type': 'application/json',
            }, payload);
        }

        /**
         * Migrate Firebase Data (OAuth)
         *
         * Initialize a migration to transfer data from an Firebase project over to
         * your current Appwrite instance. The migration will be queued and processed
         * by the Appwrite server. To learn more about the migration process, please
         * check out our [migration guide](/docs/migrations).
         *
         * @param {string[]} resources
         * @param {string} projectId
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        async migrateFirebaseOAuth(resources: string[], projectId: string): Promise<Models.Migration> {
            if (typeof resources === 'undefined') {
                throw new AppwriteException('Missing required parameter: "resources"');
            }

            if (typeof projectId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "projectId"');
            }

            let path = '/migrations/firebaseOAuth';
            let payload: Payload = {};

            if (typeof resources !== 'undefined') {
                payload['resources'] = resources;
            }

            if (typeof projectId !== 'undefined') {
                payload['projectId'] = projectId;
            }

            const uri = new URL(this.client.config.endpoint + path);
            return await this.client.call('post', uri, {
                'content-type': 'application/json',
            }, payload);
        }

        /**
         * Migrate NHost Data
         *
         * Initialize a migration to transfer data from a NHost instance over to your
         * current Appwrite instance. The migration will be queued and processed by
         * the Appwrite server. To learn more about the migration process, please
         * check out our [migration guide](/docs/migrations).
         *
         * @param {string[]} resources
         * @param {string} subdomain
         * @param {string} region
         * @param {string} adminSecret
         * @param {string} database
         * @param {string} username
         * @param {string} password
         * @param {number} port
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        async migrateNHost(resources: string[], subdomain: string, region: string, adminSecret: string, database: string, username: string, password: string, port?: number): Promise<Models.Migration> {
            if (typeof resources === 'undefined') {
                throw new AppwriteException('Missing required parameter: "resources"');
            }

            if (typeof subdomain === 'undefined') {
                throw new AppwriteException('Missing required parameter: "subdomain"');
            }

            if (typeof region === 'undefined') {
                throw new AppwriteException('Missing required parameter: "region"');
            }

            if (typeof adminSecret === 'undefined') {
                throw new AppwriteException('Missing required parameter: "adminSecret"');
            }

            if (typeof database === 'undefined') {
                throw new AppwriteException('Missing required parameter: "database"');
            }

            if (typeof username === 'undefined') {
                throw new AppwriteException('Missing required parameter: "username"');
            }

            if (typeof password === 'undefined') {
                throw new AppwriteException('Missing required parameter: "password"');
            }

            let path = '/migrations/nhost';
            let payload: Payload = {};

            if (typeof resources !== 'undefined') {
                payload['resources'] = resources;
            }

            if (typeof subdomain !== 'undefined') {
                payload['subdomain'] = subdomain;
            }

            if (typeof region !== 'undefined') {
                payload['region'] = region;
            }

            if (typeof adminSecret !== 'undefined') {
                payload['adminSecret'] = adminSecret;
            }

            if (typeof database !== 'undefined') {
                payload['database'] = database;
            }

            if (typeof username !== 'undefined') {
                payload['username'] = username;
            }

            if (typeof password !== 'undefined') {
                payload['password'] = password;
            }

            if (typeof port !== 'undefined') {
                payload['port'] = port;
            }

            const uri = new URL(this.client.config.endpoint + path);
            return await this.client.call('post', uri, {
                'content-type': 'application/json',
            }, payload);
        }

        /**
         * Generate a report on NHost Data
         *
         * Perform permission checks and generate a report of the total data contained
         * within a NHost instance
         *
         * @param {string[]} resources
         * @param {string} subdomain
         * @param {string} region
         * @param {string} adminSecret
         * @param {string} database
         * @param {string} username
         * @param {string} password
         * @param {number} port
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        async getNHostReport(resources: string[], subdomain: string, region: string, adminSecret: string, database: string, username: string, password: string, port?: number): Promise<Models.MigrationReport> {
            if (typeof resources === 'undefined') {
                throw new AppwriteException('Missing required parameter: "resources"');
            }

            if (typeof subdomain === 'undefined') {
                throw new AppwriteException('Missing required parameter: "subdomain"');
            }

            if (typeof region === 'undefined') {
                throw new AppwriteException('Missing required parameter: "region"');
            }

            if (typeof adminSecret === 'undefined') {
                throw new AppwriteException('Missing required parameter: "adminSecret"');
            }

            if (typeof database === 'undefined') {
                throw new AppwriteException('Missing required parameter: "database"');
            }

            if (typeof username === 'undefined') {
                throw new AppwriteException('Missing required parameter: "username"');
            }

            if (typeof password === 'undefined') {
                throw new AppwriteException('Missing required parameter: "password"');
            }

            let path = '/migrations/nhost/report';
            let payload: Payload = {};

            if (typeof resources !== 'undefined') {
                payload['resources'] = resources;
            }

            if (typeof subdomain !== 'undefined') {
                payload['subdomain'] = subdomain;
            }

            if (typeof region !== 'undefined') {
                payload['region'] = region;
            }

            if (typeof adminSecret !== 'undefined') {
                payload['adminSecret'] = adminSecret;
            }

            if (typeof database !== 'undefined') {
                payload['database'] = database;
            }

            if (typeof username !== 'undefined') {
                payload['username'] = username;
            }

            if (typeof password !== 'undefined') {
                payload['password'] = password;
            }

            if (typeof port !== 'undefined') {
                payload['port'] = port;
            }

            const uri = new URL(this.client.config.endpoint + path);
            return await this.client.call('get', uri, {
                'content-type': 'application/json',
            }, payload);
        }

        /**
         * Migrate Supabase Data
         *
         * Initialize a migration to transfer data from a Supabase instance over to
         * your current Appwrite instance. The migration will be queued and processed
         * by the Appwrite server. To learn more about the migration process, please
         * check out our [migration guide](/docs/migrations).
         *
         * @param {string[]} resources
         * @param {string} endpoint
         * @param {string} apiKey
         * @param {string} databaseHost
         * @param {string} username
         * @param {string} password
         * @param {number} port
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        async migrateSupabase(resources: string[], endpoint: string, apiKey: string, databaseHost: string, username: string, password: string, port?: number): Promise<Models.Migration> {
            if (typeof resources === 'undefined') {
                throw new AppwriteException('Missing required parameter: "resources"');
            }

            if (typeof endpoint === 'undefined') {
                throw new AppwriteException('Missing required parameter: "endpoint"');
            }

            if (typeof apiKey === 'undefined') {
                throw new AppwriteException('Missing required parameter: "apiKey"');
            }

            if (typeof databaseHost === 'undefined') {
                throw new AppwriteException('Missing required parameter: "databaseHost"');
            }

            if (typeof username === 'undefined') {
                throw new AppwriteException('Missing required parameter: "username"');
            }

            if (typeof password === 'undefined') {
                throw new AppwriteException('Missing required parameter: "password"');
            }

            let path = '/migrations/supabase';
            let payload: Payload = {};

            if (typeof resources !== 'undefined') {
                payload['resources'] = resources;
            }

            if (typeof endpoint !== 'undefined') {
                payload['endpoint'] = endpoint;
            }

            if (typeof apiKey !== 'undefined') {
                payload['apiKey'] = apiKey;
            }

            if (typeof databaseHost !== 'undefined') {
                payload['databaseHost'] = databaseHost;
            }

            if (typeof username !== 'undefined') {
                payload['username'] = username;
            }

            if (typeof password !== 'undefined') {
                payload['password'] = password;
            }

            if (typeof port !== 'undefined') {
                payload['port'] = port;
            }

            const uri = new URL(this.client.config.endpoint + path);
            return await this.client.call('post', uri, {
                'content-type': 'application/json',
            }, payload);
        }

        /**
         * Generate a report on Supabase Data
         *
         * Perform permission checks and generate a report of the total data contained
         * within a Supabase instance
         *
         * @param {string[]} resources
         * @param {string} endpoint
         * @param {string} apiKey
         * @param {string} databaseHost
         * @param {string} username
         * @param {string} password
         * @param {number} port
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        async getSupabaseReport(resources: string[], endpoint: string, apiKey: string, databaseHost: string, username: string, password: string, port?: number): Promise<Models.MigrationReport> {
            if (typeof resources === 'undefined') {
                throw new AppwriteException('Missing required parameter: "resources"');
            }

            if (typeof endpoint === 'undefined') {
                throw new AppwriteException('Missing required parameter: "endpoint"');
            }

            if (typeof apiKey === 'undefined') {
                throw new AppwriteException('Missing required parameter: "apiKey"');
            }

            if (typeof databaseHost === 'undefined') {
                throw new AppwriteException('Missing required parameter: "databaseHost"');
            }

            if (typeof username === 'undefined') {
                throw new AppwriteException('Missing required parameter: "username"');
            }

            if (typeof password === 'undefined') {
                throw new AppwriteException('Missing required parameter: "password"');
            }

            let path = '/migrations/supabase/report';
            let payload: Payload = {};

            if (typeof resources !== 'undefined') {
                payload['resources'] = resources;
            }

            if (typeof endpoint !== 'undefined') {
                payload['endpoint'] = endpoint;
            }

            if (typeof apiKey !== 'undefined') {
                payload['apiKey'] = apiKey;
            }

            if (typeof databaseHost !== 'undefined') {
                payload['databaseHost'] = databaseHost;
            }

            if (typeof username !== 'undefined') {
                payload['username'] = username;
            }

            if (typeof password !== 'undefined') {
                payload['password'] = password;
            }

            if (typeof port !== 'undefined') {
                payload['port'] = port;
            }

            const uri = new URL(this.client.config.endpoint + path);
            return await this.client.call('get', uri, {
                'content-type': 'application/json',
            }, payload);
        }

        /**
         * Get Migration
         *
         * Get a migration by its unique ID.
         *
         * @param {string} migrationId
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        async get(migrationId: string): Promise<Models.Migration> {
            if (typeof migrationId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "migrationId"');
            }

            let path = '/migrations/{migrationId}'.replace('{migrationId}', migrationId);
            let payload: Payload = {};

            const uri = new URL(this.client.config.endpoint + path);
            return await this.client.call('get', uri, {
                'content-type': 'application/json',
            }, payload);
        }

        /**
         * Retry Migration
         *
         * Retry a migration by its unique ID. The migration status must be failed or
         * aborted for the request to succeed.
         *
         * @param {string} migrationId
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        async retry(migrationId: string): Promise<Models.Migration> {
            if (typeof migrationId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "migrationId"');
            }

            let path = '/migrations/{migrationId}'.replace('{migrationId}', migrationId);
            let payload: Payload = {};

            const uri = new URL(this.client.config.endpoint + path);
            return await this.client.call('patch', uri, {
                'content-type': 'application/json',
            }, payload);
        }

        /**
         * Delete Migration
         *
         *
         * @param {string} migrationId
         * @throws {AppwriteException}
         * @returns {Promise}
         */
        async delete(migrationId: string): Promise<{}> {
            if (typeof migrationId === 'undefined') {
                throw new AppwriteException('Missing required parameter: "migrationId"');
            }

            let path = '/migrations/{migrationId}'.replace('{migrationId}', migrationId);
            let payload: Payload = {};

            const uri = new URL(this.client.config.endpoint + path);
            return await this.client.call('delete', uri, {
                'content-type': 'application/json',
            }, payload);
        }
};

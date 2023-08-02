import { Service } from '../service';
import { Client } from '../client';
import type { Models } from '../models';
export declare class Migrations extends Service {
    constructor(client: Client);
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
    list(queries?: string, search?: string): Promise<Models.MigrationList>;
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
    migrateAppwrite(resources: string[], endpoint: string, projectId: string, apiKey: string): Promise<Models.Migration>;
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
    getAppwriteReport(resources: string[], endpoint: string, projectID: string, key: string): Promise<Models.MigrationReport>;
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
    migrateFirebase(resources: string[], serviceAccount: string): Promise<Models.Migration>;
    /**
     * Authorize with firebase
     *
     *
     * @param {string} projectId
     * @param {string} redirect
     * @throws {AppwriteException}
     * @returns {void|string}
     */
    createFirebaseAuth(projectId: string, redirect?: string): void | URL;
    /**
     * Revoke Appwrite&#039;s authorization to access Firebase Projects
     *
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    firebaseDeauthorize(): Promise<{}>;
    /**
     * List Firebase Projects
     *
     *
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    listFirebaseProjects(): Promise<Models.FirebaseProjectList>;
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
    getFirebaseReport(resources: string[], serviceAccount: string): Promise<Models.MigrationReport>;
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
    migrateFirebaseOAuth(resources: string[], projectId: string): Promise<Models.Migration>;
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
    migrateNHost(resources: string[], subdomain: string, region: string, adminSecret: string, database: string, username: string, password: string, port?: number): Promise<Models.Migration>;
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
    getNHostReport(resources: string[], subdomain: string, region: string, adminSecret: string, database: string, username: string, password: string, port?: number): Promise<Models.MigrationReport>;
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
    migrateSupabase(resources: string[], endpoint: string, apiKey: string, databaseHost: string, username: string, password: string, port?: number): Promise<Models.Migration>;
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
    getSupabaseReport(resources: string[], endpoint: string, apiKey: string, databaseHost: string, username: string, password: string, port?: number): Promise<Models.MigrationReport>;
    /**
     * Get Migration
     *
     * Get a migration by its unique ID.
     *
     * @param {string} migrationId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    get(migrationId: string): Promise<Models.Migration>;
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
    retry(migrationId: string): Promise<Models.Migration>;
    /**
     * Delete Migration
     *
     *
     * @param {string} migrationId
     * @throws {AppwriteException}
     * @returns {Promise}
     */
    delete(migrationId: string): Promise<{}>;
}

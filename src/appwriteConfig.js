import { Account, Client, Databases } from 'appwrite';
const client = new Client();
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64e6324b9b4c94b7c179');

export const database = new Databases(client);
export const account = new Account(client);
export default client;

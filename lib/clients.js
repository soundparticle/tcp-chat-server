module.exports = class Clients {
    constructor() {
        this.users = new Map();
        this.userNumber = 1;
    }

    add(client) {
        const username = `user${this.userNumber++}`;
        client.username = username;
        this.users.set(client.username, client);
    }
    getClient(username) {
        return this.users.get(username);
    }

    getAllClients() {
        return [...this.users.values()];
    }

    remove(client) {
        this.users.delete(client.username);
    }
    getBroadcastClients(client) {
        return this.getAllClients().filter(c => c !== client);
    }

    rename(oldUsername, newUsername) {
        console.log('***** usernames ****', oldUsername, newUsername);
        console.log('**** if statement ***', this.users);
        if(this.users.has(oldUsername)) return;
        const client = this.getClient(oldUsername);
        client.username = newUsername;
        this.users.set(newUsername, client);
        this.users.delete(oldUsername);
    }
};  
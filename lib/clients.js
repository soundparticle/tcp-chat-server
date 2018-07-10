module.exports = class Clients {
    constructor() {
        this.users = new Map();
        this.userNumber = 1;
    }

    add(client) {
        client.username = `user${this.userNumber++}`;
        this.users.set(client.username, client);
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
};  
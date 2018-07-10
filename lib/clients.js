module.exports = class Clients {
    constructor() {
        this.set = new Set();
        this.userNumber = 1;
    }

    add(client) {
        client.username = `user${this.userNumber++}`;
        this.set.add(client);
    }

    getAllClients() {
        return [...this.set.values()];
    }

    remove(client) {
        client.username = `user${this.userNumber++}`;
        this.set.delete(client);

    }
}
const net = require('net');
const Clients = require('./clients');


const clients = new Clients();

module.exports = net.createServer(client => {
    console.log('**** User Connected. ****');
    client.setEncoding('utf8');
    clients.add(client);

    client.on('data', data => {

        const message = client.username + ': ' + data;
        clients
            .getBroadcastClients(client)
            .forEach(c => c.write(message));
    });

    client.on('end', () => {
        const message = client.username + ' disconnected. ';
        clients
            .getBroadcastClients(client)
            .forEach(c => c.write(message));
        clients.remove(client);
    });
});
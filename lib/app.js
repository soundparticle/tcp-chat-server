const net = require('net');
const Clients = require('./clients');
const processMessage = require('./processMessage');

const clients = new Clients();

module.exports = net.createServer(client => {
    console.log('**** User Connected. ****');
    clients.add(client);
    client.setEncoding('utf8');
    client.write(`${client.username}, has joined!`);
    
    client.on('data', data => {
        const message = processMessage(data);
        if(message.command === 'all') {
            clients
                .getAllClients(client)
                .forEach(c => c.write(`client.username}: ${message.text}`));
        }

        else if(message.command === 'dm') {
            clients
                .getClient(message.arg)
                .write(message.text);
        }

        else if(message.command === 'nick') {
            clients
                .rename(client.username, message.arg);
        }
    });
});
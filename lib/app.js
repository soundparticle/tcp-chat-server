const net = require('net');
const Clients = require('./clients');
const parseMessage = require('./parse-message');


const clients = new Clients();

module.exports = net.createServer(client => {
    console.log('**** User Connected. ****');
    clients.add(client);
    client.setEncoding('utf8');
    client.write(`${client.username}, has joined!`);
    
    client.on('end', () => {
        const message = client.username + ' disconnected. ';
        clients
            .getBroadcastClients(client)
            .forEach(c => c.write(message));
        clients.remove(client);
    });

    client.on('data', data => {
        const command = parseMessage(data);
        if(command) {
            if(command === '@chris') {
                clients.all().forEach(c => c.write(`$client.username} has changed their name to ${command.arg}.`));
                clients.rename(client.username, command.Arg);  
            }
        }
    });
});
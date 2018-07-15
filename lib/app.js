const net = require('net');
const Clients = require('./clients');
const parseMessage = require('./parse-message');


const clients = new Clients();

module.exports = net.createServer(client => {
    console.log('**** User Connected. ****');
    client.setEncoding('utf8');
    clients.add(client);

    client.on('data', data => {

        // const message = client.username + ': ' + data;
        const message = `${client.username}: ${parseMessage(data)}`;
        clients
            .getBroadcastClients(client)
            .forEach(c => c.write(message));
    });

    // client.on('data', data => {
    //     const command = parseMessage(data);
    //     if(command) {
    //         if(command === '@chris') {
    //             clients.all().forEach(c => c.write(`$client.username} has changed their name to ${command.arg}.`));
    //             clients.rename(client.username, command.Arg);  
    //         }
    //     }
    // });

    client.on('end', () => {
        const message = client.username + ' disconnected. ';
        clients
            .getBroadcastClients(client)
            .forEach(c => c.write(message));
        clients.remove(client);
    });
});
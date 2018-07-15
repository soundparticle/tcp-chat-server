module.exports = function parseMessage(message) {
    let parsedMessage = {};

    if(message[0] !== '@')
        return null;

    if(message.slice(0, 5) === '@chris') {
        parsedMessage.arg = message.slice(5).split(' ')[1];
        parsedMessage.command = '@chris'; 
    }

};

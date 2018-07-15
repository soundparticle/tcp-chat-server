module.exports = function parseMessage(message) {
    let parsedMessage = {};

    if(message[0] !== '@')
        return null;
    // change username 
    if(message.slice(0, 5) === '@chris') {
        console.log('*** hitting chris if ***');
        parsedMessage.arg = message.slice(5).split(' ')[1];
        parsedMessage.command = '@chris'; 
    }

    else if(message.slice(0, 4) === '@all') {
        parsedMessage.text = message.slice(5);
        parsedMessage.command = '@all';
    }

    return parsedMessage;
};

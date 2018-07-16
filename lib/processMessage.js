module.exports = function processMessage(string) {
    const message = {};

    if(string[0] === '@') {
        const words = string.split(' ');
        const parse = words[0].split(':');
        message.command = parse[0].slice(1);
        message.arg = parse[1];
        message.text = words.slice(1).join('');
        return message;
    } else if(string[0] !== '@') {
        return null;
    }
};

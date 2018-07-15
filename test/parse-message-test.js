const assert = require('assert');
const parseMessage = require('../lib/parse-message');

describe('parse message for DM', () => {

    it('returns null if command does not start with @ symbol', () => {
        const message = 'change username'; 
        assert.equal(parseMessage(message), null);
    });

    it('handles rename command @chris', () => {
        const command = '@chris NewUserName';
        const parsed = parseMessage(command);
        const expected = {
            command: '@nick',
            arg: 'NewUserName'
        };
        assert.deepEqual(parsed, expected);
    });
});
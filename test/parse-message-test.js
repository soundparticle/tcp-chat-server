const assert = require('assert');
const parseMessage = require('../lib/parse-message');

describe('parse message for DM', () => {

    it('returns null if command does not start with @ symbol', () => {
        const message = 'change username'; 
        assert.equal(parseMessage(message), null);
    });

    // it.skip('handles rename command @chris', () => {
    //     const command = '@chris NewUserName';
    //     const parsed = parseMessage(command);
    //     console.log('*** parsed ****', parsed);
    //     const expected = {
    //         command: '@chris',
    //         arg: 'NewUserName'
    //     };
    //     assert.deepEqual(parsed, expected);
    // });
});
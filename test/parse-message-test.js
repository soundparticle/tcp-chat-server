const assert = require('assert');
const processMessage = require('../lib/processMessage');

describe('message for chatroom DM', () => {
    const invalid = 'hello';
    const valid = '@all hello';
    const expected = {
        command: 'all',
        arg: undefined,
        text: 'hello'
    };

    it('message starts with @', () => {
        assert.ok(processMessage(valid), '@all');
    });

    it('message does not start with @', () => {
        assert.equal(processMessage(invalid), null);
    });

    it('returns an object', () => {
        assert.deepEqual(processMessage(valid), expected);
    });
});
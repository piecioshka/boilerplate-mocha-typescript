const { assert } = require('chai');
const source = require('../../src/source-1');

suite('source-1', () => {
    test('it should return with name', () => {
        assert.match(source(), /source 1/);
    });
});

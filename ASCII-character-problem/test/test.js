let assert = require('chai').assert;
let getChar = require('../main/getChar');

describe("Tests", () => {
    it("test", () => {
        assert.equal(getChar(55), '7', 'expect 7');
        assert.equal(getChar(56), '8', 'expect 8');
        assert.equal(getChar(57), '9', 'expect 9');
        assert.equal(getChar(58), ':', 'expect :');
        assert.equal(getChar(59), ';', 'expect ;');
        assert.equal(getChar(60), '<', 'expect <');
        assert.equal(getChar(61), '=', 'expect =');
        assert.equal(getChar(62), '>', 'expect >');
        assert.equal(getChar(63), '?', 'expect ?');
        assert.equal(getChar(64), '@', 'expect @');
        assert.equal(getChar(65), 'A', 'expect A');
    });
});
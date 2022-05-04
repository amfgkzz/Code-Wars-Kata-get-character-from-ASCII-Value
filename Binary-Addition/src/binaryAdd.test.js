let assert = require('chai').assert;
let binaryAdd = require('./binaryAdd');

describe('binary Add test', function(){
    it('Type test', function(){
        assert.typeOf(binaryAdd(1,2), 'string');
    })
    it('final binary number test', function(){
        assert.equal(binaryAdd(1,2), '11');
        assert.equal(binaryAdd(150,140), '100100010');
        assert.equal(binaryAdd(759092589957578,975933433650968), '110001010011111111100111001110100000011000011100010');
    })
});
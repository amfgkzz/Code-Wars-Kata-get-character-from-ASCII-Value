let assert = require('chai').assert;
let binaryAdd = require('./binaryAdd');

describe('binary Add test', function(){
    it('Type test', function(){
        assert.typeOf(binaryAdd(1,2), 'string');
    })
    it('final binary number test', function(){
        assert.equal(binaryAdd(1,2), '11');
        assert.equal(binaryAdd(150,140), '100100010');
    })
});
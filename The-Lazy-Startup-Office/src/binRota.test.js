let assert = require('chai').assert;
let binRota = require('./binRota');

describe("Test for array", function(){
    let a = [];
    it("", function(){
        assert.typeOf(binRota(a), 'array');
    })
})
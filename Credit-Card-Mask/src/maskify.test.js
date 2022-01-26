let assert = require('chai').assert;
let maskify = require('./maskify');

describe("Maskify test", function(){
    let testVariableOne = "test";

    it("", function(){
        assert.typeOf(maskify(testVariableOne), 'string')
    })
})
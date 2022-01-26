let assert = require('chai').assert;
let maskify = require('./maskify');

describe("Maskify test", function(){
    let testVariableOne = "test variable";

    it("", function(){
        assert.typeOf(maskify(testVariableOne), 'string')
        
    })
})
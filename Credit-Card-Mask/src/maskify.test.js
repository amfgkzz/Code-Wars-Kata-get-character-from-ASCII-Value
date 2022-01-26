let assert = require('chai').assert;
let maskify = require('./maskify');

describe("Maskify test", function(){
    let testVariableOne = "test variable";

    it("type test", function(){
        assert.typeOf(maskify(testVariableOne), 'string');
    })

    it("hash test", function(){
        assert.equal(maskify('1'), '1');
        assert.equal(maskify('4556364607935616'), '############5616');
    })
})
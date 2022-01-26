let assert = require('chai').assert;
let binRota = require('./binRota');

describe("Test for array", function(){
    let a = [];
    let b = [ ["Stefan", "Raj",    "Marie"],
    ["Alexa",  "Amy",    "Edward"],
    ["Liz",    "Claire", "Juan"],
    ["Dee",    "Luke",   "Katie"] ];

    it("", function(){
        assert.typeOf(binRota(a), 'array');
        assert.deepEqual(binRota(b), ["Stefan", "Raj", "Marie", "Edward", "Amy", "Alexa", "Liz", "Claire", "Juan", "Katie", "Luke", "Dee"]);
    })
})
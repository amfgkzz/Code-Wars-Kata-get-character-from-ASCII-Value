let expect = require('chai').expect;
let isWholeNumber = require('./isWholeNumber');

describe("False Whole number test", ()=>{
    it("", ()=>{
        expect(isWholeNumber(1.001)).to.be.false
    })
})

describe("True Whole number test", ()=>{
    it("", ()=>{
        expect(isWholeNumber(1)).to.be.true
    })
})
let expect = require('chai').expect;
let isSquare = require('./isSquare');

describe("false test", ()=>{
    it("", ()=>{
        expect(isSquare("test")).to.be.false
        expect(isSquare(-9)).to.be.false
        expect(isSquare(1.001)).to.be.false
        expect(isSquare(89)).to.be.false
    })
})

describe("true test", ()=>{
    it("", ()=>{
        expect(isSquare(9)).to.be.true
        expect(isSquare(81)).to.be.true
        expect(isSquare(6561)).to.be.true
    })
})
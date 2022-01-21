let expect = require('chai').expect;
let isSquare = require('./isSquare');

describe("Test", ()=>{
    it("test", ()=>{
        expect(isSquare("test")).to.be.false
        expect(isSquare(-9)).to.be.false
        expect(isSquare(1.001)).to.be.false
        expect(isSquare(9)).to.be.true
    })
})
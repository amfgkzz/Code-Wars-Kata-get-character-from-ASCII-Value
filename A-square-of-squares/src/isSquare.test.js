let expect = require('chai').expect;
let isSquare = require('./isSquare');

describe("false test", ()=>{
    it("", ()=>{
        expect(isSquare("test")).to.be.false
        expect(isSquare(-9)).to.be.false
        expect(isSquare(1.001)).to.be.false
    })
})

// describe("Test 2", ()=>{
//     it("true test", ()=>{
//         expect(isSquare(9)).to.be.true
//     })
// })
let expect = require('chai').expect;
let flip = require('./flip');

describe("R Flip test", ()=>{
    it("", ()=>{
        expect(flip('R', [])).to.be.a('array')
        expect(flip('R', [3, 2, 1, 2])).to.deep.equal([1, 2, 2, 3])
    })
})

describe("L Flip test", ()=>{
    it("", ()=>{
        expect(flip('L', [])).to.be.a('array')
        expect(flip('L', [5, 5, 4, 3, 1])).to.deep.equal([5, 5, 4, 3, 1])
    })
})
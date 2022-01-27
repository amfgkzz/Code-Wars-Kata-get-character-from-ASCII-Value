let assert = require('chai').assert;
let recoverSecret = require('./recoverSecret');

describe('Recover Secret Test', function(){
    let triplets1 = [
        ['t','u','p'],
        ['w','h','i'],
        ['t','s','u'],
        ['a','t','s'],
        ['h','a','p'],
        ['t','i','s'],
        ['w','h','s']
        ] 
    it('Type test', function(){
        assert.typeOf(recoverSecret(triplets1), 'string')
    })

    it('Equal test', function(){
        
    })
})

// tup, whi
// tupwhi, tsu
// tsupwhi, ats
// atsupwhi, hap
// hatsupwi, tis, hatupwis, whatupis, order matters function could return whatupis instead of whatisup depending on 
// how the algorithm moves the word positions
// hatisupw, whs
// whatisup

// 012, 345
// 012345, 678
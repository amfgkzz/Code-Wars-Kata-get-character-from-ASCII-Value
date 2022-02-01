let assert = require('chai').assert;
let recoverSecret = require('./recoverSecret');

describe('Recover Secret Test', function(){
    let secret1 = "whatisup";
    let secret2 = 'mathisfun';
    let triplet1 = [
        ['t','u','p'],
        ['w','h','i'],
        ['t','s','u'],
        ['a','t','s'],
        ['h','a','p'],
        ['t','i','s'],
        ['w','h','s'] ] 
    let triplet2 = [ 
    [ 't', 's', 'f' ],
    [ 'a', 's', 'u' ],
    [ 'm', 'a', 'f' ],
    [ 'a', 'i', 'n' ],
    [ 's', 'u', 'n' ],
    [ 'm', 'f', 'u' ],
    [ 'a', 't', 'h' ],
    [ 't', 'h', 'i' ],
    [ 'h', 'i', 'f' ],
    [ 'm', 'h', 'f' ],
    [ 'a', 'u', 'n' ],
    [ 'm', 'a', 't' ],
    [ 'f', 'u', 'n' ],
    [ 'h', 's', 'n' ],
    [ 'a', 'i', 's' ],
    [ 'm', 's', 'n' ],
    [ 'm', 's', 'u' ] ]

    it('Type test', function(){
        assert.typeOf(recoverSecret(triplet1), 'string')
        assert.typeOf(recoverSecret(triplet2), 'string')
    })

    // it('Equal test', function(){
    //     assert.equal(recoverSecret(triplet1), secret1)
    //     assert.equal(recoverSecret(triplet2), secret2)
    // })
})
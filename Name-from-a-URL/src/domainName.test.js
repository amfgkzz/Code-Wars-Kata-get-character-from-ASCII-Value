let assert = require('chai').assert;
let domainName = require('./domainName');

describe('Domain Name Test', function(){
    let str = 'string';

    it('Type test', function(){
        assert.typeOf(domainName(str), 'string')
    })
})
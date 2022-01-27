let assert = require('chai').assert;
let domainName = require('./domainName');

describe('Domain Name Test', function(){
    it('Type test', function(){
        assert.typeOf(domainName("http://github.com/carbonfive/raygun"), 'string')
    })
    it('Parsed domain name Test', function(){
        assert.equal(domainName("http://github.com/carbonfive/raygun"), 'github')
        assert.equal(domainName("http://www.zombie-bites.com"), 'zombie-bites')
        assert.equal(domainName("http://google.com"), "google")
        // assert.equal(domainName("http://google.co.jp"), "google")
        assert.equal(domainName("www.xakep.ru"), "xakep")
        assert.equal(domainName("https://youtube.com"), "youtube")
    })
})
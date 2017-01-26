var thisModule = require('../index.js');

var chai = require('chai');

var expect = chai.expect;
var should = chai.should;

describe('Testing the generate function', function() {
  it('Should generate correct checksum for aadhaar numbers', function() {
    expect(thisModule.generate([7, 7, 3, 3, 9, 3, 0, 4, 5, 1, 9])).to.equal(0);
    expect(thisModule.generate([4, 9, 6, 8, 5, 8, 2, 4, 5, 1, 5])).to.equal(2);
  });
  it('Should validate aadhaar correctly', function() {
    expect(thisModule.validateAadhaar('773393045189.8')).to.equal(true);
    expect(thisModule.validateAadhaar('773393045191')).to.equal(false);
    expect(thisModule.validateAadhaar('496858245152')).to.equal(true);
  });
});

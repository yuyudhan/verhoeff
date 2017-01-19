var thisModule = require('../index.js');

var chai = require('chai');

var expect = chai.expect;
var should = chai.should;

describe('Testing the generate function', function() {
  it('Should generate correct checksum for aadhaar numbers', function() {
    expect(thisModule.generate([7, 7, 3, 3, 9, 3, 0, 4, 5, 1, 9])).to.equal(0);
    expect(thisModule.generate([4, 9, 6, 8, 5, 8, 2, 4, 5, 1, 5])).to.equal(2);
  });
});

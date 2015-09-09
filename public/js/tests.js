var primeSift = require('./primeSift.js');
var expect = require('chai').expect;

describe('primeSift#create', function() {
  var prime = primeSift();
  it('returns array of integers, input >= Z > 1', function() {
    expect(prime.create(3)).to.eql([3, 2]);
  });
});

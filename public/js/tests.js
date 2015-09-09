var primeSift = require('./primeSift.js');
var expect = require('chai').expect;

describe('primeSift#create', function() {
  var prime = primeSift();

  it('returns array of integers, input >= Z > 1', function() {
    expect(prime.create(3)).to.eql([3, 2]);
  });
});

describe('primeSift#create', function() {
  var prime = primeSift();
  var arr = prime.create(10);
  var arr2 = prime.create(13);
  it('removes all non-prime from the numArray', function() {
    expect(prime.sift(arr)).to.eql([7, 5, 3, 2]);
  });
  it('removes all non-prime from the numArray', function() {
    expect(prime.sift(arr2)).to.eql([13, 11, 7, 5, 3, 2]);
  });
});

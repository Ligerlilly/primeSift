var primeSift = function() {
  var createArray, siftArray, numArray = [];

  createArray = function(num) {
    while (num > 1) {
      numArray.push(num);
      num -= 1;
    }
    return numArray;
  };

  siftArray = function() {

  };

  return { create : createArray,
           sift   : siftArray };
};

module.exports = primeSift;

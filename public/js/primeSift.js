var primeSift = function() {
  var createArray, siftArray, numArray = [];

  createArray = function(num) {
    while (num > 1) {
      numArray.push(num);
      num -= 1;
    }
    return numArray;
  };

  siftArray = function(arr) {
    arr.reverse();
    for (var i = 2; i < arr.length; i++ ) {

      for (var j = (i - 1); j < arr.length; j++) {
        if (arr[j] % i === 0){
          arr.splice(j, 1);
          j -= 1;
        }
      }
    }

    return arr.reverse();
  };

  return { create : createArray,
           sift   : siftArray };
};

module.exports = primeSift;

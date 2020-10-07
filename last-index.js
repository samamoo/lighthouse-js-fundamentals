//When this function is given an array and a value, 
//it should return the index of the last time the value occurs in the array. 
//If the value never occurs, the function should return -1.

function lastIndexOf (array, value) {
  let num = 0;
  let match = false;
  for (let i = array.length-1; i >= 0; i--) {
    if (array[i] === value) {
      num = i;
      match = true;
      return i;
    }
  } if (match) {
    return num;
  } else {
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
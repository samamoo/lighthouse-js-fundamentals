//CONCATENATE ARRAYS EXERCISE
/*const concat = function (array1, array2) {
  let newArray = [];
  newArray = array1.concat(array2);
  return newArray;
}*/

//console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
//console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
//console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
//console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);

//MERGE ARRAYS EXERCISE
//concatenate arrays and sort them

const merge = function (array1, array2) {
  let newArray = [];
  newArray = array1.concat(array2);
  newArray.sort();
  return newArray;
}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
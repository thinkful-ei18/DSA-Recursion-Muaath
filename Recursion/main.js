'use strict';

//Sheep Counter
function sheepCounter(num) {
  if (num === 0) {
    return;
  }

  console.log(`${num} - Another sheep jump over the fence`);
  sheepCounter(num - 1);
}

//sheepCounter(3);

//Array Double
function arrDouble(arr) {
  if (arr.length === 0) {
    return [];
  }

  const newArr = arr[0] * 2;

  return [newArr, ...arrDouble(arr.slice(1))];
}

// console.log(arrDouble([1, 2, 3, 4, 5]));
// console.log(arrDouble([20, 40, 60, 80]));

//Reverse String
function revString(str) {
  if (str === '') {
    return '';
  }

  return str[str.length - 1] + revString(str.slice(0, -1));
}

console.log(revString('Lakers'));

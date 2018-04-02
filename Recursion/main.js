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

// console.log(revString('Lakers'));

function numTriangle(n) {
  if (n === 0) {
    return 0;
  }

  return n + numTriangle(n - 1);
}

// console.log(numTriangle(10));

function stringSeperator(str, seperator) {
  console.log(str);
  if (str.indexOf(seperator) === -1) {
    return [str.slice(0, str.length)];
  }

  str.indexOf(seperator);

  return [
    str.slice(0, str.indexOf(seperator)),
    ...stringSeperator(str.slice(str.indexOf(seperator) + 1), seperator),
  ];
}

console.log(stringSeperator('Hello my name is Muaath', ' '));

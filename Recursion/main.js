'use strict';

//This function is O(n)
//Iterates through the size of given number
//Sheep Counter
function sheepCounter(num) {
  if (num === 0) {
    return;
  }

  console.log(`${num} - Another sheep jump over the fence`);
  sheepCounter(num - 1);
}

//sheepCounter(3);

//This function is O(n)
//Slices through length of the array.
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

//This function is O(n) because it is slicing through string length
//Reverse String
function revString(str) {
  if (str === '') {
    return '';
  }

  return str[str.length - 1] + revString(str.slice(0, -1));
}

// console.log(revString('Lakers'));

//This function O(n) loops through the size of number
function numTriangle(n) {
  if (n === 0) {
    return 0;
  }

  return n + numTriangle(n - 1);
}

// console.log(numTriangle(10));

//This function is O(n) 
//goes through the amount of times seperator shows up
function stringSeperator(str, seperator) {
  if (str.indexOf(seperator) === -1) {
    return [str];
  }

  return [
    str.slice(0, str.indexOf(seperator)),
    ...stringSeperator(str.slice(str.indexOf(seperator) + 1), seperator),
  ];
}

// console.log(stringSeperator('Hello my name is Muaath', ' '));

//This function is log(n) eliminates a set of numbers using binary
function convertToBinary(num) {
  if (num > 0) {
    let binary = Math.floor(num % 2); //save the reminder in binary
    //divide the number by 2 and send that to the function again
    //carry the reminder to the next recursion call
    return convertToBinary(Math.floor(num / 2)) + binary;
  } else {
    return ''; //base case - at some point the divisions will lead to 0
  }
}

/*=================================================================================
Exercise 7 - Factorial
Write a recursive program that finds the factorial of a given number. 
The factorial of a number can be found by multiplying that number by each number 
between itself and one. The factorial of 5 is equal to 5 * 4 * 3 * 2 * 1 = 120
Input: 5
Output: 120
*/
//This function is O(n) iterates through size of n
function factorial(n) {
  // Base Case - when n is equal to 0, we stop the recursion
  if (n === 0) {
    return 1;
  }
  // This is our Recursive Case
  // It will run for all other conditions except when n is equal to 0
  return n * factorial(n - 1);
}

/*=================================================================================
Exercise 8 - Fibonacci
Write a recursive program that prints the fibonacci sequence of a given number. 
The fibonnaci sequence a series of numbers in which each number is the sum of the 
two preceding numbers. 
For example the 7th fibonacci number in a fibonaci sequence is  13. 
The sequence looks as follows: 1 1 2 3 5 8 13.
Input: 7
Output: 13
*/
//This function is O(n) goes through size of n
function fibonacci(n) {
  // Base case
  if (n <= 0) {
    return 0;
  }
  // Base case
  if (n <= 2) {
    return 1;
  }
  // Recursive case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/*=================================================================================
Exercise 9 - Anagrams
An anagram is any word or phrase that exactly reproduces the letters in another order. 
Write a program that creates an anagram (listing all the rearrangements of a word) of a given word. 
For example, if the user types east, the program should list all 24 permutations, including eats, etas, teas, 
and non-words like tsae.
Hint: For your algorithm, you might want to think about a prefix and use that to create the new words. 
For example, given east, use e as a prefix and you would place e in front of all six permutations of ast 
— ast, ats, sat, sta, tas, and tsa. This will give you the words east, eats, esat, esta, etas, and etsa. 
Continue this way until you find all the anagrams for east. There should be 24 of them.
Input: 
Output: 
*/
//This function is O(n^2)
//the recursive call to the function in the loop is a nested loop
//creating a n^2 algorithim
function anagrams(prefix, str) {
  if (str.length <= 1) {
    console.log(`The anagram is ${prefix}${str}`);
  } else {
    for (let i = 0; i < str.length; i++) {
      let currentLetter = str.substring(i, i + 1);
      let previousLetters = str.substring(0, i);
      let afterLetters = str.substring(i + 1);
      anagrams(prefix + currentLetter, previousLetters + afterLetters);
    }
  }
}

function printAnagram(word) {
  //console.log(`The word for which we will find an anagram is ${word}`);
  anagrams(' ', word);
}

/* ==============================
Exercise 10: Animal Hierarchy
Step through the code and find the input to the program, input to each recursive calls, 
output of each recursive calls and the output of the program. The purpose of this 
exercise is not for you to copy paste the code and find out the output but rather 
step through each line, analyze each step to understand how recursion works.
*/

//This function O(n^2) recursive call nested in For Each loop.
const animalHierarchy = [{
    id: 'Animals',
    parent: null
  },
  {
    id: 'Mammals',
    parent: 'Animals'
  },
  {
    id: 'Dogs',
    parent: 'Mammals'
  },
  {
    id: 'Cats',
    parent: 'Mammals'
  },
  {
    id: 'Golden Retriever',
    parent: 'Dogs'
  },
  {
    id: 'Husky',
    parent: 'Dogs'
  },
  {
    id: 'Bengal',
    parent: 'Cats'
  },
];

// ==============================
function traverse(animalHierarchy, parent) {
  let node = {};
  animalHierarchy
    .filter(item => item.parent === parent)
    .forEach(item => (node[item.id] = traverse(animalHierarchy, item.id)));
  return node;
}

/*=================================================================================*/
/*
Exercise 11: Organization Chart
Write a recursive function that prints the following organization chart. 
Your output should be as shown below with proper indentation to show the hierarchy.
*/

let organization = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {},
      },
      Zhao: {
        Richie: {},
        Sofia: {},
        Jen: {},
      },
      Badros: {
        John: {},
        Mike: {},
        Pat: {},
      },
      Parikh: {
        Zach: {},
        Ryan: {},
        Tes: {},
      },
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {},
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {},
      },
      Frankovsky: {
        Jasee: {},
        Brian: {},
        Margaret: {},
      },
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {},
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {},
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {},
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {},
      },
    },
  },
};

function traverseA(data, depth = 0) {
  let indent = ' '.repeat(depth * 4);
  Object.keys(data).forEach(key => {
    console.log(indent + key);
    traverseA(data[key], depth + 1);
  });
}

function traverseB(node, indent = 0) {
  for (var key in node) {
    console.log(' '.repeat(indent), key);
    traverseB(node[key], indent + 4);
  }
}

function main() {
  //console.log('#1 - count sheep');
  //countSheep(5);

  //console.log('#2 - Array Doubler');
  //let arr = [10,5,3,4];
  //console.log(double_all(arr));

  //console.log('#3 - Reverse String');
  //console.log(reverseString("tauhida"));

  //console.log('#4 - nth Triangular Number');
  //console.log(triangle(5));

  //console.log('#5 - String Splitter');
  //console.log(split('1/21/2018', '/'));

  //console.log('#6 - Binary Representation');
  //console.log(convertToBinary(25));

  //console.log('#7 - Anagrams');
  //printAnagram("east");

  //console.log('#8 - animalHierarchy');
  //console.log(traverse(animalHierarchy, null));

  //console.log('#9 - Factorial');
  //console.log(factorial(5)); //120

  //console.log('#10 - Fibonacci');
  //console.log(fibonacci(7));

  console.log('#11 - Organization Chart');
  console.log(traverseA(organization));
  //console.log(traverseB(organization));
}
main();
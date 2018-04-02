'use strict';
function sheepCounter(num) {
  if (num === 0) {
    return '';
  }

  console.log(`${num} - Another sheep jump over the fence`);
  sheepCounter(num - 1);
}

sheepCounter(3);

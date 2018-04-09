'use strict';
const Queue = require('./queues');

function main() {
  let q = new Queue();

  q.enqueue('Muaath');
  console.log(q);
}

main();

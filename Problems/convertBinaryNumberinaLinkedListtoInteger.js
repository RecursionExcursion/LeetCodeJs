var getDecimalValue = function (head) {
  const numArr = [];

  while (true) {
    numArr.push(head.val);
    if (head.next === null) {
      break;
    }
    head = head.next;
  }

  let binaryMultiplier = Math.pow(2, numArr.length - 1);
  return numArr
    .map((e) => {
      const ret = e * binaryMultiplier;
      binaryMultiplier /= 2;
      return ret;
    })
    .reduce((acc, val) => acc + val, 0);
};

const node1 = {
  val: 1,
  next: null,
};

const node2 = {
  val: 0,
  next: null,
};

const node3 = {
  val: 1,
  next: null,
};

node1.next = node2;
node2.next = node3;

console.log("Answer: ", getDecimalValue(node1));

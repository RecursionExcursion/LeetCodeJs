/**
 * @param {number[][]} grid
 * @return {number[]}
 */
const findMissingAndRepeatedValues = function (grid) {
  const arrIndex = new Array(grid[0].length ** 2).fill(0);

  for (let i of grid) {
    for (let j of i) {
      arrIndex[j - 1] = arrIndex[j - 1] + 1;
    }
  }

  const ans = [];

  for (let i = 0; i < arrIndex.length; i++) {
    if (arrIndex[i] === 2) ans[0] = i + 1;
    else if (arrIndex[i] === 0) ans[1] = i + 1;
  }

  return ans;
};

const param1 = [
  [1, 3],
  [2, 2],
];
const param2 = [
  [9, 1, 7],
  [8, 9, 2],
  [3, 4, 6],
];

const ans1 = findMissingAndRepeatedValues(param1);
const ans2 = findMissingAndRepeatedValues(param2);

console.log(ans1);
console.log(ans2);

/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
  let count = 0;
  for (let i = 0; i < strs[0].length; i++) {
    let curr;
    for (let j = 0; j < strs.length; j++) {
      //Load curr vals into array
      const val = strs[j][i];
      if (val < curr) {
        count++;
        break;
      } else {
        curr = val;
      }
    }
  }
  return count;
};

const ans = minDeletionSize(["cba", "daf", "ghi"]);

console.log({ ans });

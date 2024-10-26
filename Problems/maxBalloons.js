// /**
//  * @param {string} text
//  * @return {number}
//  */
// var maxNumberOfBalloons = function (text) {
//   const balloonArr = "balloon".split("");
//   const textArr = text.split("");
//   let count = 0;

//   let letterMap = new Map(balloonArr.map((key) => [key, 0]));

//   textArr.forEach((key) => {
//     if (letterMap.has(key)) {
//       letterMap.set(key, letterMap.get(key) + 1);
//     }
//   });

//   let flag = true;
//   while (flag) {
//     for (let n of balloonArr) {
//       const value = letterMap.get(n);

//       if (!value) {
//         console.log(n, "i broke :(");
//         flag = false;
//         break;
//       }

//       letterMap.set(n, value - 1);
//     }

//     if (flag) count++;
//   }

//   return count;
// };

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const word = "balloon";

  //   const textIndexes = new Array(26).fill(0);
  //   const wordIndexes = new Array(26).fill(0);
  const indexes = new Array(26).fill(0);

  for (let i in word) indexes[word.charCodeAt(i) - 97] += 2;
  console.log(indexes);
  for (let i in text) indexes[text.charCodeAt(i) - 97]--;
  console.log(indexes);

  let minOccurences = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < indexes.length; i++) {
    const index = indexes[i];
    if (index > 0) {
      minOccurences = Math.min(minOccurences, index / 2);
    }
  }

  return minOccurences;
};

let foo = maxNumberOfBalloons("balon");
let foo2 = maxNumberOfBalloons("balloonballoo");
console.log(foo, foo2);

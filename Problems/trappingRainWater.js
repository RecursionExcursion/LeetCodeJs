var trap = function (height) {
  let trappedWater = 0;

  for (let i = 0; i < height.length; i++) {
    let pointer = -1;
    const currHeight = height[i];

    if (currHeight === 0) continue;

    let nextPeakIndex = 0;

    for (let j = i + 1; j < height.length; j++) {
      const nextHeight = height[j];

      if (nextHeight === 0) continue;

      if (nextHeight > height[nextPeakIndex]) {
        //Assign next peak height
        // console.log(`Assinging next peak to ${j}`);

        nextPeakIndex = j;
      }

      if (height[j] >= currHeight) {
        console.log(`Solving for trapped water i-${i} j-${j}`);

        //Solve for trapped water
        let filledSpace = 0;
        for (let k = i + 1; k < j; k++) {
          filledSpace += height[k];
        }

        const possibleSpace = Math.min(currHeight, nextHeight) * (j - i - 1);

        trappedWater += possibleSpace - filledSpace;

        console.log(
          `Poss Space = ${possibleSpace} filled space = ${filledSpace} trapped = ${trappedWater}`
        );

        pointer = j;
        
        break;
      }
    }
    //Possible flag needed to solve for the lower height being last

    if (pointer != -1) {
      i = pointer - 1;
    }
  }

  return trappedWater;
};
// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1].reverse()));
// console.log(trap([4, 2, 0, 3, 2, 5]));
// console.log(trap([5, 4, 1, 2]));
// console.log(trap([5, 5, 1, 7, 1, 1, 5, 2, 7, 6]));

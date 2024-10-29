/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const isRotated = (arr) => arr[0] > arr[arr.length - 1];

  let baseIndex = 0;

  while (true) {
    const midIndex = Math.floor(nums.length / 2);

    const arr1 = nums.slice(0, midIndex);
    const arr2 = nums.slice(midIndex, nums.length);

    if (nums[midIndex] === target) {
      return midIndex + baseIndex;
    }

    if (nums.length === 1 || nums.length === 0) {
      return -1;
    }

    const isArr1Rotated = isRotated(arr1);
    let unrotatedArr = isArr1Rotated ? arr2 : arr1;

    if (
      target >= unrotatedArr[0] &&
      target <= unrotatedArr[unrotatedArr.length - 1]
    ) {
      baseIndex += !isArr1Rotated ? 0 : midIndex;
      nums = !isArr1Rotated ? arr1 : arr2;
    } else {
      baseIndex += isArr1Rotated ? 0 : midIndex;
      nums = isArr1Rotated ? arr1 : arr2;
    }
  }
};

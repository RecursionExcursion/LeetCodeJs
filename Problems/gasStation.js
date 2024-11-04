/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const stations = gas.map((g, i) => g - cost[i]);
  if (stations.reduce((acc, curr) => (acc += curr)) < 0) return -1;

  for (let i = 0; i < stations.length; i++) {
    if (stations[i] <= 0) continue;
    let gasTank = 0;
    let curr = i;
    while (true) {
      gasTank += stations[curr];
      if (gasTank < 0) break;
      curr = curr >= stations.length - 1 ? 0 : ++curr;
      if (curr === i) return i;
    }
  }
  return 0;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));

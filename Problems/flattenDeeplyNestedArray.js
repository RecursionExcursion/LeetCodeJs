/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    var newArr = new Array();
    flatten(newArr, arr, n, -1);
    return newArr
};

var flatten = function (newArr, element, n, currentDepth) {
    for (let i of element) {

        if (!Array.isArray(i) || currentDepth >= n) {
            newArr.push(i)
            continue;
        } else {
            flatten(newArr, i, n, currentDepth + 1)
        }
    }
};

//6 elements in arr
var arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
var n = 0

console.log(flat(arr, n));

arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 2
console.log(flat(arr, n));
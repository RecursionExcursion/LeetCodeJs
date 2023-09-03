var arr = [1, 2, 2, 6, 6, 6, 6, 7, 10]
var arr2 = [1, 1]


var findSpecialInteger = function (arr) {

    let map = new Map()

    for (let e of arr) {

        let exists = false

        for (let key of map.keys()) {
            if (key == e) {
                exists = true
                break
            }
        }
        if (!exists) {
            map.set(e, 1)
        } else {
            var temp = map.get(e)
            map.set(e, temp + 1)
        }
    }

    const cutOff = arr.length * .25

    let ans = []

    for(let key of map.keys()) {
        let val = map.get(key)
        if(val > cutOff){
            ans.push(key)
        }
    }
     return ans
};


console.log(findSpecialInteger(arr))
console.log(findSpecialInteger(arr2))
var shortestCompletingWord = function (licensePlate, words) {

    const letterMap = new Map()

    const letters = [...licensePlate]

    letters.forEach(l => {

        if (l.toLowerCase() != l.toUpperCase()) {

            l = l.toLowerCase()

            if (!letterMap.has(l)) {
                letterMap.set(l, 1)
            } else {
                const val = letterMap.get(l)
                letterMap.set(l, val + 1)
            }
        }
    })

    words.sort((a, b) => a.length > b.length)

    const ansMap = new Map()

    words.forEach(w => {
        const strings = [...w]
        const tempMap = new Map(letterMap)
        ansMap.set(w, 0)
        strings.forEach(s => {

            s = s.toLowerCase()

            if (tempMap.has(s)) {
                var val = tempMap.get(s)
                if (val > 0) {
                    var occ = ansMap.get(w)
                    ansMap.set(w, ++occ)
                    tempMap.set(s, --val)
                }
            }
        })
    })

    var min = 0;
    var ans = words[0]

    for (const [key, value] of ansMap.entries()) {
        if (value > min) {
            ans = key
            min = value
        } else if (value == min) {
            if (key.length < ans.length) {
                ans = key
            }
        }
    }
    return ans
};



var licensePlate = "1s3 PSt"
var words = ["step", "steps", "stripe", "stepple"]

console.log(shortestCompletingWord(licensePlate, words))

licensePlate = "1s3 456"
words = ["looks", "pest", "stew", "show"]

console.log(shortestCompletingWord(licensePlate, words))
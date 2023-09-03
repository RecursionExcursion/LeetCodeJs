let words2 = ["mass", "as", "hero", "superhero"]
let words3 = ["leetcode", "et", "code"]
let words4 = ["blue", "green", "bu"]

var stringMatching = function (words) {

    let list = []

    for (var i in words) {
        let w = words[i]

        for (var j in words) {
            let sub = words[j]

            if(w == sub){
                continue
            }

            let isPresent = w.includes(sub)

            if (isPresent) {
                if (!list.includes(sub)) {
                    list.push(sub)
                }
            }
        }
    }
    return list
};

console.log(stringMatching(words2))
console.log(stringMatching(words3))
console.log(stringMatching(words4))
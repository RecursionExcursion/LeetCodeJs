var findPoisonedDuration = function (timeSeries, duration) {

    let secondsPoisoned = 0
    let last = timeSeries[0]

    for (let i = 1; i < timeSeries.length; i++) {
        secondsPoisoned += Math.min(timeSeries[i] - last, duration)
        last = timeSeries[i]
    }

    return secondsPoisoned + duration
};

console.log(findPoisonedDuration([1, 4], 2))
console.log(findPoisonedDuration([1, 2], 2))
console.log(findPoisonedDuration([1, 2, 3, 4, 5, 6, 7, 8, 9], 1))

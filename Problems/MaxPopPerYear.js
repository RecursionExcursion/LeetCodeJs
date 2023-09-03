var maximumPopulation = function (logs) {
    //find the earilest year 
    var map = new Map()
    var popYear = 0;
    var maxPop = 0;

    logs.sort((a, b) => a[0] - b[0])
        .forEach(e => {
            for (let i = e[0]; i < e[1]; i++) {

                var value = map.get(i)
                if (value == null) {
                    map.set(i, 1)
                } else {
                    map.set(i, ++value)
                }

            }
        });



    for (let key of map.keys()) {
        var currentPop = map.get(key);

        if (currentPop > maxPop) {
            maxPop = currentPop;
            popYear = key;
        }
    }
    return popYear;

};


var logs = [[1993, 1999], [2000, 2010]]
var logs2 = [[1950, 1961], [1960, 1971], [1970, 1981]]

console.log('logs', maximumPopulation(logs))
console.log('logs2', maximumPopulation(logs2))
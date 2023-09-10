var daysBetweenDates = function (date1, date2) {
    return Math.abs((new Date(date1) - new Date(date2)) / (1000 * 60 * 60 * 24))

};

console.log(daysBetweenDates("2019-06-29", "2019-06-30"))
console.log(daysBetweenDates("2020-01-15", "2019-12-31"))
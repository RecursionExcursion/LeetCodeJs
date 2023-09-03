/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {

    const foo = date.split('-');
    const year = parseInt(foo[0]);
    const month = parseInt(foo[1]);
    const day = parseInt(foo[2]);
    
    const start = new Date(year, 0, 1, 0, 0, 0, 0); // January 1st, 00:00:00 of the given year
    const end = new Date(year, month - 1, day, 0, 0, 0, 0); // Given date at 00:00:00

    return ((end - start) /1000 / 60 /60 /24 ) + 1
};

dayOfYear("2019-02-01")
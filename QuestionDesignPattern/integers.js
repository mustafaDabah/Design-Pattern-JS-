/**
 * Write a function to determine if a number is an integer
 */

let isInt = function (num) {
    if(Number.isInteger(num) && !isNaN(num)) {
        return 'true ' + num
    }

    return false
}
console.log(3, isInt(3));
console.log(3.5, isInt(3.5));
console.log(3.5, isInt(3.5));
console.log(1.00000, isInt(1.00000));
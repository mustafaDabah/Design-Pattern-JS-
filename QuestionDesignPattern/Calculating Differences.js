/**
 * Write a function to determine the largest difference 
 * between any two numbers in an array of numbers
 */

let numbers = [12, 2, 6, 5, 9, 10, 33];

let difference = (function (arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    return max - min

})(numbers);

console.log(difference);

console.log(Math.min(...numbers))
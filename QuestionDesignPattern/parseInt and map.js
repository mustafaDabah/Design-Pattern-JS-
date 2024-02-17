//Why do we get this weird result from the map method?
// myarray.map(func);
//We want to convert 3 strings into numbers

// let result = ['1', '7', '8', '11'].map((item) => parseInt(item)); //returns [1, NaN, 3]
let result = ['1', '7', '8' ,'9' , '11'].map(parseInt); //returns [1, NaN, 3]

console.log(result);
console.log(parseInt(['1', '7', '8', '11']));
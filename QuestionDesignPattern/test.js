const num = 2 ;
const num2 = 2 ;

function sum() {
    return num + num2
}

setTimeout(() => {
    console.log('first')
} , 0)

const num3 = sum();
console.log(num3)
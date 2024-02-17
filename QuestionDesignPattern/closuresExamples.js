function parentFunction() {
    let myValue = 2 ;

    // console.log(myValue)

    const childComponent = () => {
        return myValue++
    }

    return childComponent;

}

const count = parentFunction();
const count2 = parentFunction();
console.log(count())
// console.log(count())
console.log(count2());
console.log(count2());
console.log(count2());
console.log(count2());
console.log(count())


const privateCounter = (() => {
    let count = 0 ;

    console.log(`initial value: ${count}`)
    return () => {count += 1 ; console.log(count)}
})();

// privateCounter()
// privateCounter()
// privateCounter()

// >>>>>>> anther example of Closure 

// document.getElementById('size-12').onclick = function() {
//     document.body.style.fontSize = '12px'
// }
// document.getElementById('size-13').onclick = function() {
//     document.body.style.fontSize = '13px'
// }
// document.getElementById('size-14').onclick = function() {
//     document.body.style.fontSize = '14px'
// }

const btn1 = document.getElementById('size-12' );

function btnSizeClosure(btn , size) {
    return () =>  btn.style.fontSize = size;
}

// const changeSize2 = btnSizeClosure();

btn1.onclick = btnSizeClosure(btn1 ,'111px')

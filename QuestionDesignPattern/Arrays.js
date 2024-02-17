let a1 = [];

function makeRandomNumber() {
    if (a1.length === 5) {
        return a1
    }

    const randomNum = Math.floor(Math.random() * 1000);
    a1.push(randomNum);
    makeRandomNumber();
    console.log(randomNum)
}

makeRandomNumber();
console.log(a1)

let a2 = Array.from({
    length: 5
}, n => Math.random());
console.log('1', a1);

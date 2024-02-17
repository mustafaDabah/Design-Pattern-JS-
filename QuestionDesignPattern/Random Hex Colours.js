const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 

function colour(value = '#') {
    let hex = value;
    if(hex.length === 7) {
        return hex;
    }

    const index = hexValues[Math.floor(Math.random()*hexValues.length)];
    hex += index
    return colour(hex)
}

console.log(colour());

function colourClosure(value = '#') {
    let hex = value;
    
    function chooseIndex() {
        if(hex.length === 7) {
            return hex;
        }
    
        const index = hexValues[Math.floor(Math.random()*hexValues.length)];
        hex += index;
        chooseIndex()
        return hex
    }

    return chooseIndex
};

// const generateFirstColor = colourClosure()
// const generateFirstColor2 = colourClosure()

// console.log(generateFirstColor())
// console.log(generateFirstColor2());

function colour2() {
    return '#' + Math.random().toString(16).substring(2 , 8);
}

console.log(colour2())

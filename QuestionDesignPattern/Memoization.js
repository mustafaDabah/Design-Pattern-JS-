const initApp = async () => { 
    // console.log(multiplyBy10(10)) 
    // console.log(multiplyBy10(10)) 
    // console.log(multiplyBy10(10))

    // run first example >>>>
    // const cacheOne = singleTon.getInstance(10);
    // const cacheTwo = singleTon.getInstance(10);
    // const cacheThree = singleTon.getInstance(10);
    // const cacheThreee = singleTon.getInstance(30);

    // console.log(cacheOne);
    // console.log(cacheTwo);
    // console.log(cacheThree);
    // console.log(cacheThreee)
    
    // run second example >>>> 

    // const value1 = memoize(multiplyBy10);
    // console.log(value1(10 , 4))
    // console.log(value1(10 , 4))
    // console.log(value1(10 , 4))
    // console.log(value1(10 , 3))
    
}

document.addEventListener('DOMContentLoaded' , initApp);



// example one 
function multiplyBy10(num , num) {
    return num*10*num;
}

let singleTon = (function memoizedMultiplyByNum() {
    const cache =  {};

    return {
        getInstance(num) {
            if(num in cache) {
                console.log(cache)
                return cache[num]
            }else {
                const results = num * 10
                cache[num] = results
                return results
            }
        }
    }
})();


// example two
const memoize = (fn) => {
    const cache = {};

    return (...args) => {
        if(args.toString() in cache) {
            console.log('cache');
            return cache[args.toString()];
        }

        const results = fn(...args);
        cache[args.toString()] = results;
        return results
    }
}


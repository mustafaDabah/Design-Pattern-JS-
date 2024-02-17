//var hoisting vs let hoisting
//WHAT will be the output from this code and why?

function f() {
    if(area !== undefined) {
        console.log('var', area); // undefined 
    }
    try {
        console.log('let', name); // error 
    } catch (error) {
        console.log(error.message)
    }
    
    let name = 'Bert'; 
    var area = 'Geology';
}
f();
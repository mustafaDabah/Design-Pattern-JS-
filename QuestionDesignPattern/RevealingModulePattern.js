let myModule = (function() {
    let _data = [];
    let _render = function() {
        console.log('render')
    }

    let _add = function() {
        _data.push('hello')
    };

    let _remove = function() { 
        _data.pop()
    };

    return {
        data:_data,
        add:_add
    }

})();

myModule.add()
console.log(myModule)
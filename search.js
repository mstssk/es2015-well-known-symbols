// node --harmony search.js
let bar = {
    [Symbol.search]: function (str) {
        if (str === 'bar') {
            return 'This is bar!'
        } else {
            return 'This is not bar!';
        }
    }
}

// Symbol.searchを使えば、String.prototype.searchの処理と返り値を独自実装できる
console.log('foo'.search(bar)); // -> 'This is not bar!'
console.log('bar'.search(bar)); // -> 'This is bar!'
console.log('bar'.search(/a/)); // -> 1

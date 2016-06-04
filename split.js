// node --harmony split.js
let bar = {
    [Symbol.split]: function (str) {
        if (str === 'bar') {
            return 'This is bar split!'
        } else {
            return 'This is not bar split!';
        }
    }
}

// Symbol.splitを使えば、String.prototype.splitの処理と返り値を独自実装できる
console.log('foo'.split(bar)); // -> 'This is not bar split!'
console.log('bar'.split(bar)); // -> 'This is bar split!'
console.log('bar'.split(/a/)); // -> [ 'b', 'r' ]

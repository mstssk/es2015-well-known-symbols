// node --harmony match.js
let bar = {
    [Symbol.match]: function (str) {
        if (str === 'bar') {
            return 'This is bar!'
        } else {
            return 'This is not bar!';
        }
    }
}

// Symbol.matchを使えば、String.prototype.matchの処理と返り値を独自実装できる
console.log('foo'.match(bar)); // -> 'This is not bar!'
console.log('bar'.match(bar)); // -> 'This is bar!'
console.log('bar'.match(/bar/)); // -> [ 'bar', index: 0, input: 'bar' ]

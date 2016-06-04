// node --harmony replace.js
let bar = {
    [Symbol.replace]: function (search, replacement) {
        return `${search} -> ${replacement}`;
    }
}

// Symbol.replaceを使えば、String.prototype.replaceの処理と返り値を独自実装できる
console.log('foo'.replace(bar, 'rep')); // -> 'foo -> rep'
console.log('bar'.replace(bar, 'rep')); // -> 'bar -> rep'
console.log('bar'.replace(/a/, '@')); // -> 'b@r'

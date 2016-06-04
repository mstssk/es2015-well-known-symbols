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

// Symbol.matchを持ったオブジェクトはRegExpと見なすので、下記はType Errorになる。
// ※ Node 6.2.1では下記メソッドの実装が仕様通りではないので、エラーにならない。
console.log('bar'.startsWith(bar));
console.log('bar'.endsWith(bar));
console.log('bar'.includes(bar));

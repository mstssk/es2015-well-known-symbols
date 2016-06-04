// node --harmony isConcatSpreadable.js
let foo = {
    0: 'foo',
};
let bar = {
    [Symbol.isConcatSpreadable]: true,
    length: 3,
    0: 'b', 1: 'a', 2: 'r',
}

// 要素としてconcatされる
console.log(['array'].concat(foo)); // -> [ 'array', { '0': 'foo' } ]

// 配列同士の同じようにconcat
console.log(['array'].concat(bar)); // -> [ 'array', 'a', 'b', 'c' ]

// 名前が紛らわしいがspread operatorが使えるかどうかとは関係ない。
// spread operatorを使うにはiteratorが実装されていればいい

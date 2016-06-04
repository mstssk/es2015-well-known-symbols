// node --harmony toPrimitive.js
// note https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive

let foo = {};
let bar = {
    [Symbol.toStringTag]: 'bar',
};
class Hoge {
    get [Symbol.toStringTag]() { return 'Hoge'; };
}
let hoge = new Hoge();

console.log(foo.toString()); // -> [object Object]
console.log(bar.toString()); // -> [object bar]
console.log(hoge.toString()); // -> [object Hoge]

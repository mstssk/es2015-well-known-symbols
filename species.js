// node --harmony species.js
// note: http://js-next.hatenablog.com/entry/2016/01/26/180300

class FooArray extends Array {
}
class BarArray extends Array {
    static get [Symbol.species]() {
        return FooArray;
    }
}
class BazArray extends Array {
    static get [Symbol.species]() {
        return String;
    }
}

let foo = new FooArray(1, 2, 3);
let bar = new BarArray(1, 2, 3);
let baz = new BazArray(1, 2, 3);

console.log(foo.constructor); // -> [Function: FooArray]
console.log(foo.concat('').constructor); // -> [Function: FooArray]

console.log(bar.constructor); // -> [Function: BarArray]
console.log(bar.concat('').constructor); // -> [Function: Array]

console.log(foo.constructor); // -> [Function: FooArray]
console.log(foo.concat('').constructor); // -> [Function: FooArray]

console.log(baz.constructor); // -> [Function: BazArray]
console.log(baz.concat('').constructor); // -> 派生オブジェクトをStringで初期化なんかできないのでエラー！

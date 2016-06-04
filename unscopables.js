// node --harmony unscopables.js

let foo = { a: 1, b: 2, c: 3 };
with (foo) {
    console.log(a, b, c); // -> 1, 2, 3
    console.log(toString()); // -> [object Object]
}

let bar = [1, 2, 3];
with (bar) {
    console.log(length); // -> 3
    try {
        // http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype-@@unscopables
        console.log(find); // findなど幾つかのプロパティは@@unscopablesに含まれているのでwithスコープ内に展開されずエラーになる
    } catch (e) {
        console.error(e); // ReferenceError: find is not defined
    }
}

let baz = {
    a: 'これは見える',
    b: 'これは見えない',
    [Symbol.unscopables]: { b: true },
}
with (baz) {
    console.log(a); // -> これは見える
    try {
        console.log(b);
    } catch (e) {
        console.error(e); // ReferenceError: b is not defined
    }
}

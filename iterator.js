// node --harmony iterator.js
let bar = {
    length: 3,
    0: 'b', 1: 'a', 2: 'r',

    [Symbol.iterator]: function* () {
        for (let i = 0; i < this.length; i++) {
            yield this[i];
        }
    }
}
function spreading(a, b, c) {
    console.log(`a=${a}, b=${b}, c=${c}`);
}

// for-ofはiteratorを使う
for (let e of bar) {
    console.log(e); // -> b a r 
}

// spread operatorも使える
spreading(...bar); // -> a=b, b=a, c=r

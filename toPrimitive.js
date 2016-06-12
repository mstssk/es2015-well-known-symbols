// node --harmony toPrimitive.js
// note https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive

let foo = {
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'number': return 100;
            case 'string': return 'abc';
            // case 'default':
            default: return true;
        }
    }
};
class Weekday {
    constructor(date) {
        this.value = date.getDay();
    }
    [Symbol.toPrimitive](hint) {
        switch (hint) {
            case 'number': return this.value;
            // case 'string':
            // case 'default':
            default: return ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][this.value];
        }
    }
}
let date = new Date();
let weekday = new Weekday(date);

console.log(+foo); // -> 100 数値へのキャストはhint=numberの場合の値
console.log(`${foo}de`); // -> abcde 文字列として扱う場合はhint=stringの場合の値
console.log({abc:123}[foo]); // -> 123 キーとして扱う場合はhint=string http://www.ecma-international.org/ecma-262/6.0/#sec-topropertykey
console.log(foo + ''); // -> true +記号による文字列結合ではhint=defaultになる 

console.log(+date); // 日付の数値表現
console.log(`${date}`); // 日付の文字列表現
console.log(date + ''); // defaultは文字列表現

console.log(+weekday); // 曜日の数値表現
console.log(`${weekday}`); // 曜日の文字列表現
console.log(weekday + ''); // defaultは文字列表現

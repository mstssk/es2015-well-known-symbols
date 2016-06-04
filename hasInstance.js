// node --harmony hasInstance.js
class Foo { }
class Bar {
	static [Symbol.hasInstance](obj) {
		return obj.constructor == Foo;
	}
}

let foo = new Foo();
let bar = new Bar();
console.log(foo instanceof Foo); // Foo[Symbol.hasInstance](foo) -> true
console.log(foo instanceof Bar); // Bar[Symbol.hasInstance](foo) -> true!
console.log(bar instanceof Bar); // Bar[Symbol.hasInstance](bar) -> false!

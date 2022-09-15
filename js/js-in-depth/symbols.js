"use strict";
const symbol1 = Symbol("mysymbol");
console.log(symbol1);
const symbol2 = Symbol.for("mysymbol");
console.log(symbol2);
console.log(symbol1 == symbol2);

const iterable = {
    [Symbol.iterator] () {

    }
}

const s = String(symbol1);
// console.log(s);
// console.log(typeof symbol1);

// Computed property key
const sym1 = Symbol("Hi");
const obj = {
    [sym1]() {
        
    },
    enum: 4
}
Object.defineProperty(obj, "noEnum", {
    enumerable: false
});
// obj.noEnum = 7;
// console.log(obj);

// console.log(Object.name(obj));

const sym2 = Symbol("new");
const wrap = Object(sym2);
// console.log("wrap", wrap);







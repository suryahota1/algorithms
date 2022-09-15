// "use strict";
const obj = {};
Object.defineProperties(obj, {
    "k1": {
        value: 4,
        enumerable: false,
        writable: true,
        configurable: false
    },
    "k2": {
        value: 5,
        enumerable: true
    }
});

// console.log(Reflect.ownKeys(obj));

const obj1 = {};

function copyAllProps ( target, sources ) {
    for ( let i = 0; i < sources.length; i++ ) {
        const ownKeys = Reflect.ownKeys(sources[i]);
        for ( let j = 0; j < ownKeys.length; j++ ) {
            const propDesc = Object.getOwnPropertyDescriptor(sources[i], ownKeys[j]);
            Object.defineProperty(target, ownKeys[j], propDesc);
        }
    }
}
copyAllProps(obj1, [obj]);
// console.log(obj1);

// Object.assign for methods which use super
class Base {
    display() {
        console.log("Base class");
    }
}

class Child extends Base {
    display() {
        super.display();
    }
}

const c = new Child();
// c.display();
// console.log(c);
const ref = {}
Object.assign(ref, {display: c.display});
// ref.display();

// console.log(NaN === NaN);

const obj2 = {
    get prop() {
        return 3;
    }
}

console.log(obj2.prop);
obj2.prop = 4; // Throws Error in strict mode
console.log(obj2.prop);
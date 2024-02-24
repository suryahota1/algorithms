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


// Object.assign polyfill
function copyOwnProps ( target, ...sources ) {
    for ( const source of sources ) {
        const ownKeys = Reflect.ownKeys(source);
        for ( const ownKey of ownKeys ) {
            const propDesc = Object.getOwnPropertyDescriptor(source, ownKey);
            Object.defineProperty(target, ownKey, propDesc);
        }
    }
}


// Object.create
const proto = {
    key1: 1234
};
const o1 = Object.create(proto, {
    foo: {
        value: 123, 
        enumerable: true, 
        configurable: true, 
        writable: true
    }, 
    bar: {
        enumerable: true, 
        configurable: true, 
        get() {
            return 78;
        },
        set( val ) {
            console.log("To set value");
        },
        writable: true
    }
});

// Object.assign
// Assigns all enumerable own properties from one or more sources into a target object
// It uses [[Get]] and [[Set]] internal methods and hence uses getter and setters. So It is using
// property assignment rather than propery defining
// Both string and symbol properties are copied


// Custom new Operator in JavaScript

function newOperator ( ConstrFn, ...args ) {
    const thisValue = Object.create(ConstrFn.prtotype);
    const result = ConstrFn.apply(thisValue, args);
    if ( typeof result === "object" && result !== null ) return result;
    return thisValue;
}

// Create a function in super constructor that helps creating objects of any child constructor
// whoever requests

function SuperConstr () {

}

SuperConstr.prototype.createInstance = function ( ...args ) {
    return new this.constructor.apply(this, args);
}

// Crockford privacy pattern 

function ConstrFn2 () {

    // Private state
    const privateVar = [];

    // Private method
    function privateMethod () {

    }

    // Priviledged methods, accessible publicly and have access to private data
    this.add = function ( item ) {
        privateVar.push(item);
    }

    this.remove = function () {
        privateVar.shift();
    }
}

// interface DataPropertyDescriptor {
//     value?: any, 
//     writable?: Boolean, 
//     enumerable?: Boolean, 
//     configurable?: Boolean, 
// }

// interface AccessorPropertyDescriptor {
//     get?: () => any, 
//     set?: () => any, 
//     enumerable?: Boolean, 
//     configurable?: Boolean, 
// }

// type PropertyDescriptor = DataPropertyDescriptor | AccessorPropertyDescriptor;

// Example generator function
function * gen () {
    console.log("Hello");
    yield;
    console.log("World");
    yield;
}

const genr = gen();
// console.log(genr.next());
// console.log(genr.next());

// Types of genertaor functions
// 1. Generator function declaration
function * genFunc () {
    // ...
}
const gen1 = genFunc();
// 2. Generator function expression
const genFunc1 = function * () {
    // ...
}
const gen2 = genFunc1();
// 3. Object literal method definition
const obj = {
    *genFunc () {
        // ...
    }
}
const gen3 = obj.genFunc();
// 4. Class generator method definition
class cl {
    *genFunc () {
        // ...
    }
}
const gen4 = new cl().genFunc();

// Use cases for generators

// Implementing iterables

function * genItr ( obj ) {
    const keys = Reflect.ownKeys(obj);

    for ( let i = 0; i < keys.length; i++ ) {
        yield[keys[i], obj[keys[i]]];
    }
}

// const itr4 = genItr({ a: 1, b: 2, [Symbol("test")]: "Surya"});
// console.log(itr4.next());
// console.log(itr4.next());
// console.log(itr4.next());
// console.log(itr4.next());



// Recursion via yield*
function* foo () {
    yield "a";
    yield "b";
}

function* bar () {
    yield "c";
    yield* foo();
    // Same as next line;
    // for ( const x of foo() ) yield x;
    yield "d";
}

// console.log([...bar()]);

function* genFuncWithReturn() {
    yield 'a';
    yield 'b';
    return 'The result';
}

// for ( const x of genFuncWithReturn() ) console.log(x);



// Generator as data consumer 
function* genFunc2 () {
    console.log("started");
    const ip1 = yield "hi";
    console.log("input1 " + ip1);
    const ip2 = yield "hello";
    console.log("input2 " + ip2);
}

// const gen5 = genFunc2();
// gen5.next(1);
// gen5.next(1);
// gen5.next(2);
// gen5.next(3);



// Utility function which handles the first time generator function
function getGen ( generatorFn ) {
    return function ( ...args ) {
        const genVal = generatorFn(...args);
        const d = genVal.next();
        return genVal;
    }
}

// const wrapped = getGen(genFunc2)();
// console.log(wrapped.next(1));

function* genFunc3 () {
    try {
        console.log("started");
        yield;
        console.log("continue");
        yield;
        console.log("exit");
        return;
    } finally {
        console.log("in finally");
        yield "hi";
    }
}

// const gen6 = genFunc3();
// gen6.next();
// gen6.return("hello");
// gen6.next();

function* genFunc7 () {

}

// console.log(genFunc7().return("hi"));

function* genFunc4 () {
    try {
        console.log("started");
        yield;
        console.log("finished");
        yield;
    } catch ( e ) {
        try {
            console.log("Error occured");
            yield "hello";
            yield "hello2";
        } catch ( e2 ) {
            yield "hello23";
        }
    }
}

const gen7 = genFunc4();
console.log(gen7.next());
console.log(gen7.throw("Error"));
console.log(gen7.next());
console.log(gen7.throw("Error22"));

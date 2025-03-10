function* genFunc1 () {

}

const genFunc2 = function* () {

}

const obj = {
    *genFunc3() {

    }
}

class Demo1 {
    *genFunc4() {

    }
}

// Object Entries

function* getObjectEntries ( obj ) {
    const keys = Reflect.ownKeys(obj);

    for ( const key of keys ) {
        yield [key, obj[key]];
    }
}

for ( const [key, value] of getObjectEntries({a: 1}) ) {
    console.log(key, value);
}

// Internal working of async functions using generators and promises

async function exampleAsync ( url ) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Internally it is converted into a generator function

function* exampleGen ( url ) {
    const response = yield fetch(url);
    const data = yield response.json();
    return data;
}

// There is a utility function which takes this generator function and simulates the asynchronous behaviour

function asyncToGenerator ( generatorFunc ) {
    return function ( ...args ) {
        const genObj = generatorFunc(...args);
        return new Promise(( resolve, reject ) => {
            function rec ( arg ) {
                let result;
                try {
                    result = genObj.next(arg);
                } catch ( e ) {
                    reject(e);
                }
                const { value, done } = result;
                if ( done ) {
                    resolve(value);
                } else {
                    Promise.resolve(value).then(resp => {
                        rec(resp);
                    }).catch(err => {
                        reject(err);
                    });
                }
            }
            rec();
        });
    }
}

// Recursive iteration b=via yield*

function* genA () {
    yield "a";
    yield "b";
    return "c";
}

function* genB () {
    yield "p";
    yield "q";
    return "r";
}

function* testGen () {
    return [ yield* genA(), yield* genB() ];
}

const a = testGen();
console.log(a.next());

// Make a binary tree iterable via generator function

class BinaryTree {
    constructor ( value ) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    *[Symbol.iterator]() {
        yield this.value;
        if ( this.left ) yield* this.left;
        if ( this.right ) yield* this.right;
    }
}
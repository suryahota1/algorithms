const obj = {
    a: 1,
    b: 4,
    get d () {
        console.log("to retrieve a4444");
        return this.a;
    }
    ,
    // get a () {
    //     console.log("to retrieve a");
    //     return this.a;
    // }
    // get d () {
    //     console.log("to retrieve a");
    //     return this.a;
    // }

    // Wrong
}

// console.log(obj.d);

const target = {
    "message1": "Hello",
    "message2": "Everyone"
};

const handler = {
    get ( obj, prop ) {
        if ( !(prop in obj) ) return null; 
        if ( prop === "message1" ) return "World";
        return Reflect.get(...arguments);
    }
};
const proxy = new Proxy(target, handler);

// console.log(proxy.message3);

class TargetCl {
    #atr = 3;
    get x () {
        return this.#atr;
    }
}
const ref = new TargetCl();

const proxyr = new Proxy(ref, {
    get ( obj, prop ) {
        return obj[prop];
    }
});
// console.log(proxyr.x);

// Using for validation

const validator = {
    set ( obj, prop, value ) {
        if ( prop === "age" && !Number.isFinite(value) ) {
            throw new TypeError("props has to be a number");
        } else if ( prop === "age" && value > 200 ) {
            throw new RangeError("Number exceeds limit");
        } else {
            obj[prop] = value;
        }
    }
};

try {
    const proxy1 = new Proxy({}, validator);
    proxy1.age = 230;
} catch ( e ) {

}






//////////////////////////////////////////////////////////

const targetObj = {
    prop1: "valu1", 
    prop2: "valu2"
};

const proxyRef = new Proxy(targetObj, {
    get() {
        
    }
});


// 26-02-2024

const target2 = {
    a: 3
};

const proxy2 = new Proxy(target2, {
    get ( target, key, receiver ) {
        console.log("Trapping get for target", target, key, receiver);
        return Reflect.get(target, key);
    }, 
    has ( target, key ) {
        console.log("Trapping has for target", target, key);
        return Reflect.has(target, key);
    }
});

console.log("a" in proxy2);
console.log(proxy2.a);

// Tracing method calls

function traceMethodCalls ( obj ) {
    return new Proxy(obj, {
        get ( target, key, receiver ) {
            if ( typeof target[key] === "function" ) {
                return function ( ...args ) {
                    const result = target[key].apply(target, args);
                    console.log("Trapping method calls", result);
                    return result;
                }
            } else return Reflect.get(target, key);
        }
    });
}

const input1 = {
    a: 1, 
    increment() {
        this.a++;
    }
};

const p1 = traceMethodCalls(input1);
p1.increment();
console.log("input1.a", input1.a);

// Implementing handler with proxy
const handler1 = new Proxy({}, {
    get ( target, trapName, receiver ) {
        console.log("target", target, receiver);
        return function ( ...args ) {
            console.log("trapName : Key", trapName, args);
            return Reflect[trapName](...args);
        }
    }
});

const target3 = {a: 55};
const proxy3 = new Proxy(target3, handler1);
proxy3.distance = 10;


// Trace property access without proxy
// We will do this by destructively creating getters and setters on the target object

function tracePropertyAccess ( input, propKeys ) {

    const map = new Map();
    
    propKeys.forEach(key => {
        map.set(key, input[key]);
        Object.defineProperty(input, key, {
            get() {
                console.log("GET " + key, map.get(key));
                return map.get(key);
            }, 
            set( value ) {
                console.log("SET " + key, value);
                map.set(key, value);
                return value;
            }
        })
    });
}



// Create a revocable reference for a resource

function createRevocableReference ( resource ) {

    let enabled = true;

    function revoke () {
        enabled = false;
    }

    const handler = new Proxy({} , {
        get( target, trapName ) {
            console.log("trapName", trapName);
            return function ( ...args ) {
                if ( !enabled ) throw new TypeError("Access has been revoked");
                return Reflect[trapName](...args);
            }
        }
    })

    const reference = new Proxy(resource, handler);

    return {
        reference, 
        revoke
    };
}

const res = { a: 4 };
const rev = createRevocableReference(res);
console.log("Revocable -------------------------------------");
rev.reference.a++
console.log(rev.reference.a);
rev.revoke();
console.log(rev.reference.a);

// Proxy for a function

function MyFunc ( ...args ) { return args.reduce(( accu, curr ) => accu + curr, 0) }

// Make sure MyFunc is never constructor called and always called with numbers only

const proxy4 = new Proxy(MyFunc, {
    apply( target, receiver, args ) {
        args.forEach(arg => {
            if ( Number(arg) !== arg ) throw new Error("Only numbers supported");
        });
        return Reflect.apply(target, receiver, args);
    },
    construct() {
        throw new Error("Can not be constructor called");
    }
});

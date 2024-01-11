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

const proxy1 = new Proxy({}, validator);
proxy1.age = 230;







//////////////////////////////////////////////////////////

const targetObj = {
    prop1: "valu1", 
    prop2: "valu2"
};

const proxyRef = new Proxy(targetObj, {
    get() {
        
    }
})
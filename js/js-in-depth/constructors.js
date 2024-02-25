class Test {
    constructor () {
        return undefined;
    }
    getVal () {
        return "Hi";
    }
}

const a = new Test();
const b = new Test();

// console.log(a);

function TestClass ( a ) {
    console.log(new.target);
    if ( !new.target ) return new TestClass();
}

// console.log("hi", new TestClass(2));
// console.log("hi", TestClass(3));

class TestEle {
    constructor ( a ) {
        this.ref = a;
        return new Array();
    }
}

// console.log("class", new TestEle(3));



// Initializing property of class class asynchronously

class MyDemo {
    data;

    constructor () {
        Promise.resolve("downloaded").then(resp => {
            this.data = resp;
        }).catch(err => {
            this.data = null;
        });
    }

    getData () {
        console.log("My data: " + this.data);
    }
}

const inst1 = new MyDemo();
inst1.getData();
setTimeout(() => {
    inst1.getData();
}, 0);

/**
 * One solution is to used a promise based constructor. The class returns a promise object 
 * instead of the class instance. and resolve with the instance when the prop is 
 * initialized completely.
 */
// Promise based constructor

class MyDemo1 {
    data;

    constructor () {
        return Promise.resolve("downloaded").then(resp => {
            this.data = resp;
            return this;
        }).catch(err => {
            this.data = null;
            return this;
        });
    }

    getData () {
        console.log("My data: " + this.data);
    }
}

const prom1 = new MyDemo1();
prom1.then(inst => {
    console.log("MyDemo1 inst", inst);
});

// We can also return an II async function

class MyDemo2 {
    data;

    constructor () {
        return (async () => {
            try {
                const result = await Promise.resolve("downloaded");
                this.data = result;
            } catch ( e ) {
                this.data = null;
            } finally {
                return this;
            }
        })()
    }

    getData () {
        console.log("My data: " + this.data);
    }
}

const prom2 = new MyDemo2();
prom2.then(inst => {
    console.log("MyDemo2 inst", inst);
});

// Static async method of class

class MyDemo3 {

    constructor ( data ) {
        this.data = data;
    }

    static async create () {
        const res = await Promise.resolve("downloaded");
        return new MyDemo3(res);
    }

    getData () {
        console.log("MyDemo3 data: " + this.data);
    }
}

MyDemo3.create().then(inst => {
    console.log("MyDemo3 inst", inst);
});

/**
 * We can protect object construction from outside by creating a private constructor
 * with a secret token. 
 * Considering both secret token and the class are in the same module and only the class
 * is exported. Hence outsider don't have access to the token and hence can not create 
 * the instance.
 */

const SECRET_TOKEN = Symbol("PrivateToken");

class MyDemo4 {

    constructor ( token, data ) {
        if ( token !== SECRET_TOKEN ) throw new Error("Can not instantiate");
        this.data = data;
    }

    static async create () {
        const res = await Promise.resolve("downloaded");
        return new MyDemo4(SECRET_TOKEN, res);
    }

    getData () {
        console.log("MyDemo4 data: " + this.data);
    }
}

MyDemo4.create().then(inst => {
    console.log("MyDemo4 inst", inst);
});

/**
 * Instead of using seccret token to prevent outside object creation, we can throw error 
 * from the constructor and have another factory method for creating the instance
*/

class MyDemo5 {

    constructor () {
        throw new Error("Constructor is private");
    }

    static async create () {
        const res = await Promise.resolve("downloaded");
        const newObj = Object.create(MyDemo5.prototype);
        return newObj.instantiate(res);
    }

    instantiate ( data ) {
        this.data = data;
        return this;
    }
}

MyDemo5.create().then(inst => {
    console.log("MyDemo5 inst", inst);
});

/**
 * factory and private method and flag
 */

class MyDemo6 {

    #flag;

    constructor () {
        this.#flag = false;
    }

    static async create () {
        const res = await Promise.resolve("downloaded");
        const obj = new MyDemo6();
        return obj.#instantiate(res);
    }

    #instantiate ( data ) {
        this.data = data;
        this.#flag = true;
        return this;
    }

    getData () {
        if ( !this.#flag ) throw new Error("");
        return this.data;
    }
}

// Subclassing a promise based constructor

class MyDemo7 {
    #data;

    constructor () {
        return Promise.resolve("downloaded").then(resp => {
            this.#data = resp;
            return this;
        }).catch(err => {
            this.#data = null;
            return this;
        });
    }

    getData () {
        console.log("My data: " + this.#data);
    }
}

class SubMyDemo7 extends MyDemo7 {

    moreData;

    constructor () {
        super();
        const promise = this;
        return promise.then(_this => {
            _this.moreData = 7;
            return _this;
        })
    }

    getData () {
        return this.moreData;
    }
}

new SubMyDemo7().then(inst => {
    console.log("SubMyDemo7 inst", inst);
});

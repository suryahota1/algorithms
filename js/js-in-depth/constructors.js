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

console.log("class", new TestEle(3));

class MyPromise {
    exFunc;
    thenFn;
    catchFn;
    constructor ( fn ) {
        this.exFunc = fn;
    }
    mythen ( fn ) {
        this.thenFn = fn;
        return this;
    }
    mycatch ( fn ) {
        this.catchFn = fn;
        return this;
    }
}

const asyncFunc = function (a, b) {
    return new MyPromise(( resolve, reject ) => {
        setTimeout(() => {
            console.log("Doing something with a and b", a, b);
            resolve();
        }, 2000);
    });
}

asyncFunc(1, 2).mythen(() => {

}).mycatch(() => {

});
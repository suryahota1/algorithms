// reduce polyfill

Array.prototype.myReduce = function ( fn, initVal ) {
    let data = initVal;
    // console.log("myReduce", this.constructor.name);
    this.forEach(( item, idx ) => {
        fn(data, item);
    });
    return data;
}

const pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
const petCount = pets.myReduce(( accumulator, currentValue ) => {
    if ( !accumulator.hasOwnProperty(currentValue) ) {
        accumulator[currentValue] = 0;
    }
    accumulator[currentValue]++;
    return accumulator;
}, {});

// console.log("petCount", petCount);

// Array.prototype.flat polyfill
const nestedArray = [[1, 2], [3, 4, 5, [6, [7, 8, [9, 0]]], [11, [12, 13]]], 14];
Array.prototype.myFlat = function () {
    let newArray = [];
    for ( let i = 0; i < this.length; i++ ) {
        if ( Array.isArray(this[i]) ) {
            newArray = newArray.concat(this[i].myFlat());
        } else {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

// console.log(nestedArray.myFlat());

Array.prototype.myReduceRight = function ( cb, initialValue ) {
    if ( initialValue === undefined && this.length === 0 ) throw new TypeError("Array is empty and initial value is unavailable");
    if ( initialValue === undefined && this.length === 1 ) return this[0];
    if ( initialValue !== undefined && this.length === 0 ) return initialValue;
    let sIdx;
    let result;
    if ( initialValue === undefined ) {
        result = this[this.length - 1];
        sIdx = this.length - 2;
    } else {
        result = initialValue;
        sIdx = this.length - 1;
    }

    for ( let i = sIdx; i >= 0; i-- ) {
        result = cb(result, this[i], i, this);
    }
    return result;
}

const arr1 = [[1, 2], [5, 7], [9, 2], [6, 8]];
const data1 = arr1.myReduceRight(( accumulator, currentValue, currentIndex, array ) => accumulator.concat(currentValue));

// console.log("data1 ====", data1);

// Function composition

const compose = ( ...functions ) => ( initialValue ) =>
        functions.reduceRight(( accumulator, currFunction ) => 
        currFunction(accumulator), initialValue);

const inc = (n) => n + 1;
const double = (n) => n * 2;

// console.log(compose(inc, double)(2));

// Asynchronous function waterfall

const add5 = (callback, x) => {
    setTimeout(callback, randInt(1000), x + 5);
};
const mult3 = (callback, x) => {
    setTimeout(callback, randInt(1000), x * 3);
};
const sub2 = (callback, x) => {
    setTimeout(callback, randInt(1000), x - 2);
};
const split = (callback, x) => {
    setTimeout(callback, randInt(1000), x, x);
};
const add = (callback, x, y) => {
    setTimeout(callback, randInt(1000), x + y);
};
const div4 = (callback, x) => {
    setTimeout(callback, randInt(1000), x / 4);
};

const randInt = ( max ) => Math.floor(Math.random() * max);

const waterfall = ( ...functions ) => {
    return ( cb, ...args ) => {
        const func = functions.reduceRight(( composedFunction, currFunction ) => {
            return ( ...inrArgs ) => {
                currFunction(composedFunction, ...inrArgs);
            }
        }, cb);
        func(...args);
    }
}

const computation = waterfall(add5, mult3, sub2, split, add, div4);
computation(console.log, 5);

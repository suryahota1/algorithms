function addNums ( a, b, c ) {
    return a + b + c;
}

function curriedAddNums ( a ) {
    return ( b ) => {
        return ( c ) => {
            return a + b + c;
        }
    }
}

// console.log(addNums(1, 2, 5));
// console.log(curriedAddNums(1)(2)(5));

// Advanced currying
function addNums ( a, b, c, d, e ) {
    console.log("sum = ", a + b + c + d - e);
    return a + b + c + d - e;
}

console.log("len", addNums.length);

const curry = ( fn ) => {
    const args = [];
    function curriedFn ( arg ) {
        args.push(arg);
        if ( fn.length == args.length ) {
            return fn(...args);
        } else {
            return curriedFn;
        }
    }
    return curriedFn;
};

const curr2type = ( fn ) => {
    return curried = ( ...args ) => {
        if ( args.length === fn.length ) return fn(...args);
        return curried.bind(null, ...args);
    }
}

// console.log("1 = ", addNums(1, 2, 3, 4, 2));
const curr1 = curry(addNums);
// console.log("2 = ", curr1(1)(2)(3)(4)(2));

const curr2 = curr2type(addNums);
// console.log("3 = ", curr2(1)(2)(3)(4)(2));

// Partially applied function
function addApp ( ...args ) {
    if ( args.length < 5 ) return addApp.bind(null, ...args);
    console.log("sum here");
}

const resp1 = addApp(1, 2);
// console.log(resp1);
// console.log(resp1(3, 4, 5, 8));


// Infinnite currying
let sumRes = 0;
function sum ( a ) {
    if ( a != undefined ) {
        sumRes += a;
        return sum;
    }
    else return sumRes;
}

console.log("sum == ", sum(1)(2)());

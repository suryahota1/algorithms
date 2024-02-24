const obj = { first: 7};
const { first: {jk}, last: l} = obj;
// console.log(first);

const obj1 = { a: [{ foo: 123, bar: 'abc' }, {}], b: true };
const { a: [{ foo: f , bar: b}, k] } = obj1;
console.log(k);


// 23-02-2014
// {pattern} <- {value}
// While destructuring, the pattern gets matched against value and keeps assigning values to it

function isIterable ( input ) {
    if ( input !== null && typeof input === "object" && typeof input[Symbol.iterator] === "function" ) return true;
    return false;
}

function move ( { x=0, y=0 }={} ) {
    
}
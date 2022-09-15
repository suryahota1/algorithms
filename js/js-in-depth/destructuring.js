const obj = { first: 7};
const { first: {jk}, last: l} = obj;
// console.log(first);

const obj1 = { a: [{ foo: 123, bar: 'abc' }, {}], b: true };
const { a: [{ foo: f , bar: b}, k] } = obj1;
console.log(k);

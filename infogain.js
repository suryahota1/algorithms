// 26-022014

// const arr = { a: 3, b: { c: { d: 4 } } };
// structuredClone(arr);

// const b = arr.slice(0, arr.length);
// arr.pop();
// b.push(4);
// console.log(arr);
// console.log(b);

const arr2 = [1, 1, 1, 1, 3, 2, 2, 2, 3, 4, 5];
const arr3 = [];

const map = new Map();
for (const a of arr2) {
  let count = map.get(a) ?? 0;
  count++;
  map.set(a, count);
  if (count == 2) {
    arr3.push(a);
  }
}
console.log(arr3);

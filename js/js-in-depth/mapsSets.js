const k1 = {
    [Symbol.toStringTag]: "hi"
};
const k2 = {};

const map1 = new Map();
map1.set(k1, 1).set(k2, 2);
// console.log(map1.get(k2));

const obj1 = {
    
};
obj1[k1] = 4;
obj1[k2] = 5;
// console.log(obj1);

// for ( const [key, value] of map1 ) {
//     console.log(value);
// }

const arr = [...map1];
// console.log(arr);

// Mapping and Filtering Maps
const map2 = new Map();
map2.set("hi", 2).set("hello", 5);
const mappedMap2 = new Map([...map2].map(([key, value]) => [key + "huuuuuuuuu", value * 2]));
// console.log(mappedMap2);

const set = new Set(['a', 'b', 'c']);

console.log(set.entries());

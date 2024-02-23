// count no of person in same age group
const users = [
    {name: 'John',age: 29},
    {name: 'Alex',age: 26},
    {name: 'Harry',age: 25},
    {name: 'Tim',age: 25},
    {name: 'Jerry',age: 29},
    {name: 'Tom',age: 29}
]

// // o/p - {25: 2, 26: 1, 29: 3}

function groupByAges () {
    const map = new Map();
    for ( const { age } of users ) {
        map.set(age, (map.get(age) ?? 0) + 1);
    }
    return map;
}

// console.log(groupByAges());

function reverseStr ( str ) {
    const arr = str.split("");
    const mid = Math.ceil(arr.length / 2);
    for ( let i = 0; i < mid; i++ ) {
        [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
    }
    return arr.join("");
}

console.log(reverseStr("helloworld"));

Math.l

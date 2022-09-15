// reduce polyfill

Array.prototype.myReduce = function ( fn, initVal ) {
    let data = initVal;
    console.log("myReduce", this.constructor.name);
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

console.log(nestedArray.myFlat());

a = () => {};
const b = function* () {};
const c = class {};

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

const arr = [1];
// arr.forEach(function () {
//     console.log(this);
// });

const f1 = function (cb=() => {}) {
    // console.log("cbname", cb.name);
    return function () {

    }
}

const f2 = f1();
// console.log(f1.name);
// console.log("nm", f2.name);

function f3 () {console.log("hi")};
const f4 = {};
const f5 = {};

const obj = {
    [f3]: 3,
    [f4]: 4,
    [f5]: 5
};
// console.log("obj = ", obj);

const arrow1 = () => {
    console.log("wrewre", this);
};
const arrow2 = arrow1.bind(obj);
arrow1();

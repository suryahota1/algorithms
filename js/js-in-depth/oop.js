// Note that the bracket operator coerces its interior to string. For example:

// > var obj = { '6': 'bar' };
// > obj[3+3]  // key: the string '6'
// 'bar'

// Check whether given value is an object
function checkIfObject ( value ) {
    return Object(value) === value;
}

// Call a constructor function with new operator and with apply
// We can not constructor function with new operator and apply.
// There is a work around

new Date(1997, 11, 23);
new (Function.prototype.bind.apply(Date, [null, 1997, 11, 23]))

// Copying an object
/**
 * Copying involves two steps. The copy should have the same prototype as that of original.
 * Second is it should have all own properties described same as that of original
*/

function copyObj ( original ) {
    const copyObj = Object.create(Object.getPrototypeOf(original));
    const ownNames = Object.getOwnPropertyNames();
    const ownSymbols = Object.getOwnPropertySymbols();

    for ( let i = 0; i < ownNames.length; i++ ) {
        const propDesc = Object.getOwnPropertyDescriptor(ownNames[i]);
        Object.defineProperty(copyObj, ownNames[i], propDesc);
    }

    for ( let i = 0; i < ownSymbols.length; i++ ) {
        const propDesc = Object.getOwnPropertyDescriptor(ownSymbols[i]);
        Object.defineProperty(copyObj, ownSymbols[i], propDesc);
    }
}
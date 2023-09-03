// Check if a variable is an object
function checkIfObject ( x ) {
    return typeof x === "function" || ( typeof x === "object" && x !== null );
}

// instanceof
const obj = Object.create(null);
typeof obj === "object" // true
obj instanceof Object // false

// check if primitive
function checkIfPrimitive ( x ) {
    const typeVal = typeof x;
    switch ( typeVal ) {
        case "string":
        case "boolean":
        case "number":
        case "undefined":
        case "symbol": return true;
        case "object": return x !== null;
        default: return false;
    }
}

// check if array
function isArray ( x ) {
    return typeof x === "object" && x !== null && Object.getPrototypeOf(x).constructor.name === "Array";
}

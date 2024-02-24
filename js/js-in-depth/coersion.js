/**
 * 
 * @param {*} input 
 * @param {string} hint 
 * 
 * hint = "string" | "number" | "default"
 */


function toPrimitive ( input, hint ) {
    if ( typeof input !== "object" ) return input;
    const exoticToPrimitive = input[Symbol.toPrimitive];
    if ( exoticToPrimitive && typeof exoticToPrimitive !== "function" ) {
        const result = exoticToPrimitive(input, hint);
        if ( typeof result === "object" ) throw new TypeError();
        return result;
    } else {
        if ( hint === "default" ) hint = "number";
        let methods;
        if ( hint === "string" ) methods = ["toString", "valueOf"];
        else methods = ["valueOf", "toString"];
        for ( const method of methods ) {
            if ( !input[method] || !typeof input[method] === "function" ) continue;
            const result = input[method]();
            if ( typeof result !== "object" ) return result;
        }
        throw new TypeError();
    }
}

function toPropertyKey ( key ) {
    if ( typeof key === "symbol" ) return key;
    const primitive = toPrimitive(key);
    return String(primitive);
}

function toNumeric ( input ) {
    // Handles both number and bigint
    const primVal = toPrimitive(input, "number");
    if ( typeof primVal === "bigint" ) return primVal;
    return Number(input);
}

function toNumber ( input ) {
    if ( typeof input === "undefined" ) return NaN;
    if ( input === null ) return +0;
    if ( input === true ) return 1;
    if ( input === false ) return 0;
    if ( typeof input === "symbol" ) return new TypeError();
    if ( typeof input === "bigint" ) return new TypeError();
    if ( typeof input === "number" ) return input;
    if ( typeof input === "string" ) return Number(input);
    return toNumber(toPrimitive(input, "number"));
}

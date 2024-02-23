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
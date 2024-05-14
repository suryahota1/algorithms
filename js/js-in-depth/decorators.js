// Wrapper function
// Logger

function loggerFn ( fn ) {
    return function ( ...args ) {
        try {
            const output = fn.call(this, ...args);
            console.log("output", output);
            return output;
        } catch ( e ) {
            console.error("Error occured", e);
            throw e;
        }
    }
}

function plus1 ( num ) {
    return num + 1;
}

const plus1Logger = loggerFn(plus1);
plus1Logger(4);
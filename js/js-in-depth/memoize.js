function memoize ( func ) {
    const cache = {};
    const context = this;
    const prevArgs = [];
    console.log("prevArgs", prevArgs);
    return function ( ...args ) {
        const cacheKey = "key";
        if ( cache.hasOwnProperty(cacheKey) ) return cache[cacheKey];
        const val = func.call(context, ...args);
        cache[cacheKey] = val;
        return val;
    }
}

function sum ( a, b ) {
    return a + b;
}

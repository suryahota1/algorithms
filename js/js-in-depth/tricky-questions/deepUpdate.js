function deepUpdate ( original, keys, value ) {
    if ( keys.length === 0 ) return value;
    if ( Array.isArray(original) ) {
        for ( let i = 0; i < original.length; i++ ) {
            if ( i === keys[0] ) {
                return [
                    ...original.slice(0, Math.max(0, i)), 
                    deepUpdate(original[i], keys.slice(1), value), 
                    ...original.slice(i + 1)
                ];
            }
        }
        return original;
    } else if ( typeof original === "object" && original !== null ) {
        const myKeys = Object.keys(original);
        for ( let i = 0; i < myKeys.length; i++ ) {
            if ( myKeys[i] === keys[0] ) return { ...original, [myKeys[i]]: deepUpdate(original[myKeys[i]], keys.slice(1), value) };
        }
        return original;
    } else return original;
}

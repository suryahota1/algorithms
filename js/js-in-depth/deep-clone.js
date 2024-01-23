// Check if two values are deep equal

// Deep equal considering they are structurally same if objects. Prototype is not checked
function checkIfDeepEqual ( val1, val2 ) {
    if ( Object.is(val1, val2) ) return true;
    if ( Array.isArray(val1) && Array.isArray(val2) ) {
        if ( val1.length !== val2.length ) return false;
        for ( let i = 0; i < val1.length && i < val2.length; i++ ) {
            if ( !checkIfDeepEqual(val1[i], val2[i]) ) return false;
        }
        return true;
    }
    if ( typeof val1 === "object" && typeof val2 === "object" ) {
        const keys1 = Reflect.ownKeys(val1);
        const keys2 = Reflect.ownKeys(val2);
        if ( keys1.length !== keys2.length ) return false;
        for ( let i = 0; i < keys1.length; i++ ) {
            if( !checkIfDeepEqual(val1[keys1[i]], val2[keys2[i]]) ) return false;
        }
        return true;
    }
    return false;
}

const val1 = {
    a: 1,
    b: {
        r: 78,
        o: 90
    }
};
const val2 = {
    a: 1,
    b: {
        r: 23,
        o: 90
    }
};

console.log(checkIfDeepEqual(val1, val2));

// Implement a function to highlight text if a searched term appears within it.
function checkIfTextAppears ( inputText, searchText ) {
    let ptr1 = 0, ptr2 = 0;
    while ( ptr2 < searchText.length && ptr1 < inputText.length ) {
        if ( searchText[ptr2] === inputText[ptr1] ) {
            ptr1++;
            ptr2++;
        } else ptr1++;
    }
    if ( ptr2 < searchText.length ) return false;
    return true;
}
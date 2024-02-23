// Brute force
// Iterate through all bits and check if set and increment counter

function countNumOfSetBitsIterative ( n ) {
    let c = 0;
    while ( n > 0 ) {
        // Check if LSB is set
        c += (n & 1);
        // Shift to right by 1 bit
        n >>= 1;
    }
    return c;
}

// Recursive brute force
function countNumOfSetBitsRecursive ( n ) {
    if ( n === 0 ) return 0;
    return (n & 1) + countNumOfSetBitsRecursive(n >> 1);
}

// Brian Kernighan's algorithm
// n & (n - 1) resets the right most set bit. Keep doing and counting until the number is 0

function brianAlgoCountSetBits ( n ) {
    let c = 0;
    while ( n > 0 ) {
        c++;
        n = n & (n - 1);
    }
    return c;
}

// If a number is an exact power of 2, then it has only 1 bit set.
// And hence n & (n - 1) should be 0. This is not true when n === 0.
// Hence check for both

function checkIfNumIsPowerOf2 ( n ) {
    return n !== 0 && (n & (n - 1) === 0);
}
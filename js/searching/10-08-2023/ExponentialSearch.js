/*
    1. Exponential search is an improvement over 
 */
function binarySearch ( arr, key, lo, hi ) {
    if ( lo > hi ) return -1;
    const mid = lo + Math.floor((hi - lo) / 2);
    if ( arr[mid] === key ) return mid;
    if ( arr[mid] < key ) return binarySearch(arr, key, mid + 1, hi);
    return binarySearch(arr, key, lo, mid - 1);
}
function exponentialSearch ( arr=[], key ) {
    const n = arr.length;
    if ( n === 0 ) return -1;
    if ( arr[0] === key ) return 0;

    let idx = 1;
    while ( idx < n && arr[idx] < key ) idx *= 2;
    console.log("idx", idx);
    return binarySearch(arr, key, Math.floor(idx / 2), Math.min(idx, n - 1));
}

const ip = [9, 19, 31, 54, 98, 197, 435];
console.log(exponentialSearch(ip, 435));

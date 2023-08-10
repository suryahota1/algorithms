/*
    1. Interpolation search is an improvement over binary search.
    2. It works best on a sorted set where the elements are uniformly distributed.
    3. Binary search always moves to the mid of the list to check for the availability.
    4. Interpolation search uses linear equation formula y = m*x + c. As the x or index of the 
        list increases, the corresponding value at the index increases linearly.

    Linear equation formula:
        y = m*x + c 
    Similarly for higher index:
        arr[hi] = m * hi + c ----------(1)
    For lower index:
        arr[lo] = m * lo + c ----------(2)
    For key at index x:
        key = m * x + c ----------(3)
    
    eqn(1) - eqn(2):
        arr[hi] - arr[lo] = m * (hi - lo)
        => m = (arr[hi] - arr[lo]) / (hi - lo) ----------(4)
    
    eqn(3) - eqn(2): 
        key - arr[lo] = m * (x - lo)
        => x = lo + (key - arr[lo]) / m
        => x = lo + (key - arr[lo]) * (hi - lo) / (arr[hi] - arr[lo])

    Hence the formula for next probable index is,

        |--------------------------------------------------------------|
        |index = lo + (key - arr[lo]) * (hi - lo) / (arr[hi] - arr[lo])|
        |--------------------------------------------------------------|
 */


function interpolationSearch ( arr, key, lo, hi ) {
    if ( lo > hi ) return -1;
    const idx =  lo + Math.floor((key - arr[lo]) * (hi - lo) / (arr[hi] - arr[lo]));
    if ( arr[idx] === key ) return idx;
    if ( arr[idx] < key ) return interpolationSearch(arr, key, idx + 1, hi);
    return interpolationSearch(arr, key, lo, idx - 1);
}

const ip = [9, 19, 31, 54, 98, 197, 435];
console.log(interpolationSearch(ip, 19, 0, ip.length - 1));

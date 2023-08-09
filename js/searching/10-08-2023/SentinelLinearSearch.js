function sentinelLinearSearch ( arr=[], key ) {
    if ( arr.length === 0 ) return -1;
    const n = arr.length;
    if ( arr[n - 1] === key ) return n - 1;
    const last = arr[n - 1];
    arr[n - 1] = key;
    let idx = 0;
    while ( arr[idx] !== key ) idx++;
    arr[n - 1] = last;
    if ( idx < n - 1 ) return idx;
    return -1;
}

const ip = [9, 67, 31, 54, 98, 19, 45];
console.log(sentinelLinearSearch(ip, 19));

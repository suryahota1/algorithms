function jumpSearch ( list=[], key ) {
    const n = list.length;
    const blockSize = Math.floor(Math.sqrt(n));
    // Find the block
    let i = 0;
    while ( i < n && list[i] < key ) i += blockSize;
    if ( i >= n ) return -1;
    let startIdx = Math.max(0, i - blockSize);
    for ( let k = 0; k <= i; k++ ) if ( list[k] === key ) return k;
    return -1;
}

const ip = [9, 19, 31, 54, 98, 197, 435];
console.log(jumpSearch(ip, 98));

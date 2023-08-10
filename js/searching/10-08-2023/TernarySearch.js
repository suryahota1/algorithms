function ternarySearch ( list=[], key, start, end ) {
    if ( start > end ) return -1;
    const middle1 = start + Math.floor((end - start) / 3);
    const middle2 = end - Math.floor((end - start) / 3);

    if ( list[middle1] === key ) return middle1;
    if ( list[middle2] === key ) return middle2;
    if ( list[middle1] > key ) return ternarySearch(list, key, start, middle1 - 1);
    if ( list[middle2] < key ) return ternarySearch(list, key, middle2 + 1, end);
    return ternarySearch(list, key, middle1 + 1, middle2 - 1);
}

const ip = [9, 19, 31, 54, 98, 197, 435];
console.log(ternarySearch(ip, 437, 0, ip.length - 1));

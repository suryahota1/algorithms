function recSearch ( list, key, start, end ) {
    if ( start > end ) return -1;
    const mid = start + Math.floor((end - start) / 2);
    if ( list[mid] === key ) return mid;
    if ( list[mid] < key ) return recSearch(list, key, mid + 1, end);
    return recSearch(list, key, start, mid - 1);
}
function recursiveBinarySearch ( list=[], key ) {
    return recSearch(list, key, 0, list.length - 1);
}
const ip = [9, 19, 31, 54, 98, 197, 435];
console.log(recursiveBinarySearch(ip, 54));

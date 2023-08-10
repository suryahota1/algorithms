function iterativeBinarySerach ( list=[], key ) {
    let l = 0, r = list.length - 1;
    while ( r >= l ) {
        const mid = l + Math.floor((r - l) / 2);
        if ( list[mid] === key ) return mid;
        if ( list[mid] < key ) l = mid + 1;
        else r = mid - 1;
    }
    return -1;
}

const ip = [9, 19, 31, 54, 98, 197, 435];
console.log(iterativeBinarySerach(ip, 436));

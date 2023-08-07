function insertionSort ( list=[] ) {
    const n = list.length;
    for ( let i = 1; i < n; i++ ) {
        let idx = i;
        const val = list[i];
        while ( idx > 0 && ( val < list[idx - 1] ) ) {
            list[idx] = list[idx-- - 1];
        }
        list[idx] = val;
    }
}

const ip = [12, 11, 13, 5, 6];
insertionSort(ip);
console.log(ip);

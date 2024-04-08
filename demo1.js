// Input : A[] = {1, 5, 3, 8} m
//         B[] = {5, 4, 6, 7, 3} n 
// Output : 29

// Input : A[] = {1, 5, 3, 8}
//         B[] = {5, 1, 8, 3}

function getSum ( a, b ) {
    let sum = 0;
    const map = new Map();
    for ( let i = 0; i < a.length; i++ ) {
        map.set(a[i], 1);
    }
    for ( let i = 0; i < b.length; i++ ) {
        const val = map.get(b[i]) ?? 0;
        map.set(b[i], val + 1);
    }
    for ( const [ key, val ] of map ) {
        if ( val === 1 ) sum += key;
    }
    return sum;
}

console.log(getSum([1, 5, 3, 8], [5, 4, 6, 7, 3]));

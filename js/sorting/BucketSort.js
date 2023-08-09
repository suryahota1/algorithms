/* 
    1. Works on floating point numbers in the range 0.0 to 1.0
    2. Put the elements into a bucket.
    3. Sort each bucket individually with any stable sort algorithm.
    4. Put the sorted items back into the list.
*/
function bucketSort ( list=[] ) {
    const n = list.length;
    if ( n <= 1 ) return;
    const bucket = new Array(n);
    for ( let i = 0; i < n; i++ ) bucket[i] = [];
    // Insert into bucket
    for ( let i = 0; i < n; i++ ) {
        const idx = Math.floor(n * list[i]);
        bucket[idx].push(list[i]);
    }
    // Sort each bucket
    for ( let i = 0; i < bucket.length; i++ ) {
        bucket[i] = bucket[i].sort((a, b) => a - b);
    }
    
    let idx = 0;
    for ( let i = 0; i < bucket.length; i++ ) {
        for ( let j = 0; j < bucket[i].length; j++ ) {
            list[idx++] = bucket[i][j];
        }
    }
}

const ip = [0.12, 0.18, 0.61, 0.44, 0.551, 0.99, 0.989];
const op = bucketSort(ip);
console.log(ip);

// Using sorting
function countNumOfPossibleTriangles ( arr=[] ) {
    arr.sort((a, b) => a - b);
    let count = 0;
    for ( let i = 0; i < arr.length - 2; i++ ) {
        for ( let j = i + 1; j < arr.length - 1; j++ ) {
            let k = j + 1;
            while ( k < arr.length && arr[i] + arr[j] > arr[k] ) {
                count++;
                k++;
            }
        }
    }
    return count;
}

console.log(countNumOfPossibleTriangles([ 10, 21, 22, 100, 101, 200, 300 ]));

/**
 * Using two pointer technique
 * The intuition is, fix the highest number(a), Then check lowest(b) and second highest(c) number.
 * If b + c > a, then all numbers between b and c will satisfy the same condition
 * count += c - b
*/

function countNumOfPossibleTriangles2 ( arr=[] ) {
    arr.sort((a, b) => a - b);
    let count = 0;
    for ( let i = arr.length - 1; i >= 2; i-- ) {
        let l = 0, r = i - 1;
        while ( l < r ) {
            if ( arr[l] + arr[r] > arr[i] ) {
                count += (r - l);
                r--;
            } else l++;
        }
    }
    return count;
}

console.log(countNumOfPossibleTriangles2([ 10, 21, 22, 100, 101, 200, 300 ]));

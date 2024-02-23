// There can be multiple approaches
// We will talk here on left rotation. Right rotation is opposite to this

// 1. Rotate 1 by 1
// Time complexity: O(d * N) or O(N^2)
// Space complexity: O(1)
function rotateArray1 ( arr, d ) {
    if ( d > arr.length ) d = d - arr.length;
    for ( let i = 0; i < d; i++ ) {
        arr.push(arr.shift());
    }
}

/**
 * 2. Using temporary array
    -> Intuition is, rotating left d elements, those elements will appear in the same order 
        at the end.
    -> Time complexity: O(n)
    -> Space complexity: O(n)
*/
function rotateArray2 ( arr, d ) {
    if ( d > arr.length ) d = d - arr.length;
    const temp = new Array(arr.length);
    for ( let i = 0; i < d; i++ ) {
        temp[arr.length - d + i] = arr[i];
    }
    let k = 0;
    for ( let i = d; i < arr.length; i++ ) {
        temp[k++] = arr[i];
    }

    for ( let i = 0; i < arr.length; i++ ) {
        arr[i] = temp[i];
    }
}

/**
    -> Reversal algorithm
        -> Reverse the whole array of size n
        -> Reverse the first d elements 
        -> Reverse last n - d elements
    -> Time complexity: O(n)
    -> Space complexity: O(1)
*/

function reverse ( arr, i, j ) {
    while ( i <j ) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}

function rotateArray3 ( arr, d, indicator ) {
    // indicator = "left" | "right"
    d = d % arr.length;
    // Reverse the whole array
    const n = arr.length;
    reverse(arr, 0, n - 1);
    console.log(arr);
    if ( indicator === "left" ) d1 = n - d;
    else d1 = d;
    console.log("d1", d1);
    reverse(0, d1 - 1);
    reverse(d1, n - 1);
}

const arr = [1, 2, 3, 4, 5, 6, 7];
rotateArray3(arr, 2, "left");
console.log(arr);

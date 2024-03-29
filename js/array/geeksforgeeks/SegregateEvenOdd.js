function swapVal ( arr, i, j ) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// My approach - 1
function approach1 ( arr=[] ) {
    let oddIdx = [];
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] % 2 === 0 ) {
            console.log(oddIdx);
            if ( oddIdx.length > 0 ) {
                swapVal(arr, i, oddIdx.shift());
                oddIdx.push(i);
            }
        } else oddIdx.push(i);
    }
}

/**
 * Two pointer technique
 * Time complexity: O(n)
 * Space complexity: O(1)
*/

function isEven ( n ) {
    return n % 2 === 0;
}

function approach2 ( arr=[] ) {
    if ( arr.length <= 1 ) return;
    let oddPtr = 0, evenPtr = arr.length - 1;
    do {
        if ( isEven(arr[oddPtr]) ) oddPtr++;
        if ( !isEven(arr[evenPtr]) ) evenPtr--;
        if ( !isEven(arr[oddPtr]) && isEven(arr[evenPtr]) ) {
            swapVal(arr, oddPtr, evenPtr);
            oddPtr++;
            evenPtr--;
        }
    } while ( oddPtr < evenPtr )
}

/**
 * Lomuto's partition logic, quick sort partition logic
*/

function approach3 ( arr=[] ) {
    if ( arr.length <= 1 ) return;
    let swapIdx = -1;
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] % 2 === 0 ) swapVal(arr, ++swapIdx, i);
    }
}

const ip = [99, 19, 31, 54, 98, 197, 436];
approach3(ip);
console.log(ip);
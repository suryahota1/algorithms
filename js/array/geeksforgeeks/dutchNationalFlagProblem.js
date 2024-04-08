// Sort an array of 0s, 1s and 2s such that all 0s come first, then 1s come second
// and then 2s come third

// Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
// Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}

function swapNum ( arr, i, j ) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function sortNums ( arr ) {
    let low = -1, mid = 0, high = arr.length;
    while ( mid < high ) {
        if ( arr[mid] === 1 ) mid++;
        else if ( arr[mid] === 0 ) {
            swapNum(arr, ++low, mid++);
        } else {
            swapNum(arr, mid, --high);
        }
    }
    console.log("response", arr);
}

sortNums([1, 2, 1, 0, 1, 2, 1, 2, 0, 2, 0, 1]);

/**
 * Time complexity: O(n)
 * Space Complexity: O(1)
*/
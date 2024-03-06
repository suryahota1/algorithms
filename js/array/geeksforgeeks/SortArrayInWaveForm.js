function swap ( arr, i, j ) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

// Time complexity: O(nlogn) + O(n)
// Space complexity: O(1)
function sortArrayInWaveForm1 ( arr=[] ) {
    arr.sort((a, b) => a - b);
    for ( let i = 0; i < arr.length - 1; i += 2 ) {
        swap(arr, i, i + 1);
    }
    return arr;
}

console.log(sortArrayInWaveForm1([ 10, 90, 49, 2, 1, 5, 23 ]));

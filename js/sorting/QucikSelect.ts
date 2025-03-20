// Kth smallest/largest element

/**
 * The avarage case TC for this algorithm is O(n). This algorithm only recurs for one half. 
 * O(n) + O(n / 2) + O(n / 4) + O(n / 8) +....
 * = O(n) * (1 + (1 / 2) + (1 / 4) + (1 / 8) + .....)
 * = O(n) as the series converges to 1
 */

function partition ( arr: Array<number>, left: number, right: number ) {
    let smallestIdx = left - 1, pivotNum = arr[right];
    for ( let i = left; i <= right; i++ ) {
        if ( arr[i] < pivotNum ) {
            const temp = arr[++smallestIdx];
            arr[smallestIdx] = arr[i];
            arr[i] = temp;
        }
    }
    const temp = arr[++smallestIdx];
    arr[smallestIdx] = arr[right];
    arr[right] = temp;

    return smallestIdx;
}

function kthSmallest ( arr: Array<number>, k: number ) {
    if ( k > arr.length ) throw new Error("Invalid input");
    let left = 0, right = arr.length - 1;
    let partitionIdx;

    while ( true ) {
        partitionIdx = partition(arr, left, right);
        if ( partitionIdx === k - 1 ) {
            return arr[partitionIdx];
        } else if ( partitionIdx < k - 1 ) {
            left = partitionIdx + 1;
        } else {
            right = partitionIdx - 1;
        }
    }
}

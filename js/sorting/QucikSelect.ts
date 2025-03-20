// Kth smallest/largest element

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

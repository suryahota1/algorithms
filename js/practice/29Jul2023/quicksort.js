function swap ( arr, i, j ) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function partition ( arr, low, high ) {
    const pivot = arr[high];
    let prevIdx = low - 1;
    for ( let i = low; i <= high - 1; i++ ) {
        if ( arr[i] < pivot ) {
            prevIdx++;
            (arr[i], arr[prevIdx]) = (arr[prevIdx], arr[i]);
            swap(arr, prevIdx, i);
        }
    }
    (arr[high], arr[prevIdx + 1]) = (arr[prevIdx + 1], arr[high]);
    return prevIdx + 1;
}

function quickSort ( arr, low, high ) {
    if ( low < high ) {
        const pIdx = partition(arr, low, high);
        quickSort(arr, low, pIdx - 1);
        quickSort(arr, pIdx + 1, high);
    }
}

const ip1 = [10, 80, 30, 90, 40, 50, 70];
quickSort(ip1, 0, ip1.length - 1);
console.log(ip1);
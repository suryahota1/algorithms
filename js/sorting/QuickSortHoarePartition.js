function swapVal ( arr, i, j ) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function hoarePartition ( arr, start, end ) {
    const pivot = arr[end];
    let i = start, j = end - 1;
    while ( i < j ) {
        if ( arr[i] <= pivot ) i++;
        if ( arr[j] >= pivot ) j--;
        if ( i < j && arr[i] > pivot && arr[j] < pivot ) {
            swapVal(arr, i++, j--);
        }
    }
    if ( arr[i] > pivot ) swapVal(arr, i, end);
    else swapVal(arr, ++i, end);
    return i;
}
function quickSort ( arr=[], start, end ) {
    if ( start >= end ) return;
    const partitionIdx = hoarePartition(arr, start, end);
    quickSort(arr, start, partitionIdx - 1);
    quickSort(arr, partitionIdx + 1, end);
}

const ip = [13, 8, 8, 9, 199, 11, 54, 8, 12, 2, 13];
quickSort(ip, 0, ip.length - 1);
console.log(ip);
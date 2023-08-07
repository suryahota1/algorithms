function merge ( list, start, middle, end ) {
    const arrSize = end - start + 1;
    const arr = new Array(arrSize);
    let start1 = start;
    let start2 = middle + 1;
    let i = 0;
    while ( start1 <= middle && start2 <= end ) {
        if ( list[start1] <= list[start2] ) {
            arr[i++] = list[start1++];
        } else {
            arr[i++] = list[start2++];
        }
    }

    while ( start1 <= middle ) arr[i++] = list[start1++];
    while ( start2 <= end )  arr[i++] = list[start2++];

    i = 0;
    for ( let k = start; k <= end; k++ ) {
        list[k] = arr[i++];
    }
}
function mergeSort ( list, start, end ) {
    if ( start >= end ) return;
    const middle = Math.floor((start + end) / 2);
    mergeSort(list, start, middle);
    mergeSort(list, middle + 1, end);
    merge(list, start, middle, end);
}

const ip = [114, 19, 50, 17, 1, 5, 90, 45];
mergeSort(ip, 0, ip.length - 1);
console.log(ip);

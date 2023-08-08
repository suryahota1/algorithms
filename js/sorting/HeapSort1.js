function swapVal ( list, i, j ) {
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}

function heapify ( list, size, index ) {
    let largest = index;
    const leftIdx = 2 * index + 1;
    const rightIdx = 2 * index + 2;
    if ( leftIdx < size && list[leftIdx] > list[largest] ) largest = leftIdx;
    if ( rightIdx < size && list[rightIdx] > list[largest] ) largest = rightIdx;
    if ( largest !== index ) {
        swapVal(list, index, largest);
        heapify(list, size, largest);
    }
}
function buildHeap ( list ) {
    const startIdx = Math.floor(list.length / 2) - 1;
    for ( let i = startIdx; i >= 0; i-- ) {
        heapify(list, list.length, i);
    }
}

function sort ( list ) {
    for ( let i = list.length - 1; i >= 0; i-- ) {
        swapVal(list, 0, i);
        heapify(list, i, 0);
    }
}

function heapSort ( list=[] ) {
    if ( list.length <= 1 ) return;
    buildHeap(list);
    sort(list);
}

const ip = [112, 1, 136, 54, 86];
heapSort(ip);
console.log(ip);

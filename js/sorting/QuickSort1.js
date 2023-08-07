function quickSort ( list, start, end ) {
    if ( start >= end ) return;
    const pos = placePivot(list, start, end);
    
    quickSort(list, start, pos - 1);
    quickSort(list, pos + 1, end);
}

function placePivot ( list, start, end ) {
    const pivot = list[end];
    let pos = start - 1;
    let i = start;
    while ( i < end ) {
        if ( list[i] < pivot ) {
            swapVal(list, i, ++pos);
        }
        i++;
    }
    swapVal(list, end, ++pos);
    return pos;
}

function swapVal ( list, i, j ) {
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}

const ip = [44, 19, 15, 77, 101, 36, 18];
quickSort(ip, 0, ip.length - 1);

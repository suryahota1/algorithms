function swapVal ( arr, i, j ) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function sortArray ( arr=[] ) {
    if ( arr.length <= 1 ) return;
    let i = 0;
    while ( i < arr.length ) {
        const correctIdx = arr[i] - 1;
        if ( i !== correctIdx ) swapVal(arr, i, correctIdx);
        else i++;
    }
}

const ip = [1, 4, 6, 2, 3, 5];
sortArray(ip);
console.log(ip);
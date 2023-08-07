function swapVal ( list, i, j ) {
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}

function bubbleSort ( list=[] ) {
    const n = list.length;
    for ( let i = 0; i < n - 1; i++ ) {
        let swapped = false;
        for ( let j = 1; j < n - i; j++ ) {
            if ( list[j] < list[j - 1] ) {
                swapVal(list, j, j - 1);
                swapped = true;
            }
        }
        if ( !swapped ) break;
    }
}

const ip = [25, 9, 1, 5, 7, 18, 25];
bubbleSort(ip);
console.log(ip);

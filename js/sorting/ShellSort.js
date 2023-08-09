function swapVal ( list, i, j ) {
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}

function shellSort ( list=[] ) {
    const n = list.length;
    if ( n <= 1 ) return;
    for ( let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2) ) {
        for ( let j = gap; j < n; j++ ) {
            for ( let i = j - gap; i >= 0; i -= gap ) {
                if ( list[i + gap] > list[i] ) break;
                else swapVal(list, i, i + gap);
            }
        }
    }
}

const ip = [12, 18, 61, 44, 51, 55, 52, 61, 53, 52, 99, 18];
const op = shellSort(ip);
console.log(ip);

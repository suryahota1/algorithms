function swapVal ( list, i, j ) {
    const temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}
function bingoSort ( list=[] ) {
    const n = list.length;
    if ( n <= 1 ) return;
    let bingoElement = list[0];
    let largestElement = list[0];
    // Find the bingo element
    for ( let i = 1; i < n; i++ ) {
        bingoElement = Math.min(list[i], bingoElement);
        largestElement = Math.max(list[i], largestElement);
    }
    let nextBingoElement;
    let swapIdx = 0;
    while ( bingoElement < largestElement ) {
        nextBingoElement = null;
        for ( let i = swapIdx; i < n; i++ ) {
            if ( list[i] === bingoElement ) {
                swapVal(list, i, swapIdx);
                swapIdx++;
            }
            if ( ( !nextBingoElement && list[i] > bingoElement ) || list[i] < nextBingoElement ) nextBingoElement = list[i];
        }
        bingoElement = nextBingoElement;
    }
}

const ip = [112, 118, 61, 44, 551, 551, 552, 61, 553, 552, 99, 18];
const op = bingoSort(ip);
console.log(ip);

function getMaxNum ( list ) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    for ( let i = 0; i < list.length; i++ ) maxNum = Math.max(list[i], maxNum);
    return maxNum;
}

function countSort ( list, exp ) {
    const countArr = new Array(10).fill(0);
    for ( let i = 0; i < list.length; i++ ) {
        const digit = Math.floor(list[i] / exp) % 10;
        countArr[digit]++;
    }
    for ( let i = 1; i < countArr.length; i++ ) {
        countArr[i] += countArr[i - 1];
    }
    const outputArr = new Array(list.length);
    for ( let i = list.length - 1; i >= 0; i-- ) {
        const digit = Math.floor(list[i] / exp) % 10;
        outputArr[--countArr[digit]] = list[i];
    }
    for ( let i = 0; i < list.length; i++ ) list[i] = outputArr[i];
}

function radixSort ( list=[] ) {
    if ( list.length <= 1 ) return list;
    let maxNum = getMaxNum(list);
    let exp = 1;
    while ( maxNum > 0 ) {
        countSort(list, exp);
        exp *= 10;
        maxNum = Math.floor(maxNum / 10);
    }
}

const ip = [12, 18, 61, 44, 551, 99];
const op = radixSort(ip);
console.log(ip);

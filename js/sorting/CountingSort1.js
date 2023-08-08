function countingSort ( list=[] ) {
    if ( list.length <= 1 ) return list;
    let maxNum = Number.MIN_SAFE_INTEGER;
    for ( let i = 0; i < list.length; i++ ) maxNum = Math.max(list[i], maxNum);
    const countArr = new Array(maxNum + 1).fill(0);
    const outputArr = new Array(list.length);
    for ( let i = 0; i < list.length; i++ ) {
        countArr[list[i]]++;
    }
    for ( let i = 1; i < countArr.length; i++ ) {
        countArr[i] += countArr[i - 1];
    }
    for ( let i = list.length - 1; i >= 0; i-- ) {
        const idx = --countArr[list[i]];
        outputArr[idx] = list[i];
    }
    return outputArr;
}

const ip = [112, 18, 126, 40, 41, 86];
const op = countingSort(ip);
console.log(op);
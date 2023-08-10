function swapVal ( arr, i, j ) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// My approach
function approach1 ( arr=[] ) {
    let oddIdx = [];
    for ( let i = 0; i < arr.length; i++ ) {
        if ( arr[i] % 2 === 0 ) {
            console.log(oddIdx);
            if ( oddIdx.length > 0 ) {
                swapVal(arr, i, oddIdx.shift());
                oddIdx.push(i);
            }
        } else oddIdx.push(i);
    }
}

const ip = [9, 19, 31, 54, 98, 197, 435];
approach1(ip)
console.log(ip);
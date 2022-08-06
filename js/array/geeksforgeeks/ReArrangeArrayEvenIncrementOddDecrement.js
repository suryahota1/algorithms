class ReArrangeArrayEvenIncrementOddDecrement {

    reArrange ( arr ) {
        let tempArr = [];
        let n = arr.length;
        for ( let i = 0; i < n; i++ ) {
            tempArr.push(arr[i]);
        }
        Array.prototype.sort.call(tempArr);
        let evenPosns = Math.floor(n / 2);
        let oddPosns = n - evenPosns;
        console.log(tempArr);
        for ( let i = 1, j = n - evenPosns; i < n; i += 2, j++ ) {
            arr[i] = tempArr[j];
        }
        for ( let i = 0, j = n - evenPosns - 1; i < n; i += 2, j-- ) {
            arr[i] = tempArr[j];
        }
        console.log(arr);
    }
}

const aa = new ReArrangeArrayEvenIncrementOddDecrement();
aa.reArrange([1, 2, 3, 4, 5, 6, 7]);

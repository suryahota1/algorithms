class ReArrangePositiveAndNegativeNumbersAlternate {

    itrSwap ( arr, val, sI, eI ) {
        for ( let i = sI; i <= eI; i++ ) {
            const val2 = arr[i];
            arr[i] = val;
            val = val2;
        }
    }

    reArrange ( arr ) {
        let ptrIdx = -1;
        let expType = arr[0] < 0 ? true : false;
        for ( let i = 1; i < arr.length; i++ ) {

            console.log("reArrange arr[i]", arr[i]);
            console.log("reArrange expType", expType);

            const currType = arr[i] < 0 ? false : true;

            console.log("reArrange currType", currType);

            if ( currType === expType ) {
                console.log("reArrange ptrIdx", ptrIdx);
                if ( ptrIdx !== -1 ) {
                    this.itrSwap(arr, arr[i], ptrIdx, i);
                    expType = arr[ptrIdx] < 0 ? true : false;
                    i = ptrIdx;
                } else {
                    expType = !expType;
                }
                ptrIdx = -1;
            } else if ( ptrIdx == -1 ) {
                console.log("reArrange i mismatch", i);
                ptrIdx = i;
            }
        }
        console.log(arr);
    }

    reArran
}

const aa = new ReArrangePositiveAndNegativeNumbersAlternate();
aa.reArrange([4, 5, 6, 7, -1]);
class DoubleFirstEleAndMoveZeroesToEnd {

    swap ( arr, i, j ) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    reArrange ( arr ) {
        let count = 0;
        for ( let i = 0; i < arr.length; i++ ) {
            if ( arr[i] !== 0 ) {
                if ( arr[i] === arr[i + 1] ) {
                    arr[i] = 2 * arr[i];
                    arr[i + 1] = 0;
                }
                this.swap(arr, i, count);
                count++;
            }
        }
    }
}

const jk = new DoubleFirstEleAndMoveZeroesToEnd();
const arr = [2, 2, 0, 4, 0, 8];
jk.reArrange(arr);
console.log(arr);
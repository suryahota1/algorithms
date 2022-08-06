class MoveAllZeroesToEnd {

    swap ( arr, i, j ) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    move ( arr ) {
        let count = 0;
        for ( let i = 0; i < arr.length; i++ ) {
            if ( arr[i] !== 0 ) {
                this.swap(arr, i, count);
                count++;
            }
        }
    }
}

const hj = new MoveAllZeroesToEnd();
const arr = [0, 1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0, 9];
hj.move(arr);
console.log(arr);

class ReOrderArrayForGivenIndexes {

    swap ( arr, i, j ) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    move ( arr, idxArr ) {
        for ( let i = 0; i < idxArr.length; i++ ) {
            if ( idxArr[i] !== i ) {
                this.swap(arr, i, idxArr[i]);
                this.swap(idxArr, i, idxArr[i]);
                console.log(arr);
                console.log(idxArr);
            }
        }
    }
}

const ref = new ReOrderArrayForGivenIndexes();
const arr = [50, 40, 70, 60, 90];
const idxArr = [3,  0,  4,  1,  2];
ref.move(arr, idxArr);

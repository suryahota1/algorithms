class SelectionSort {

    #swap ( arr, idx1, idx2 ) {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

    sort ( arr ) {
        for ( let i = 0; i < arr.length - 1; i++ ) {
            let minIdx = i;
            for ( let j = i + 1; j < arr.length; j ++ ) {
                if ( arr[j] < arr[minIdx] ) minIdx = j;
            }
            if ( minIdx != i ) this.#swap(arr, i, minIdx);
        }
        return arr;
    }
}

const aa = new SelectionSort();
console.log(aa.sort([2, 7, 9, 1, 3, 4, 5, 78, 32]));
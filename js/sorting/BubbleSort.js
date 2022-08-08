class BubbleSort {

    #swap ( arr, idx1, idx2 ) {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

    sort ( arr ) {
        let k = 0;
        while ( k < arr.length ) {
            let swapped = false;
            for ( let i = 1; i < arr.length - k; i++ ) {
                if ( arr[i] < arr[i - 1] ) {
                    swapped = true;
                    this.#swap(arr, i, i - 1);
                }
            }
            if ( !swapped ) return arr;
            k++;
        }
        return arr;
    }
}

const aa = new BubbleSort();
console.log(aa.sort([2, 777, 9, 1, 3, 4, 5, 78, 32]));

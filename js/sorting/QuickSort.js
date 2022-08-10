class QuickSort {

    #swap ( arr, idx1, idx2 ) {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }

    #partition ( arr, lo, hi ) {
        let i = lo - 1, pivot = arr[hi];
        for ( let j = lo; j <= hi; j++ )
            if ( arr[j] < pivot ) this.#swap(arr, j, ++i);
        this.#swap(arr, hi, ++i);
        return i;
    }

    sort ( arr, lo, hi ) {
        if ( lo >= hi ) return;
        let pIdx = this.#partition(arr, lo, hi);
        this.sort(arr, lo, pIdx - 1);
        this.sort(arr, pIdx + 1, hi);
    }
}

const anh = new QuickSort();
const arr = [ 87, 81, 23, 12, 1, 98, 45, 88, 234, 123 ];
anh.sort(arr, 0, 9);
console.log(arr);

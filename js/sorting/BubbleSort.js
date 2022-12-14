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

    #recSort ( arr, end ) {
        if ( end <= 1 ) return;
        for ( let i = 1; i <= end; i++ ) {
            if ( arr[i] < arr[i - 1] ) this.#swap(arr, i, i - 1);
        }
        this.#recSort(arr, end - 1);
    }

    recursiveSort ( arr ) {
        this.#recSort(arr, arr.length - 1);
        return arr;
    }
}

const aa = new BubbleSort();
console.log(aa.recursiveSort([2, 777, 9, 1, 3, 4, 5, 78, 32]));

/*
1. This algorithm keeps traversing through the list and puts the largest element
at the correct position.
2. This can make n - 1 swaps at most in each iteration.
3. This algorithm is not ideal when write operations are expensive.
4. Worst case time complexity is O(N ^ 2).
5. I have put in recursive bubble sort also.
*/

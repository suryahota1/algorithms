class BubbleSort {

    swap ( arr, i, j ) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    sort ( arr ) {
        let n = arr.length;
        for ( let i = 0; i < n - 1; i++ ) {
            let swapped = false;
            for ( let j = 0; j < n - i - 1; j++ ) {
                if ( arr[j] > arr[j + 1] ) {
                    this.swap(arr, j, j + 1);
                    swapped = true;
                }
            }
            if ( !swapped ) {
                break;
            }
        }
        console.log(arr);
    }
}

const aa = new BubbleSort();
aa.sort([2, 7, 9, 1, 3, 4, 5, 78, 32]);

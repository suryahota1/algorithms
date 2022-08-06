class SelectionSort {

    swap ( arr, i, minIdx ) {
        let temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
    }
    
    sort ( arr ) {
        let n = arr.length;
        for ( let i = 0; i < n; i++ ) {
            let minIdx = i;
            for ( let j = i + 1; j < n; j++ ) {
                if ( arr[j] < arr[minIdx] ) {
                    minIdx = j;
                }
            }
            if ( minIdx !== i ) {
                this.swap(arr, i, minIdx);
            }
        }
        console.log("arr", arr);
    }
}

const aa = new SelectionSort();
aa.sort([2, 7, 9, 1, 3, 4, 5, 78, 32]);
class InsertionSort {

    sort ( arr ) {
        for ( let i = 1; i < arr.length; i++ ) {
            let temp = arr[i];
            for ( let j = i - 1; j >= 0; j-- ) {
                if ( arr[j] > arr[j + 1] ) {
                    arr[j + 1] = arr[j];
                    j--;
                }
                arr[j + 1] = temp;
            }
        }
        console.log(arr);
    }
}

const aa = new InsertionSort();
aa.sort([3, 8, 1, 90, 23, 45, 7]);
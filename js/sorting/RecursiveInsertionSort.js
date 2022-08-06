class RecursiveInsertionSort {

    sort ( arr, n ) {
        if ( n <= 1 ) {
            return;
        }
        this.sort(arr, n - 1);
        let temp = arr[n - 1];
        console.log("temp", temp);
        let i = n - 2;
        while ( i >= 0 && arr[i] > temp ) {
            arr[i + 1] = arr[i];
            i--;
        }
        arr[i + 1] = temp;
    }
}

const aa = new RecursiveInsertionSort();
const a = [3, 8, 1, 90, 23, 45, 7];
aa.sort(a, 7);
console.log(a);

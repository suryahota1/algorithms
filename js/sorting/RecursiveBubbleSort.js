class RecursiveBubbleSort {

    swap ( arr, i, j ) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    sort ( arr, n ) {
        if ( n === 1 ) {
            return;
        }
        for ( let i = 0; i < n; i++ ) {
            if ( arr[i] > arr[i + 1] ) {
                this.swap(arr, i, i + 1);
            }
        }
        this.sort(arr, n - 1);
    }
}

const aa = new RecursiveBubbleSort();
let a = [2, 7, 9, 1, 3, 4, 5, 78, 32];
aa.sort(a, 9);
console.log(a);

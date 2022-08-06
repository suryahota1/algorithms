class HeapSort {

    sort ( arr ) {
        const n = arr.length;
        for ( let i = Math.floor(n / 2 - 1); i >= 0; i-- ) {
            this.heapify(arr, i, n);
        }
        for ( let i = 0; i < n; i++ ) {
            this.deleteTop(n-i-1);
        }
    }

    swap ( arr, i, j ) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    heapify ( arr, i, n ) {
        if ( i >= n ) {
            return;
        }
        let leftIdx = 2 * i + 1;
        let rightIdx = 2 * i + 2;
        let largestIdx = i;
        if ( leftIdx <= n && arr[largestIdx] < arr[leftIdx] ) {
            largestIdx = leftIdx;
        }
        if ( rightIdx <= n && arr[largestIdx] < arr[rightIdx] ) {
            largestIdx = rightIdx;
        }
        if ( largestIdx !== i ) {
            this.swap(arr, i, largestIdx);
            this.heapify(arr, largestIdx, n);
        }
    }

    deleteTop ( size ) {
        this.swap(arr, 0, size);
        this.heapify(arr, 0, size - 1);
    }
}

const ay = new HeapSort();
const arr = [122, 11, 17, 198, 21, 34, 5, 6, 7];
ay.sort(arr);
console.log(arr);

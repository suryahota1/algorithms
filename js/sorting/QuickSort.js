class QuickSort {

    sort ( arr, low, high ) {
        if ( low >= high ) {
            return;
        }
        const pIdx = this.partition(arr, low, high);
        console.log(pIdx);
        console.log(arr);
        this.sort(arr, low, pIdx - 1);
        this.sort(arr, pIdx + 1, high);
    }

    swap ( arr, i, j ) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    partition ( arr, low, high ) {
        let pivot = arr[high];
        let swapIdx = low - 1;
        console.log("pivot", pivot);
        console.log("swapIdx", swapIdx);
        for ( let i = low; i <= high; i++ ) {
            if ( arr[i] < pivot ) {
                this.swap(arr, i, ++swapIdx);
            }
        }
        this.swap(arr, high, ++swapIdx);
        return swapIdx;
    }
}

const anh = new QuickSort();
const arr = [ 87, 81, 23, 12, 1, 98, 45, 88, 234, 123 ];
anh.sort(arr, 0, 9);
console.log(arr);

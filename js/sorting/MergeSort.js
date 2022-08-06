
class MergeSort {

    sort ( arr, l, r ) {
        if ( l >= r ) {
            return;
        }
        
        let mid = l + parseInt((r-l)/2);
        this.sort(arr, l, mid);
        this.sort(arr, mid + 1, r);
        this.merge(arr, l, mid, r);
    }

    merge ( arr, l, mid, r ) {
        const leftArr = [];
        for ( let i = l; i <= mid; i++ ) {
            leftArr.push(arr[i]);
        }
        const rightArr = [];
        for ( let i = mid + 1; i <= r; i++ ) {
            rightArr.push(arr[i]);
        }

        let i = 0;
        let j = 0;
        let k = l;

        while ( i < leftArr.length && j < rightArr.length ) {
            if ( leftArr[i] <= rightArr[j] ) {
                arr[k++] = leftArr[i++];
            } else {
                arr[k++] = rightArr[j++];
            }
        }

        if ( i < leftArr.length ) {
            while ( i < leftArr.length ) {
                arr[k++] = leftArr[i++];
            }
        } else if ( j < rightArr.length ) {
            while ( j < rightArr.length ) {
                arr[k++] = rightArr[j++];
            }
        }
    }
}

const ah = new MergeSort();
const arr = [144, 1, 1453, 5, 609, 78, 0, 45, 23, 56, 226];
ah.sort(arr, 0, 10);
console.log(arr);

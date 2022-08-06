// Max Heap

class Heap {

    size;
    queue = [];

    constructor ( size ) {
        this.size = size;
    }

    swap ( arr, i, j ) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    heapify ( arr, idx ) {
        let largestIdx = idx;
        let leftIdx = 2 * idx + 1;
        let rightIdx = 2 * idx + 2;

        if ( leftIdx < this.size && arr[largestIdx].freq < arr[leftIdx].freq ) {
            largestIdx = leftIdx;
        }
        if ( rightIdx < this.size && arr[largestIdx].freq < arr[rightIdx].freq ) {
            largestIdx = rightIdx;
        }
        if ( largestIdx !== idx ) {
            this.swap(arr, idx, largestIdx);
            this.heapify(arr, largestIdx);
        }
    }

    buildHeap ( arr ) {
        for ( let i = Math.floor(this.size / 2 ) - 1; i >= 0; i-- ) {
            this.heapify(arr, i);
        }
    }

    removeTop ( arr ) {
        // console.log("remove size", this.size);
        if ( this.size > 0 ) {
            const res = arr[0];
            this.swap(arr, 0, this.size - 1);
            this.size--;
            this.heapify(arr, 0);
            return res;
        }
    }

    getTop ( arr ) {
        return arr[0];
    }

    sort () {
        while ( this.size > 0 ) {
            this.removeTop(arr);
        }
    }

    insert ( arr, val ) {
        this.size += 1;
        arr[this.size - 1] = val;

        let i = this.size - 1;
        while ( i >= 0 ) {
            const par = Math.floor(( i - 1 ) / 2);

            if ( par >= 0 && arr[i].freq > arr[par].freq ) {
                this.swap(arr, i, par);
                i = par;
            } else {
                break;
            }
        }
    }

    heapifyIterative ( arr, idx ) {
        do {
            let largestIdx = idx;
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;

            if ( leftIdx < this.size && arr[largestIdx] < arr[leftIdx] ) {
                largestIdx = leftIdx;
            }
            if ( rightIdx < this.size && arr[largestIdx] < arr[rightIdx] ) {
                largestIdx = rightIdx;
            }
            if ( largestIdx !== idx ) {
                this.swap(arr, idx, largestIdx);
                idx = largestIdx;
            } else {
                break;
            }
        } while ( idx < this.size );
        
    }
}

module.exports = Heap;

// const h = new Heap(9);
// const arr = [ 4, 1, 3, 9, 7, 98, 12, 76, 32 ];
// h.buildHeap(arr, 9);
// console.log(arr);
// h.sort(arr, 9);
// console.log(arr);

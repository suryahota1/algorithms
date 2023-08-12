class MaxHeap {

    maxSize;
    heapSize;
    heap;

    constructor ( maxSize ) {
        this.maxSize = maxSize;
        this.heapSize = 0;
        this.heap = new Array(maxSize);
    }

    swapIdx ( i, j ) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    heapify ( idx ) {
        const leftIdx = this.getLeft(idx);
        const rightIdx = this.getRight(idx);
        let largestIdx = idx;
        if ( leftIdx < this.heapSize && this.heap[largestIdx] < this.heap[leftIdx] ) largestIdx = leftIdx;
        if ( rightIdx < this.heapSize && this.heap[largestIdx] < this.heap[rightIdx] ) largestIdx = rightIdx;
        if ( largestIdx !== idx ) {
            this.swapIdx(largestIdx, idx);
            this.heapify(largestIdx);
        }
    }

    insertKey ( key ) {
        if ( this.heapSize >= this.maxSize ) throw new Error("Heap is full");
        this.heap[this.heapSize++] = key;
        let parentIdx = this.getParent(this.heapSize - 1);
        while ( parentIdx >= 0 ) {
            this.heapify(parentIdx);
            parentIdx = this.getParent(parentIdx);
        }
    }

    removeMax () {
        const maxVal = this.heap[0];
        if ( this.heapSize === 1 ) {
            --this.heapSize
            return maxVal;
        } else {
            this.heap[0] = this.heap[--this.heapSize];
            this.heapify(0);
        }
    }

    deleteIdx ( idx ) {
        if ( idx < 0 || idx >= this.heapSize ) throw new Error("Invalid index");
        if ( idx !== 0 ) {
            this.heap[idx] = Number.MAX_SAFE_INTEGER;
            while ( idx >= 0 ) {
                this.heapify(idx);
                idx = this.getParent(idx);
            }
        }
        this.removeMax();
    }

    getLeft ( i ) {
        return 2 * i + 1;
    }

    getRight ( i ) {
        return 2 * i + 2;
    }

    getParent ( i ) {
        return Math.floor((i - 1) / 2);
    }

    getMax () {
        if ( this.heapSize > 0 ) return this.heap[0];
        throw new Error("No elments in the heap");
    }

    curSize () {
        return this.heapSize;
    }
}

const h = new MaxHeap(15);
  
// Asking the user to input the keys:
console.log("Entered 6 keys:- 3, 10, 12, 8, 2, 14 \n");
  
h.insertKey(3);
h.insertKey(10);
h.insertKey(12);
h.insertKey(8);
h.insertKey(2);
h.insertKey(14);
  
  
// Printing the current size
// of the heap.
console.log(
    "The current size of the heap is " + h.curSize() + "\n"
);
  
  
// Printing the root element which is
// actually the maximum element.
console.log(
    "The current maximum element is " + h.getMax() + "\n"
);
  
  
// Deleting key at index 2.
h.deleteIdx(2);
  
  
// Printing the size of the heap
// after deletion.
console.log(
    "The current size of the heap is " + h.curSize() + "\n"
);
  
  
// Inserting 2 new keys into the heap.
h.insertKey(15);
h.insertKey(5);
  
console.log(
    "The current size of the heap is " + h.curSize() + "\n"
);
  
console.log(
    "The current maximum element is " + h.getMax() + "\n"
);
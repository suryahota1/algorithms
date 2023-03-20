class MaxHeap1 {

    maxSize; // Maximum size of the heap
    heapSize; // Current size of the heap
    // In JavaScript, arrays can be manipulated dynamically. As we add and remove elements
    // the array size updated dynamically

    heap;

    constructor ( maxSize ) {
        this.maxSize = maxSize;
        this.heapSize = 0;
        this.heap = [];
    }

    getLeftChild ( idx ) {
        return 2 * idx + 1;
    }

    getRightChild ( idx ) {
        return 2 * idx + 2;
    }

    getParent ( idx ) {
        return Math.floor( ( idx - 1 ) / 2);
    }

    moveElementToTheTop ( idx ) {
        while ( idx > 0 ) {
            let parentIdx = this.getParent(idx);
            if ( this.heap[parentIdx] >= this.heap[idx] ) return;
            let temp = this.heap[parentIdx];
            this.heap[parentIdx] = this.heap[idx];
            this.heap[idx] = temp;
            idx = parentIdx;
        }
    }

    insertValue ( value ) {
        if ( this.heapSize === this.maxSize ) return;
        let idx = this.heapSize++;
        this.heap[idx] = value;
        this.moveElementToTheTop(idx);
    }

    maxHeapify ( idx ) {
        let currVal = this.heap[idx];
        let largestIdx;
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);
        if ( leftIdx < this.heapSize && currVal < this.heap[leftIdx] ) {
            largestIdx = leftIdx;
        }
        if ( rightIdx < this.heapSize && this.heap[largestIdx] < this.heap[rightIdx] ) {
            largestIdx = rightIdx;
        }
        if ( largestIdx !== idx ) {
            let temp = this.heap[idx];
            this.heap[idx] = this.heap[largestIdx];
            this.heap[largestIdx] = temp;
            maxHeapify(largestIdx);
        }
    }

    getMax () {
        if ( this.heapSize >= 1 ) return this.heap[0];
    }

    removeValue ( idx ) {
        if ( this.heapSize === 0 ) return;
        if ( idx === 0 ) {
            let val = this.heap[0];
            this.heap[0] = this.heap[this.heapSize-- - 1];
            this.maxHeapify();
            return val;
        } else {
            this.heap[idx] = Number.MAX_VALUE;
            this.moveElementToTheTop(idx);
            this.removeValue(0);
        }
    }

    increaseKey ( idx, newValue ) {
        if ( idx >= this.heapSize ) return;
        this.heap[idx] = newValue;
        this.moveElementToTheTop(idx);
    }
}



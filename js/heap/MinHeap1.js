class MinHeap1 {

    maxSize;
    heapSize;
    heap;

    constructor ( maxSize ) {
        this.maxSize = maxSize;
        this.heapSize = 0;
        this.heap = new Array(maxSize);
    }

    getParentIdx ( idx ) {
        return Math.floor( ( idx - 1 ) / 2 );
    }

    getLeftChildIdx ( idx ) {
        return 2 * idx + 1;
    }

    getRightChildIdx ( idx ) {
        return 2 * idx + 2;
    }

    #moveElementToTop ( idx ) {
        while ( idx >= 0 ) {
            let parentIdx = this.getParentIdx();
            if ( parentIdx <= 0 || this.heap[parentIdx] <= this.heap[idx] ) return;
            let temp = this.heap[parentIdx];
            this.heap[parentIdx] = this.heap[idx];
            this.heap[idx] = temp;
            idx = parentIdx;
        }
    }

    minHeapify ( idx ) {
        let currVal = this.heap[idx];
        let leftIdx = this.getLeftChildIdx(idx);
        let rightIdx = this.getRightChildIdx(idx);

        let smallestIdx = idx;
        if ( leftIdx <= this.heapSize && this.heap[idx] > this.heap[leftIdx] ) {
            smallestIdx = leftIdx;
        }
        if ( rightIdx <= this.heapSize && this.heap[rightIdx] < this.heap[smallestIdx] ) {
            smallestIdx = rightIdx;
        }
        if ( smallestIdx !== idx ) {
            let temp = this.heap[smallestIdx];
            this.heap[smallestIdx] = this.heap[idx];
            this.heap[idx] = temp;
            minHeapify(smallestIdx);
        }
    }

    insert ( value ) {
        if ( this.heapSize === this.maxSize ) throw new Error("Max heap limit reached");
        let idx = this.heapSize;
        this.heap[this.heapSize++] = value;
        this.#moveElementToTop();
    }

    delete ( idx ) {

    }
}
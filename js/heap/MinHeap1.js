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
        while ( idx > 0 ) {
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
        this.heap[this.heapSize++] = value;
        this.#moveElementToTop();
    }

    #swap ( idx1, idx2 ) {
        let temp = this.heap[idx1];
        this.heap[idx1] = this.heap[idx2];
        this.heap[idx2] = temp;
    }

    delete ( idx ) {
        if ( idx < 0 || idx >= this.heapSize ) throw new Error("Invalid index");
        if ( this.heapSize === 0 ) throw new Error("Empty heap");
        if ( this.heapSize === 1 ) return this.heap[this.heapSize--];
        if ( idx === 0 ) {
            this.#swap(0, this.heapSize-- - 1);
            this.minHeapify(0);
        } else {
            this.heap[idx] = Number.MIN_VALUE;
            this.#moveElementToTop(idx);
            this.delete(0);
        }
    }
}
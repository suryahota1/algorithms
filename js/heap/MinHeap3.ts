type ComparatorFunction<T> = (key1: T, key2: T) => -1 | 0 | 1;

class MinHeap3<T> {
    heap: T[];
    heapSize: number;
    maxSize: number;
    comparatorFunction: ComparatorFunction<T>;
    minValue: T;

    constructor ( maxSize: number, comparatorFunction: ComparatorFunction<T>, minValue: T ) {
        this.maxSize = maxSize;
        this.heap = [];
        this.heapSize = 0;
        this.comparatorFunction = comparatorFunction;
        this.minValue = minValue;
    }

    private getParentIndex ( index: number ): number {
        if ( index > 0 ) return Math.floor(index / 2);
        throw new Error("No parent available");
    }

    private getLeftChildIndex ( index: number ): number {
        return 2 * index + 1;
    }

    private getRightChildIndex ( index: number ): number {
        return 2 * index + 2;
    }

    private compareKey ( key1: T, key2: T ): number {
        return this.comparatorFunction(key1, key2);
    }

    private swap ( index1: number, index2: number ): void {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    private heapifyUp ( index: number ): void {
        while ( index > 0 ) {
            const parentIndex = this.getParentIndex(index);
            const compareValue = this.compareKey(this.heap[parentIndex], this.heap[index]);
            if ( compareValue <= 0 ) break;
            this.swap(parentIndex, index);
            index = parentIndex;
        }
    }

    private heapifyDown ( index: number ) {
        const leftIdx = this.getLeftChildIndex(index);
        const rightIdx = this.getRightChildIndex(index);

        let smallestIndex = index;
        if ( leftIdx < this.heapSize && this.heap[leftIdx] < this.heap[index] ) {
            smallestIndex = index;
        }

        if ( rightIdx < this.heapSize && this.heap[rightIdx] < this.heap[smallestIndex] ) {
            smallestIndex = index;
        }

        if ( smallestIndex !== index ) {
            this.swap(index, smallestIndex);
            this.heapifyDown(smallestIndex);
        }
    }

    insert ( key: T ): void {
        if ( this.heapSize === this.maxSize ) throw new Error("Max heap size reached");
        this.heap[this.heapSize++] = key;
        this.heapifyUp(this.heapSize - 1);
    }

    update ( index: number, value: T ) {
        if ( index < 0 || index >= this.heapSize ) throw new Error("Invalid index");
        const oldValue = this.heap[index];
        if ( this.comparatorFunction(value, oldValue) < 0 ) {
            this.heapifyUp(index);
        } else {
            this.heapifyDown(index);
        }
    }

    delete( index: number ): void {
        if ( index < 0 || index >= this.heapSize ) throw new Error("Invalid index");
        if ( this.heapSize === 0 ) throw new Error("Empty heap");
        if ( this.heapSize === 1 ) this.heapSize--;
        if ( index === 0 ) {
            this.swap(0, this.heapSize - 1);
            this.heapifyDown(0);
        } else {
            this.update(index, this.minValue);
            this.delete(0);
        }
    }

    getMin(): T {
        if ( this.heapSize === 0 ) throw new Error("Heap is empty");
        return this.heap[0];
    }
}
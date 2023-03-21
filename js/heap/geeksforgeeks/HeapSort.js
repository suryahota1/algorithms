/* 
    Heap sort uses binary heap data structure to sort the list. 
    STEP-1: Convert the list into a max heap(ascending order) or min heap(descending order). 
        Perform heapify starting from the last non-leaf node towards the root node.
    STEP-2: Now the max or min element is at the root. Replace the root with the last element
        in the heap and heapify the root node.
    STEP-3: Repeat STEP-2 until all the nodes are replaced.
    
    Heap sort is an in-place algorithm. It does not need any additional memory to sort the list.
*/
class HeapSort {

    hearArray;
    heapSize;

    constructor ( list ) {
        this.hearArray = list;
        this.heapSize = list.length;
    }

    #getLeftChildIdx ( idx ) {
        return 2 * idx + 1;
    }

    #getRighChildIdx () {
        return 2 * idx + 2;
    }

    #swap ( idx1, idx2 ) {
        let temp = this.hearArray[idx1];
        this.hearArray[idx1] = this.hearArray[idx2];
        this.hearArray[idx2] = temp;
    }

    #heapify ( idx ) {
        const leftChildIdx = this.#getLeftChildIdx();
        const rightChildIdx = this.#getRighChildIdx();

        let largestIdx;
        if ( this.hearArray[idx] < this.hearArray[leftChildIdx] ) largestIdx = leftChildIdx;
        if ( this.hearArray[largestIdx] < this.hearArray[rightChildIdx] ) largestIdx = rightChildIdx;

        if ( largestIdx !== idx ) {
            this.#swap(idx, largestIdx);
            this.#heapify(largestIdx);
        }
    }

    #heapifyLastNonLeaf () {
        const lastNonLeafIdx = Math.floor(this.heapSize - 1) / 2;
        while ( lastNonLeafIdx >= 0 ) {
            this.#heapify(lastNonLeafIdx);
        }
    }

    #removeRoot () {
        const size = this.hearArray.length;
        for ( let i = size - 1; i > 0; i-- ) {
            this.#swap(0, i);
            this.#heapify(0);
        } 
    }

    sort () {
        this.#heapifyLastNonLeaf();
        this.#removeRoot();
    }
}
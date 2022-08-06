class LinearSearch {
    #arr;
    constructor ( arr ) {
        this.#arr = arr;
    }

    normalSearch ( key ) {
        let pos = -1;
        for ( let i = 0; i < this.#arr.length; i++ ) {
            if ( this.#arr[i] == key ) {
                pos = i;
                break;
            }
        }
        return pos;
    }

    twoPointerSearch ( key ) {
        let pos = -1, left = 0, right = this.#arr.length - 1;
        while ( left <= right ) {
            if ( this.#arr[left] == key ) {
                pos = left;
                break;
            } else if ( this.#arr[right] == key ) {
                pos = right;
                break;
            }
            left++;
            right--;
        }
        return pos;
    }

    #recFind ( list, key, idx ) {
        if ( idx >= list.length ) return -1;
        if ( list[idx] == key ) return idx;
        return this.#recFind(list, key, idx + 1);
    }

    recursiveSearch ( key ) {
        return this.#recFind(this.#arr, key, 0);
    }
}

// O(N) time complexity and O(1) space complexity

const se = new LinearSearch([5, 15, 6, 9, 4]);
console.log(se.recursiveSearch(17));

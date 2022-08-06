class JumpSearch {
    // Works on sorted arrays only
    #arr;
    constructor ( arr ) {
        this.#arr = arr.sort((a, b) => a - b);
    }

    search ( key ) {
        let n = this.#arr.length;
        let blockSize = Math.floor(Math.sqrt(n)), i = 0;
        while ( i < n && this.#arr[i] < key ) i += blockSize;
        if ( this.#arr[i] > key ) i = Math.max(0, i - blockSize);
        for ( let j = i; j < i + blockSize && j < n; j++ )
            if ( this.#arr[j] == key ) return j;
        return -1;
    }
}

const js = new JumpSearch([5, 15, 6, 9, 4]);
console.log(js.search(1));
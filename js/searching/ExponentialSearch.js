class ExponentialSearch {
    #arr;
    constructor ( arr ) {
        this.#arr = arr;
    }
    #recFind ( key, low, high ) {
        if ( low > high ) return -1;
        let mid = low + Math.floor(( high - low ) / 2);
        if ( this.#arr[mid] == key ) return mid;
        if ( this.#arr[mid] > key ) return this.#recFind.call(this, key, low, mid - 1);
        return this.#recFind.call(this, key, mid + 1, high);
    }
    search ( key ) {
        if ( this.#arr.length > 0 ) {
            if ( this.#arr[0] == key ) return 0;
            let i = 1;
            while ( i < this.#arr.length && this.#arr[i] <= key ) {
                i *= 2;
            }
            return this.#recFind(key, i / 2, Math.min(i, this.#arr.length));
        }
    }
}

const es = new ExponentialSearch([2, 3, 4, 10, 40]);
console.log(es.search(41));
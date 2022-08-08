class TernarySearch {
    #arr;
    constructor ( arr ) {
        this.#arr = arr.sort((a, b) => a - b);
    }
    #recTerFind ( key, lo, hi ) {
        if ( lo > hi ) return -1;
        let mid1 = lo + Math.floor(( hi - lo ) / 3);
        let mid2 = mid1 + Math.floor (( hi - lo ) / 3);
        if ( key === this.#arr[mid1] ) return mid1;
        if ( key === this.#arr[mid2] ) return mid2;
        if ( key < this.#arr[mid1] ) return this.#recTerFind(key, lo, mid1 - 1);
        else if ( key > this.#arr[mid2] ) return this.#recTerFind(key, mid2 + 1, hi);
        return this.#recTerFind(key, mid1 + 1, mid2 - 1);
    }
    search ( key ) {
        return this.#recTerFind(key, 0, this.#arr.length);
    }
}

const ts = new TernarySearch([5, 15, 6, 9, 4]);
console.log(ts.search(6));
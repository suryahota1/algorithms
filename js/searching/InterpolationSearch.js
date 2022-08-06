class InterpolationSearch {
    #arr;
    constructor ( arr ) {
        this.#arr = arr.sort((a, b) => a - b);
    }

    search ( key, lo, hi ) {
        if ( lo <= hi && key >= this.#arr[lo] && key <= this.#arr[hi] ) {
            let pos = lo + Math.floor((( key - this.#arr[lo] ) * ( hi - lo )) / ( this.#arr[hi] - this.#arr[lo] ));
            if ( this.#arr[pos] === key ) return pos;
            else if ( key > this.#arr[pos] ) return this.search(key, pos + 1, hi);
            return this.search(key, lo, pos - 1);
        } else return -1;
    }
}

const al = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47];
const is = new InterpolationSearch(al);
console.log(is.search(35, 0, al.length - 1));

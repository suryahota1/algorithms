function BinarySearch ( arr ) {
    this.arr = arr.sort(function(a, b){return a - b});
    this.iterativeSearch = function ( key ) {
        let low = 0, high = this.arr.length - 1;

        while ( low <= high ) {
            let mid = low + Math.floor((high - low) / 2);
            if ( this.arr[mid] == key ) return mid;
            if ( this.arr[mid] > key ) high = mid - 1;
            else low = mid + 1;
        }
        return -1;
    }
    function recFind ( key, low, high ) {
        if ( low > high ) return -1;
        let mid = low + Math.floor(( high - low ) / 2);
        if ( this.arr[mid] == key ) return mid;
        if ( this.arr[mid] > key ) return recFind.call(this, key, low, mid - 1);
        return recFind.call(this, key, mid + 1, high);
    }
    this.recursiveSearch = function ( key ) {
        return recFind.call(this, key, 0, this.arr.length - 1);
    }
}

const bs = new BinarySearch([5, 15, 6, 9, 4]);
console.log(bs.iterativeSearch(4));

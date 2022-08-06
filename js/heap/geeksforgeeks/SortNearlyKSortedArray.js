const Heap = require("./Heap");

class SortNearlyKSortedArray extends Heap {

    constructor ( size ) {
        super(size);
    }

    kSort ( arr, kSize ) {
        const newArr = [];
        for ( let i = 0; i < this.size; i++ ) {
            newArr.push(arr[i]);
        }
        this.buildHeap(newArr);
        console.log("newArr", newArr);
        let idx = 0;
        for ( let i = this.size; i < arr.length; i++ ) {
            arr[idx++] = this.removeTop(newArr);
            this.insert(newArr, arr[i]);
        }

        while ( this.size > 0 ) {
            arr[idx++] = this.removeTop(newArr);
        }
    }
}

const kSize = 3;
const tui = new SortNearlyKSortedArray(kSize + 1);
const arr = [ 6, 5, 3, 2, 8, 10, 9 ];
tui.kSort(arr, kSize);
console.log(arr);

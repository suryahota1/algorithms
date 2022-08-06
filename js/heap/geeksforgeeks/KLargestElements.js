const Heap = require("./Heap");

class KLargestElements extends Heap {

    constructor ( size ) {
        super(size);
    }

    getKLargestEles ( arr, k ) {
        this.buildHeap(arr);
        let i = 1;
        while ( i <= k ) {
            this.removeTop(arr);
            i++;
        }
    }
}

const yy = new KLargestElements(9);
const arr = [ 34, 12, 87, 11, 1, 78, 90, 35, 9 ];
yy.getKLargestEles(arr, 4);
console.log(arr);

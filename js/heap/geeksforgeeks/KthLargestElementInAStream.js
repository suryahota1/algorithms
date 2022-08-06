const Heap = require("./Heap");

class KthLargestElementInAStream extends Heap {

    constructor ( size ) {
        super(size);
    }

    getKLargestEles ( arr, k, n ) {
        const res = [];
        for ( let i = 0; i < k - 1; i++ ) {
            res.push(-1);
            this.queue.push(arr[i]);
        }
        this.size = k;
        this.queue.push(arr[k - 1]);
        this.buildHeap(this.queue);
        console.log("out", this.queue[0]);
        res.push(this.queue[0]);
        for ( let i = k; i < n; i++ ) {
            console.log("in arr ====", arr[i]);
            console.log("in queue", this.queue[0]);
            if ( arr[i] > this.queue[0] ) {
                this.removeTop(this.queue);
                console.log("after remove **********", this.queue[0]);
                this.insert(this.queue, arr[i]);
            }
            console.log("res---------------------------", this.queue[0]);
            res.push(this.queue[0]);
        }
        return res;
    }
}

const yy = new KthLargestElementInAStream(6);
const arr = [ 1, 2, 3, 4, 5, 6 ];
const res = yy.getKLargestEles(arr, 4, 6);
console.log(res);

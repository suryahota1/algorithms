const Heap = require("./Heap");

class MinCostRope extends Heap {

    tCost;

    constructor ( size ) {
        super(size);
        this.tCost = 0;
    }

    getMinCost ( arr ) {
        this.buildHeap(arr);
        while ( this.size > 0 ) {
            const min1 = this.removeTop(arr);
            const min2 = this.removeTop(arr);

            console.log("min1", min1);
            console.log("min2", min2);

            const sum = min1 + min2;
            this.tCost += sum;
            if ( this.size > 0 ) {
                this.insert(arr, sum);
            }
        }
        return this.tCost;
    }
}

const yop = new MinCostRope(1);
const no = yop.getMinCost([ 16 ]);
console.log(no);

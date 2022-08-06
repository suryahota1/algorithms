const Heap = require("./Heap");

class MinSumofIntegers extends Heap {

    constructor ( size ) {
        super(size);
    }

    getMinSum ( arr ) {
        if ( arr.length == 1 ) {
            return arr[1];
        }
        this.buildHeap(arr);
        let num1 = 0;
        let num2 = 0;

        let mul = 10;

        while ( this.size > 0 ) {
            const min1 = this.removeTop(arr);
            const min2 = this.removeTop(arr);

            console.log("min1", min1);
            // console.log("min2", min2);
            console.log("mul", mul);

            num1 = (num1 * mul) + min1;
            if ( min2 ) {
                num2 = (num2 * mul) + min2;
            }
        }
        console.log(num1);
        console.log(num2);

        return num1 + num2;
    }
}

const vb = new MinSumofIntegers(6);
const sum = vb.getMinSum([ 5, 3, 0, 7, 4 ]);
console.log(sum);
const Heap = require("./Heap");

class CheckIfArrayIsHeap extends Heap {

    isArrayHeap ( arr ) {
        const n = Math.floor(( arr.length - 1 ) / 2);
        for ( let i = n; i >= 0; i-- ) {
            const left = 2 * i + 1;
            const right = 2 * i + 2;
            if ( arr[i] < arr[left] || arr[i] < arr[right] ) {
                return false;
            }
        }
        return true;
    }
}

const re = new CheckIfArrayIsHeap();
const a = re.isArrayHeap([1, 15, 10, 7, 12, 2]);
console.log(a);

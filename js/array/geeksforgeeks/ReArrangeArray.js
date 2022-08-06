
class ReArrangeArray {

    #filledPositions;

    constructor () {
        this.#filledPositions = 0;
    }

    #fillPosition ( pos ) {
        const val = arr[pos];
        if ( val !== -1 ) {
            arr[pos] = -1;
            this.#fillPosition(val);
            
        }
        arr[pos] = pos;
        this.#filledPositions += 1;
    }

    fixArray ( arr ) {
        for ( let i = 0; i < arr.length; i++ ) {
            if ( arr[i] !== -1 && arr[i] !== i ) {
                const val = arr[i];
                arr[i] = -1;
                this.#fillPosition(val);
            } else {
                this.#filledPositions += 1;
            }
            console.log("this.#filledPositions", this.#filledPositions);
            if ( this.#filledPositions == arr.length ) {
                break;
            }
        }
    }
}

const obj = new ReArrangeArray();
const arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];
obj.fixArray(arr);
console.log(arr);

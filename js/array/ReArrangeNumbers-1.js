class ReArrangeNumbers {

    #swapRec ( idx, list, stat ) {
        if ( list[idx] === -1 ) {
            list[idx] = idx;
            return;
        }
        const nextIdx = list[idx];
        list[idx] = -1;
        this.#swapRec(nextIdx, list, false);
        if ( !stat ) list[idx] = idx;
    }

    reArrange ( list ) {
        list.forEach((element, idx) => {
            if ( element !== -1 && element !== idx ) {
                this.#swapRec(idx, list, true);
            }
        });
    }
}

const obj1 = new ReArrangeNumbers();
const input = [1, 0, -1, 1, -1, -1, 2, -1, 4, -1];
obj1.reArrange(input);
console.log(input);

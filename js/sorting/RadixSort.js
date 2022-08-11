class RadixSort {

    #stableCountSort ( arr, exp ) {
        const count = new Array(10).fill(0);
        const output = new Array(arr.length);
        for ( const k of arr ) {
            const idx = Math.floor((k / exp) % 10);
            count[idx]++;
        }
        let idxVal = 0;
        for ( let i = 0; i < count.length; i++ ) {
            let val = count[i];
            count[i] = idxVal;
            idxVal += val;
        }

        for ( const p of arr ) {
            const idx = Math.floor((p / exp) % 10);
            output[count[idx]++] = p;
        }
        for ( let i = 0; i < arr.length; i++ ) arr[i] = output[i];
        return arr;
    }

    sort ( arr ) {
        let max = Number.MIN_VALUE;
        for ( const k of arr ) max = Math.max(k, max);
        let exp = 1;
        while ( exp < max ) {
            this.#stableCountSort(arr, exp);
            exp *= 10;
        }
        return arr;
    }
}

const rs = new RadixSort();
console.log(rs.sort([170, 45, 75, 90, 802, 24, 2, 66]));

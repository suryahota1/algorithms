class CountingSort {

    sort ( arr ) {
        let min = Number.MAX_VALUE, max = Number.MIN_VALUE;
        for ( const n of arr ) {
            min = Math.min(n, min);
            max = Math.max(n, max);
        }
        const output = new Array(arr.length);
        const count = new Array(max - min + 1).fill(0);
        for ( const p of arr )
            count[p - min]++;
        let start = 0;
        for ( let i = 0; i < count.length; i++ ) {
            let val = count[i];
            count[i] = start;
            start += val;
        }
        for ( const k of arr ) {
            let idx = k - min;
            output[count[idx]++] = k;
        }
        for ( let i = 0; i < arr.length; i++ )
            arr[i] = output[i];
        return arr;
    }
}

const cs = new CountingSort();
console.log(cs.sort([9, 5, 10, 15, 12, 8, 8, 7, 3, 5, 6, 2, 14, 13, 4, 11, 10, 2]));
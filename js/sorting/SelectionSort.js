class SelectionSort {
    #swap ( arr, idx1, idx2 ) {
        let temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }
    sort ( arr ) {
        for ( let i = 0; i < arr.length - 1; i++ ) {
            let minIdx = i;
            for ( let j = i + 1; j < arr.length; j ++ ) {
                if ( arr[j] < arr[minIdx] ) minIdx = j;
            }
            if ( minIdx != i ) this.#swap(arr, i, minIdx);
        }
        return arr;
    }
}

const aa = new SelectionSort();
console.log(aa.sort([2, 7, 9, 1, 3, 4, 5, 78, 32]));

/*
1. The approach is to select the minimum number(for ascending order) for every 
iteration and place it at the beginning. 
2. The outer loop is to select a certain position to put the minimum element 
and the inner loop is to traverse through the array and find out the minimum element. 
3. The time complexity is O(N ^ 2) and space compexity is O(1).
4. The selection sort is useful when memory write is expensive as this sort makes at most 
O(N) write operations.
*/
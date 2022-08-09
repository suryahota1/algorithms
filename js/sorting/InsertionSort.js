class InsertionSort {
    sort ( arr ) {
        for ( let i = 1; i < arr.length; i++ ) {
            let val = arr[i], j = i - 1;
            while ( j >= 0 && val < arr[j] ) arr[j + 1] = arr[j--];
            arr[++j] = val;
        }
        return arr;
    }
}

const aa = new InsertionSort();
console.log(aa.sort([34, 80, 1, 90, 23, 45, 790]));

/*
1. The approach is to insert the current element in the right position.
2. This algorithm maintains two sub parts of the main array. One is sorted and 
the other is not.
3. It takes the element from the unsorted part and inserts it at the correct position
in the sorted part.
4. The best case is when the array is already sorted and worst is when it is 
reversely sorted.
*/

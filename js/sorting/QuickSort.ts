type Comparator<T> = (a: T, b: T) => -1 | 0 | 1;

function swap ( arr: Array<any>, i: number, j: number ) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition1<T> ( arr: Array<T>, left: number, right: number, comparator: Comparator<T> ): number {
    let i = left - 1, j = left, pivot = arr[right];
    while ( j < right ) {
        if ( comparator(arr[j], pivot) <= 0 ) {
            swap(arr, ++i, j);
        }
    }
    swap(arr, ++i, right);
    return i;
}

function quickSort<T> ( arr: Array<T>, comparator: Comparator<T>, left = 0, right = arr.length - 1 ) {
    if ( left >= right ) return;
    const partitionIdx = partition1(arr, left, right, comparator);
    quickSort(arr, comparator, left, partitionIdx - 1);
    quickSort(arr, comparator, partitionIdx + 1, right);
}
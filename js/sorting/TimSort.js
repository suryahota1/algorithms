/*
    1. This algorithm is a hybrid algorithm. It is a mix of insertion sort and merge sort.
    2. When array size is small between 32 to 64, insertion sort performs better.
    3. This algorithm breaks the bigger array into smaller chunks, sorts each chunk using
        insertion sort, then keeps merging each chunk until the whole array is sorted
 */

function insertionSort () {

}

function merge () {
    
}

function timSort ( list=[] ) {
    if ( list.length <= 1 ) return;

}

const ip = [12, 18, 61, 44, 551, 99];
const op = timSort(ip);
console.log(ip);

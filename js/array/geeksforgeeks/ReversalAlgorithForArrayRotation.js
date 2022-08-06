
class ReversalAlgorithForArrayRotation {

    leftRotate ( arr, d ) {
        this.#reverse(arr, 0, d - 1);
        this.#reverse(arr, d, arr.length - 1);
        this.#reverse(arr, 0, arr.length - 1);
        console.log(arr);
    }

    #reverse ( arr, start, end ) {
        while ( start < end ) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}

const a = new ReversalAlgorithForArrayRotation();
a.leftRotate([1, 2, 3, 4, 5, 6, 7], 2);
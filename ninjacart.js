function rotateArray ( arr, k ) {
    for ( let i = 0; i < k; i++ ) {
        let prevVal = arr[0];
        for ( let j = 1; j < arr.length; j++ ) {
            const c = arr[j];
            arr[j] = prevVal;
            prevVal = c;
        }
        arr[0] = prevVal;
    }
    console.log("arr", arr);
}

rotateArray([1,2,3,4,5, 6, 7], 3);

// 1->2->3->4->5

// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]


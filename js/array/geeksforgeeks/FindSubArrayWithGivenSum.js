/*
    -> Array contains positive numbers only
    -> Time complexity: O(n)
    -> Space complexity: O(1)
*/
function subArraySum ( arr, targetSum ) {
    if ( arr.length === 0 ) return [];
    let currSum = arr[0], start = 0, end = 0;

    while ( end < arr.length ) {
        if ( currSum === targetSum ) return [start, end];
        if ( currSum < targetSum ) currSum += arr[++end];
        else currSum -= arr[start++];
    }
    return [];
}

const arr = [ 1, 4, 20, 3, 10, 5 ];
const sum = 33;
console.log(subArraySum(arr, sum));

/*
    -> Array may contain negative numbers
    -> Time complexity: O(n)
    -> Space complexity: O(n)
*/

function subArraySum1 ( arr, targetSum ) {
    if ( arr.length === 0 ) return [];
    const map = new Map();
    let currSum = 0, start = 0;

    while ( start < arr.length ) {
        currSum += arr[start];
        console.log("currSum", currSum);
        if ( currSum === targetSum ) return [0, start];
        if ( currSum > targetSum && map.has(currSum - targetSum) ) return [map.get(currSum - targetSum) + 1, start];
        map.set(currSum, start++);
    }
    return [];
}

const arr1 = [10, 2, -2, -20, 10];
const sum1 = 0;
console.log("----", subArraySum1(arr1, sum1));

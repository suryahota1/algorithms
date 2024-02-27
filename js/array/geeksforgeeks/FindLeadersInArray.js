/**
    Algorithm used: Monotonic stack
    Time complexity: O(n) 
    Space complexity: O(n) 
*/

function findLeadersInArray ( arr ) {
    if ( arr.length === 0 ) return [];
    const stack = [arr[arr.length - 1]];
    for ( let i = arr.length - 2; i >= 0; i-- ) {
        if ( arr[i] > stack[stack.length - 1] ) stack.push(arr[i]);
    }
    return stack;
}

console.log(findLeadersInArray([16, 17, 4, 3, 5, 2]));

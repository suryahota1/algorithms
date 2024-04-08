/**
 * Input : input = {{1, 2}, {4, 7}, {3, 8}} 
 * Output : 1 
 * Explanation: Removal of {3, 8} makes {{1, 2} and {4, 7}} non-overlapping. 
 * 
 * Input : input = {{ 10, 20 }, { 10, 20 } , { 10, 20 }} 
 * Output : 2 
 * Explanation: Removal of [10, 20] makes the remaining ranges non-overlapping. 
 * 
 * Input : input = {{1, 2}, {5, 10}, {18, 35}, {40, 45}} 
 * Output : 0 
 * Explanation:All ranges are already non-overlapping.
*/

function getMin ( arr ) {
    arr.sort((a, b) => a[0] - b[0]);
    let end = arr[0][1];
    let count = 0;
    for ( let i = 1; i < arr.length; i++ ) {
        if ( arr[i][0] <= end ) {
            count++;
            end = Math.min(end, arr[i][1]);
        } else {
            end = arr[i][1];
        }
    }
    return count;
}

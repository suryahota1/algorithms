class Solution {
    rec ( index, end, canRob, arr, dp ) {
        if ( index > end ) return 0;

        if ( dp[index][canRob] !== null ) return dp[index][canRob];
        
        let rob = 0, skip = 0;
        
        if ( canRob ) {
            rob = arr[index] + this.rec(index + 1, end, 0, arr, dp);
        }
        skip = this.rec(index + 1, end, 1, arr, dp);
        
        return dp[index][canRob] = Math.max(rob, skip);
    }
    maxValue(arr) {
        const dp1 = [];
        for ( let i = 0; i < arr.length; i++ ) {
            dp1.push([null, null]);
        }
        const dp2 = [];
        for ( let i = 0; i < arr.length; i++ ) {
            dp2.push([null, null]);
        }
        return Math.max(this.rec(0, arr.length - 2, 1, arr, dp1), this.rec(1, arr.length - 1, 1, arr, dp2));
    }
}

const sol = new Solution();
console.log(sol.maxValue([4, 9, 1, 6, 2, 2, 7, 2, 2, 6]));

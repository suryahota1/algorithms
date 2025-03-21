class Solution {
    rec ( index, canLoot, arr, dp) {
        console.log("index", index, canLoot);
        if ( index === arr.length ) return 0;
        if ( dp[index][canLoot] !== null ) return dp[index][canLoot];
        
        let loot = 0;
        let skip = 0;
        if ( canLoot ) {
            loot = arr[index] + this.rec(index + 1, 0, arr, dp);
        }
        skip = this.rec(index + 1, 1, arr, dp);
        
        return dp[index][canLoot] = Math.max(
            loot, skip
        );
    }
    findMaxSum(arr) {
        const dp = [];
        for ( let i = 0; i < arr.length; i++ ) {
            dp.push([null, null]);
        }
        return this.rec(0, 1, arr, dp);
    }
}

const sol = new Solution();

sol.findMaxSum([6, 5, 5, 7, 4]);
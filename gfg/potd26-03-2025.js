class Solution23 {
    rec ( start, end, str, dict, dp) {
        if ( start >= str.length ) return true;
        if ( dp[start][end] !== null ) {
            return dp[start][end];
        }
        const subStr = str.substring(start, end + 1);
        if ( dict.has(subStr) ) return dp[start][end] = true;
        
        for ( let i = start; i < end; i++ ) {
            const isLeftThere = this.rec(start, i, str, dict, dp);
            const isRightThere = this.rec(i + 1, end, str, dict, dp);
            
            if ( isLeftThere && isRightThere ) {
                return dp[start][end] = true;
            }
        }
        return dp[start][end] = false;
    }
    wordBreak(s, dictionary) {
        const dict = new Set(dictionary);

        console.log(dict);
      
        const dp = [];
        for ( let i = 0; i < s.length; i++ ) {
            const ref = [];
            for ( let j = 0; j < s.length; j++ ) {
                ref.push(null);
            }
            dp.push(ref);
        }
        
        return this.rec(0, s.length - 1, s, dict, dp);
    }
}

const sol23 = new Solution23();

console.log("answer =========", sol23.wordBreak("ilikegfg", ["i", "like", "man", "india", "gfg"]));
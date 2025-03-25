class Solution {
    rec ( str, start, end, dp ) {
        console.log("rec start, end", start, end);
        if ( dp[start][end][0] !== null ) {
            return;
        }
        if ( start === end ) {
            if ( str[start] === "T" ) {
                dp[start][end][1] = 1;
                dp[start][end][0] = 0;
            } else {
                dp[start][end][1] = 0;
                dp[start][end][0] = 1;
            }
            return;
        }
        dp[start][end][0] = 0;
        dp[start][end][1] = 0;
        for ( let i = start + 1; i < end; i += 2 ) {
            const operator = str[i];
            this.rec(str, start, i - 1, dp);
            this.rec(str, i + 1, end, dp);
            
            const leftTrueCount = dp[start][i - 1][1];
            const rightTrueCount = dp[i + 1][end][1];
            const leftFalseCount = dp[start][i - 1][0];
            const rightFalseCount = dp[i + 1][end][0];

            console.log("start", start, "i", i, "end", end);
            console.log("operator", operator);

            console.log("leftTrueCount", leftTrueCount);
            console.log("rightTrueCount", rightTrueCount);
            console.log("leftFalseCount", leftFalseCount);
            console.log("rightFalseCount", rightFalseCount);
            
            if ( operator === "&" ) {
                dp[start][end][1] += leftTrueCount * rightTrueCount;
                dp[start][end][0] += leftFalseCount * rightTrueCount + leftTrueCount * rightFalseCount + leftFalseCount * rightFalseCount;
            } else if ( operator === "|" ) {
                dp[start][end][1] += leftTrueCount * rightFalseCount + rightTrueCount * leftFalseCount + leftTrueCount * rightTrueCount;
                
                dp[start][end][0] += leftFalseCount * rightFalseCount;
            } else {
                dp[start][end][1] += leftTrueCount * rightFalseCount + leftFalseCount * rightTrueCount;
                dp[start][end][0] += leftTrueCount * rightTrueCount + leftFalseCount * rightFalseCount;
            }

            console.log("currFalseCount", dp[start][end][0]);
            console.log("currTrueCount", dp[start][end][1]);
        }
    }
    countWays(s) {
        const dp = [];
        for ( let i = 0; i < s.length; i++ ) {
            const ref = [];
            for ( let j = 0; j < s.length; j++ ) {
                ref.push([null, null]);
            }
            dp.push(ref);
        }
        this.rec(s, 0, s.length - 1, dp);
        console.log("Answer ---------", dp[0][s.length - 1][1]);
        return dp[0][s.length - 1][1];
    }
}

const sol1 = new Solution();
sol1.countWays("F&T|F^T|T");
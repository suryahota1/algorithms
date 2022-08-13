class MinStepsToOneTabulation {
    constructor () {

    }

    getMinSteps ( num ) {
        let dp = new Array(num + 1);
        dp[0] = 0;
        dp[1] = 0;
        for ( let i = 2; i <= num; i++ ) {
            dp[i] = 1 + dp[i - 1];
            if ( i % 2 == 0 ) dp[i] = Math.min(dp[i], 1 + dp[i / 2]);
            if( i % 3 == 0 ) dp[i] = Math.min(dp[i], 1 + dp[i / 3]);
        }
        return dp[num];
    }
}

const mto = new MinStepsToOneTabulation();
console.log(mto.getMinSteps(7));
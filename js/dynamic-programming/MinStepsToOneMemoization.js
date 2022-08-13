function MinStepsToOneMemoization ( num ) {
    this.nums = num;
    this.dp = {};
}

MinStepsToOneMemoization.prototype.getMinSteps = function ( num ) {
    if ( num <= 1 ) return 0;
    if ( this.dp[num] ) return this.dp[num];
    let minVal = 1 + this.getMinSteps(num - 1);
    if ( num % 2 == 0 ) minVal = Math.min(minVal, 1 + this.getMinSteps(num / 2));
    if ( num % 3 == 0 ) minVal = Math.min(minVal, 1 + this.getMinSteps(num / 3));
    this.dp[num] = minVal;
    return minVal;
}

const mtpo = new MinStepsToOneMemoization(7);
console.log(mtpo.getMinSteps(mtpo.nums));

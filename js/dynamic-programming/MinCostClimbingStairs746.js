class MinCostClimbingStairs {
    #dp = {};
    minCostRec ( cost, idx ) {
        if ( idx >= cost.length ) return 0;
        // console.log("For idx = " + idx);
        if ( this.#dp[idx] ) return this.#dp[idx];
        let cost1 = cost[idx] + this.minCostRec(cost, idx + 1);
        let cost2 = cost[idx] + this.minCostRec(cost, idx + 2);
        console.log("idx = " + idx + " cost1 = " + cost1 + " cost2 = " + cost2);
        let min = Math.min(cost1, cost2);
        this.#dp[idx] = min;
        return min;
    }

    minCostClimbingStairs( cost ) {
        return Math.min(this.minCostRec(cost, 0), this.minCostRec(cost, 1));
    }
}

const mc = new MinCostClimbingStairs();
console.log(mc.minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]));
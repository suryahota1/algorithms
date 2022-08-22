class DifferentWaysToWriteNAsSumOfNumsIterative {
    #dp = [];
    constructor() {
        this.#dp[0] = this.#dp[1] = this.#dp[2] = 1, this.#dp[3] = 2;
    }
    getWays ( num ) {
        for ( let i = 4; i <= num; i++ )
            this.#dp[i] = this.#dp[i - 1] + this.#dp[i - 3] + this.#dp[i - 4];
        console.log(this.#dp[num]);
    }
}

const dp = new DifferentWaysToWriteNAsSumOfNumsIterative();
dp.getWays(5)

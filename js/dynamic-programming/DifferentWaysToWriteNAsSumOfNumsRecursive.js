class SumWays {
    #waysMemo = {};
    #numList;
    constructor ( nl ) {
        this.#numList = nl;
    }
    getWays ( num ) {
        if ( num == 0 ) return 1;
        if ( num < 0 ) return 0;
        if ( this.#waysMemo[num] ) return this.#waysMemo[num];
        let ways = 0;
        for ( const n of this.#numList )
            ways += this.getWays(num - n);
        this.#waysMemo[num] = ways;
        return ways;
    }
}

const sw = new SumWays([1, 3, 4]);
console.log(sw.getWays(5));
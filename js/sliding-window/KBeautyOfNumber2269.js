class KBeautyOfNumber {
    #k;
    constructor ( k ) {
        this.#k = k;
    }

    getKBeauty ( num ) {
        let i = 0, d = 1, n = 0, c = 0;
        const num1 = num;
        while ( i++ < this.#k ) {
            n += ((num % 10) * d);
            d *= 10;
            num = Math.floor(num / 10);
        }
        if ( n != 0 && num1 % n == 0 ) c++;
        while ( num > 0 ) {
            n = (num % 10) * Math.pow(10, this.#k - 1) + Math.floor(n / 10);
            if ( n != 0 && num1 % n == 0 ) c++;
            num = Math.floor(num / 10);
        }
        return c;
    }
}

const kb = new KBeautyOfNumber(2);
console.log(kb.getKBeauty(430043));
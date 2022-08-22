class CountSortedVowelStrings {
    #places;
    constructor ( n ) {
        this.#places = n;
    }
    #countRec ( placeNum, indexNum ) {
        if ( placeNum > this.#places ) return 1;
        let currCount = 0;
        while ( indexNum < 5 ) {
            currCount += this.#countRec(placeNum + 1, indexNum++);
        }
        return currCount;
    }
    countVowelStrings () {
        const val = this.#countRec(1, 0);
        console.log("val = ", val);
    }
}

const cv = new CountSortedVowelStrings(2);
cv.countVowelStrings();
function percentageOfLetterInString ( s, letter ) {
    let count = 0;
    for ( let i = 0; i < s.length; i++ ) {
        if ( s[i] === letter ) count++;
    }
    return Math.round((count / s.length) * 100);
}

console.log(percentageOfLetterInString("sgawtb", "s"));

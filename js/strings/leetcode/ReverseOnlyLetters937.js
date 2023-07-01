function checkIsNotLetter ( charCode ) {
    if ( charCode < 65 || ( charCode > 90 && charCode < 97 ) || charCode > 122 ) return true;
    return false;
}
function setCharAt ( str, index, chr ) {
    console.log("setCharAt str", str, index, chr);
    if ( index > str.length-1 ) return str;
    console.log("setCharAt val", str.substring(0,index), str.substring(index+1));
    return str.substring(0,index) + chr + str.substring(index+1);
}
function swapChars ( str, i, j ) {
    console.log("swapChars str", str);
    const temp = str[i];
    str = setCharAt(str, i, str[j]);
    str = setCharAt(str, j, temp);
    console.log("swapChars str after===========", str);
    return str;
}
function reverseOnlyLetters ( s ) {
    let start = 0;
    let end = s.length - 1;

    while ( start < end ) {
        if ( checkIsNotLetter(s.charCodeAt(start)) ) {
            start++;
            continue;
        }
        if ( checkIsNotLetter(s.charCodeAt(end)) ) {
            end--;
            continue;
        }
        console.log(start, end);
        s = swapChars(s, start, end);
        start++;
        end--;
    }
    return s;
}

console.log(reverseOnlyLetters("Test1ng-Leet=code-Q!"));


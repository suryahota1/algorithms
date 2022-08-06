class PermutationsOfString {
    constructor () {

    }
    getPerm ( str ) {
        if ( str.length === 0 ) return [];
        if ( str.length === 1 ) return [str[0]];
        let sList = [];
        for ( let i = 0; i < str.length; i++ ) {
            const ar = this.getPerm(str.substring(0, i) + str.substring(i + 1, str.length));
            for ( let k = 0; k < ar.length; k++ ) 
                ar[k] = str[i] + ar[k];
            sList = sList.concat(ar);
        }
        return sList;
    }
}

const pm = new PermutationsOfString();
const perm = pm.getPerm("ABC");
console.log("perm", perm);

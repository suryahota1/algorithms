// Assume the collection contains strings of lowercase alphabets only
class TrieNode {

    children;
    wordEndCount;
    prefixCount;

    constructor () {
        this.children = new Array(26);
        this.wordEndCount = 0;
        this.prefixCount = 0;
    }
}

class Trie {

    root;

    constructor () {
        this.root = new TrieNode();
    }

    insert ( word ) {
        let root = this.root;
        for ( let i = 0; i < word.length; i++ ) {
            const idx = word.charCodeAt(i) - 97;
            let nextRoot = root.children[idx];
            if ( !nextRoot ) {
                console.log("creating next root for ", word[i]);
                nextRoot = new TrieNode();
                root.children[idx] = nextRoot;
            }
            nextRoot.prefixCount++;
            root = nextRoot;
        }
        root.wordEndCount++;
        root.prefixCount--;
    }

    searchPrefix ( key ) {
        let root = this.root;
        for ( let i = 0; i < key.length; i++ ) {
            const idx = key.charCodeAt(i) - 97;
            if ( !root.children[idx] ) return { root, isFound: false };
            root = root.children[idx];
        }
        return { root, isFound: root.prefixCount > 0 };
    }

    searchPartOfWord ( word ) {
        let root = this.root;
        for ( let i = 0; i < word.length; i++ ) {
            const idx = word.charCodeAt(i) - 97;
            if ( !root.children[idx] ) {
                if ( root.wordEndCount > 0 ) {
                    return { root, isFound: false, partial: true, idx: i };
                }
                return { root, isFound: false, partial: false };
            }
            root = root.children[idx];
        }
        return { root, isFound: root.wordEndCount > 0 || root.prefixCount > 0, partial: false };
    }

    searchWord ( word ) {
        let root = this.root;
        for ( let i = 0; i < word.length; i++ ) {
            const idx = word.charCodeAt(i) - 97;
            if ( !root.children[idx] ) return { root, isEnding: false };
            root = root.children[idx];
        }
        return { root, isEnding: root.wordEndCount > 0 };
    }

    #deleteCurrWord ( root, word, keyIdx ) {
        if ( !root ) {
            throw new Error("Word not found");
        }
        if ( keyIdx < word.length ) {
            // Reduce curr prefixCount if deleted
            const idx = word.charCodeAt(keyIdx) - 97;
            const nextNode = this.#deleteCurrWord(root.children[idx], word, keyIdx + 1);
            root.children[idx] = nextNode;
            if ( nextNode === null ) {
                root.prefixCount--;
                if ( root.wordEndCount === 0 && root.prefixCount === 0 ) {
                    return null;
                }
            }
            return root;
        }
        if ( root.wordEndCount === 0 ) {
            throw new Error("Word not found");
        }
        root.wordEndCount--;
        if ( root.wordEndCount === 0 && root.prefixCount === 0 ) {
            // can delete current TrieNode completely;
            return null;
        }
        return root;
    }

    deleteWord ( word ) {
        return this.#deleteCurrWord(this.root, word, 0);
    }

    #getOnlyOccuringChar ( root ) {
        let idx;
        for ( let i = 0; i < root.children.length; i++ ) {
            if ( root.children[i]?.prefixCount > 0 ) {
                if ( idx !== undefined ) return undefined;
                else idx = i;
            }
        }
        return idx;
    }

    getLongestCommonPrefix () {
        let root = this.root, str = "";
        while ( root ) {
            const idx = this.#getOnlyOccuringChar(root);
            if ( idx === undefined ) return str;
            str += String.fromCharCode(idx + 97);
            root = root.children[idx];
        }
        return str;
    }

    checkIfPalindromStringsExist ( arr ) {
        return arr.some(item => {
            const revStr = reverseString(item);
            console.log("revStr", revStr);
            const foundStat = this.searchPartOfWord(revStr);
            console.log("isEnding", foundStat.isFound, foundStat.partial, foundStat.idx);
            if ( foundStat.isFound ) {
                return this.#checkIfRemainingStringIsPalindrome(foundStat.root);
            } else if ( foundStat.partial ) {
                const res = revStr.substr(foundStat.idx);
                console.log("partial string", item, res);
                const stat = isStringPalindrome();
                console.log("partial string", stat);
                return stat;
            }
        });
    }

    #checkIfRemainingStringIsPalindrome ( root, str="" ) {
        console.log("checkIfRemainingStringIsPalindrome", str);
        if ( root.wordEndCount > 0 && str.length > 0 ) {
            const isPal = isStringPalindrome(str);
            if ( isPal ) return true;
        }
        if ( root.prefixCount === 0 ) return false;
        for ( let i = 0; i < root.children.length; i++ ) {
            if ( root.children[i] ) {
                str += String.fromCharCode(i + 97);
                if ( this.#checkIfRemainingStringIsPalindrome(root.children[i], str) ) return true;
            }
        }
        return false;
    }
}

try {
    const trObj = new Trie();
    // trObj.insert("and");
    // trObj.insert("ant");
    // console.log("tri contains prefix and", trObj.searchWord("and"));
    // trObj.deleteWord("and");
    // console.log("tri contains prefix and", trObj.searchWord("and"));
    // trObj.insert("and");
    // trObj.insert("an");
    // trObj.deleteWord("ant");
    // trObj.deleteWord("and");
    // trObj.deleteWord("an");
    // console.log("tri contains prefix and", trObj.searchWord("ant"));
    // console.log("tri contains prefix and", trObj.searchWord("and"));
    // console.log("tri contains prefix and", trObj.searchWord("an"));
    // trObj.insert("and");
    // console.log("tri contains prefix and", trObj.searchWord("and"));

    // trObj.insert("geeksforgeeks");
    // trObj.insert("geeks");
    // trObj.insert("geek");
    // trObj.insert("geezer");

    // console.log("tri contains prefix and", trObj.searchWord("april"));

    // console.log("getLongestCommonPrefix", trObj.getLongestCommonPrefix());

    const arr = ["abc", "xyxcba", "geekst", "or", "keeg", "bc"];
    for ( let i = 0; i < arr.length; i++ ) {
        trObj.insert(arr[i]);
    }

    console.log(trObj.checkIfPalindromStringsExist(arr));
} catch ( e ) {
    console.log("Error in Trie", e);
}

function reverseString ( str="" ) {
    str = str.split("");
    // console.log("before reverseString", str);
    let i = 0, j = str.length - 1;
    while ( i < j ) {
        const temp = str[i];
        str[i] = str[j];
        str[j] = temp;
        i++;
        j--;
    }
    // console.log("after reverseString", str);
    return str.join("");
}

function isStringPalindrome ( str="" ) {
    let i = 0; j = str.length - 1;
    while ( i < j ) {
        if ( str[i++] !== str[j--] ) return false;
    }
    return true;
}

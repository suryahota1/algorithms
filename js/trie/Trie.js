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
            let nextRoot = root[idx];
            if ( !nextRoot ) {
                console.log("creating next root for ", word[i]);
                nextRoot = new TrieNode();
                root[idx] = nextRoot;
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
            if ( !root[idx] ) return false;
            root = root[idx];
        }
        return root.prefixCount > 0;
    }

    searchWord ( word ) {
        let root = this.root;
        for ( let i = 0; i < word.length; i++ ) {
            const idx = word.charCodeAt(i) - 97;
            if ( !root[idx] ) return false;
            root = root[idx];
        }
        return root.wordEndCount > 0;
    }

    #deleteCurrWord ( root, word, keyIdx ) {
        if ( !root ) {
            throw new Error("Word not found");
        }
        if ( keyIdx < word.length ) {
            // Reduce curr prefixCount if deleted
            const idx = word.charCodeAt(keyIdx) - 97;
            const nextNode = this.#deleteCurrWord(root[idx], word, keyIdx + 1);
            root[idx] = nextNode;
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
}


try {
    const trObj = new Trie();
    trObj.insert("and");
    trObj.insert("ant");
    console.log("tri contains prefix and", trObj.searchWord("and"));
    trObj.deleteWord("and");
    console.log("tri contains prefix and", trObj.searchWord("and"));
    trObj.insert("and");
    trObj.insert("an");
    trObj.deleteWord("ant");
    trObj.deleteWord("and");
    trObj.deleteWord("an");
    console.log("tri contains prefix and", trObj.searchWord("ant"));
    console.log("tri contains prefix and", trObj.searchWord("and"));
    console.log("tri contains prefix and", trObj.searchWord("an"));
    trObj.insert("and");
    console.log("tri contains prefix and", trObj.searchWord("and"));
} catch ( e ) {
    console.log("Error in Trie", e);
}

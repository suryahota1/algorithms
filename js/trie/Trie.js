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
                nextRoot = new TrieNode();
                root[idx] = nextRoot;
            }
            nextRoot.prefixCount++;
            root = nextRoot;
        }
        root.wordEndCount++;
    }

    searchPrefix ( key ) {
        let root = this.root;
        for ( let i = 0; i < key.length; i++ ) {
            const idx = word.charCodeAt(i) - 97;
            if ( !root[idx] ) return false;
            root = root[idx];
        }
        return root.prefixCount > 0;
    }

    searchWord ( word ) {
        let root = this.root;
        for ( let i = 0; i < key.length; i++ ) {
            const idx = word.charCodeAt(i) - 97;
            if ( !root[idx] ) return false;
            root = root[idx];
        }
        return root.wordEndCount > 0;
    }

    #deleteCurrWord ( root, word, keyIdx ) {
        if ( !root ) return false;
        if ( keyIdx < word.length ) {
            // Reduce curr prefixCount if deleted
            const status = this.#deleteCurrWord(root, word, keyIdx + 1);
            if ( status ) {
                root.prefixCount--;
                if ( root.wordEndCount === 0 && root.prefixCount === 0 ) {
                    // can delete current TrieNode completely;
                }
            }
            return status;
        }
        if ( root.wordEndCount === 0 ) return false;
        root.wordEndCount--;
        if ( root.wordEndCount === 0 && root.prefixCount === 0 ) {
            // can delete current TrieNode completely;
        }
        return true;
    }

    deleteWord ( word ) {
        return this.#deleteCurrWord(this.root, word, 0);
    }
}

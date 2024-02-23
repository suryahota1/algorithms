const DEFAULT_CHAR = "_";

class HuffmanNode {
    constructor ( char, freq, left=null, right=null ) {
        this.char = char;
        this.freq = freq;
        this.left = left;
        this.right = right;
    }
}

// Not an actual PriorityQueue, an array with sorting
class PriorityQueue {

    heap;

    constructor () {
        this.heap = [];
    }

    insert ( node ) {
        this.heap.push(node);
        this.heap.sort((a, b) => a.freq - b.freq);
    }

    remove () {
        return this.heap.shift();
    }

    size () {
        return this.heap.length;
    }
}

class HuffmanCoding {

    root;

    encode ( charArray, charFreq ) {
        const pq = new PriorityQueue();
        for ( let i = 0; i < charArray.length; i++ ) {
            const node = new HuffmanNode(charArray[i], charFreq[i]);
            pq.insert(node);
        }
        while ( pq.size() > 1 ) {
            const top1 = pq.remove();
            const top2 = pq.remove();

            const rootNode = new HuffmanNode(DEFAULT_CHAR, top1.freq + top2.freq, top1, top2);
            pq.insert(rootNode);
        }
        this.root = pq.remove();
    }

    decode ( root=this.root, str="" ) {
        if ( root.left === null && root.right === null ) return console.log(`${root.char}: ${str}`);
        this.decode(root.left, str + "0");
        this.decode(root.right, str + "1");
    }
}

const charArray = [ 'a', 'b', 'c', 'd', 'e', 'f' ];
const charFreq = [ 5, 9, 12, 13, 16, 45 ];

const hc = new HuffmanCoding();
hc.encode(charArray, charFreq);
hc.decode();

class DoubleNode {
    key;
    data;
    next;
    prev;
    
    constructor ( val, key ) {
        this.data = val;
        this.next = null;
        this.prev = null;
        this.key = key;
    }
}

module.exports = DoubleNode;
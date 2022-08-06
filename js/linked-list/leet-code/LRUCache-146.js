const DoubleLinkedList = require("./../DoubleLinkedList");

class LRUCache {
    size;
    cacheMap;
    itemCount;
    constructor ( capacity ) {
        if ( capacity <= 0 ) {
            throw new Error("Can't create cache with this size");
        }
        this.size = capacity;
        this.itemCount = 0;
        this.cacheMap = {};
        this.itemOrder = new DoubleLinkedList();
    }

    getItem ( key ) {
        const node = this.cacheMap[key];
        if ( node ) {
            // Update item order
            this.itemOrder.moveItemToStart(node);
            return node["data"];
        } else {
            return -1;
        }
    }

    putItem ( key, val ) {
        if ( this.cacheMap.hasOwnProperty(key) ) {
            const node = this.cacheMap[key];
            this.itemOrder.moveItemToStart(node);
            node.data = val;
        } else {
            console.log("this.itemCount", this.itemCount, this.size, key, val);
            if ( this.itemCount < this.size ) {
                this.itemCount += 1;
            } else {
                const key = this.itemOrder.evictItem();
                console.log("del key", key);
                delete this.cacheMap[key];
            }
            const node = this.itemOrder.insertNodeAtStart(val, key);
            console.log("node", node);
            this.cacheMap[key] = node;
        }
    }

    printItems () {
        this.itemOrder.printList();
    }
}

const lru = new LRUCache(2);
lru.putItem(2, 1);
lru.putItem(1, 1);
lru.putItem(2, 3);
lru.putItem(4, 1);
const l1 = lru.getItem(1);
const l2 = lru.getItem(2);
console.log(l1, l2);
lru.printItems();

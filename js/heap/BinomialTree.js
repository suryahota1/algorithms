/* 
    1. A binaomial heap is based on a binomial tree data structure.
    2. A binomial tree of order k consists of two binomial trees of order k - 1 and this holds 
    recursively true for its child components.
    3. While forming a binomial tree of order k, we have to recursively break it into two 
    binomial trees of order k - 1 and make one as left most child of the other one.
    4. There are exactly 2 ^ k nodes for a binomial tree of order k.
    5. The height of tree is k.
    6. There are exactly k C i nodes at height i of a k order binomial tree.
    7. For any binomial tree Bk, its children are trees of order k-1, k-2, k-3, ..., 1, 0 
    from left to right.
*/

class Node {
    
    data;
    children;

    constructor ( data ) {
        this.data = data;
        this.children = [];
    }
}

class BinomialTree1 {

    root;
    order;

    constructor ( order ) {
        this.root = null;
        this.order = order;
    }

    async #createTree ( k ) {
        if ( k === 0 ) return new Node(Math.ceil(Math.random() * 100));
        const root1 = await this.#createTree(k - 1);
        const root2 = await this.#createTree(k - 1);
        root1.children.unshift(root2);
        return root1;
    }

    async constructTree () {
        return this.root = await this.#createTree(this.order);
    }
}


const bt = new BinomialTree1(4);
bt.constructTree().then(( root ) => {
    console.log(root.data);
});
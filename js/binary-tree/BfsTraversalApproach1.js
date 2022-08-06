class Node {
    constructor ( value ) {
        this.key = value;
        this.left = null;
        this.right = null;
    }
}

class TreeTraversal {
    constructor ( item ) {
        this.root = ( item !== null || item !== undefined ) ? new Node(item) : null;
        this.queue = [];
    }

    createTree () {
        this.root.left = new Node("2");
        this.root.right = new Node("9");
        this.root.left.left = new Node("10");
        this.root.left.right = new Node("7");
        this.root.right.left = new Node("8");
        this.root.right.right = new Node("4");
    }

    doBfsTraversal () {
        if ( this.root === null ) {
            return;
        }

        this.queue.push(this.root);

        while ( this.queue.length ) {
            const temp = this.queue[0];
            this.queue.shift();
            console.log(temp.key);

            if ( temp.left !== null ) {
                this.queue.push(temp.left);
            }

            if ( temp.right !== null ) {
                this.queue.push(temp.right);
            }
        }
    }
}

const treeObj = new TreeTraversal(1);
treeObj.createTree();
treeObj.doBfsTraversal();
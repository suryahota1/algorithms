const { BinaryTree } = require("../BinaryTreeIntro");

class InOrderTraversalIterative extends BinaryTree {

    res;
    popped;
    done;
    stack;

    constructor () {
        super();
        this.res = [];
        this.popped = null;
        this.done = false;
        this.stack = [];
    }

    updateStack () {
        this.popped = this.stack.pop();
        this.res.push(this.popped.key);
        if ( this.popped.right !== null ) {
            this.done = false;
            this.stack.push(this.popped.right);
        } else {
            this.done = true;
        }
    }

    inOrder ( root ) {
        if ( root !== null ) {
            this.stack.push(root);
            let c = 0;
            while ( this.stack.length > 0 ) {
                const peeked = this.stack[this.stack.length - 1];
                c++;
                console.log(c);
                if ( !this.done ) {
                    if ( peeked.left !== null ) {
                        this.stack.push(peeked.left);
                    } else {
                        this.updateStack();
                    }
                } else {
                    this.updateStack();
                }
            }
        }
        console.log(this.res);
        return this.res;
    }
}

const iu = new InOrderTraversalIterative();
iu.createTree();
iu.inOrder(iu.root);

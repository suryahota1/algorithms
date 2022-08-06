const { BinaryTree } = require("../BinaryTreeIntro");

class LeafSimilarTrees extends BinaryTree {
    constructor () {
        super();
    }

    getNextLeafNode ( stack ) {
        const popped = stack.pop();
        if ( popped.left === null && popped.right === null ) return popped.key;
        if ( popped.left !== null ) stack.push(popped.left);
        if ( popped.right !== null ) stack.push(popped.right);
    }

    getIsLeafSimilar ( root1, root2 ) {
        const stack1 = [ root1 ];
        const stack2 = [ root2 ];
        while ( stack1.length > 0 && stack2.length > 0 ) 
            if ( this.getNextLeafNode(stack1) !== this.getNextLeafNode(stack2) ) return false;
        if ( stack1.length !== stack2.length ) return false;
        return true;
    }
}

const ry = new LeafSimilarTrees();
ry.createTree();
const ans = ry.getIsLeafSimilar();
console.log(ans);

const { BinaryTree } = require("../BinaryTreeIntro");

class SearchInBST extends BinaryTree {
    constructor () {
        super();
    }

    find ( root, val ) {
        if ( root === null ) {
            return null;
        } else if ( root.key === val ) {
            return root;
        }
        return this.find(val < root.key ? root.left : root.right, val);
    }
}

const yp = new SearchInBST();
yp.createTree();
const v = yp.find(yp.root, 18);
console.log(v);

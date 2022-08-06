const { BinaryTree } = require("../BinaryTreeIntro");

class UnivaluedBinaryTree extends BinaryTree {

    constructor () {
        super();
    }

    checkRec ( root, key ) {
        if ( root === null ) return true;
        if ( key && root.key !== key ) {
            return false;
        } else if ( key === undefined ) {
            key = root.key;
        }
        return this.checkRec(root.left, key) ? this.checkRec(root.right, key) ? true : false : false;
    }

    getIsUnivalued ( root ) {
        console.log(this.checkRec(this.root));
    }
}

const rt = new UnivaluedBinaryTree ();
rt.createTree();
rt.getIsUnivalued();
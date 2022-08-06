const { BinaryTree } = require("../BinaryTreeIntro");

class TwoSumBSTInput extends BinaryTree {
    refMap;
    constructor () {
        super();
        this.refMap = {};
    }

    findTarget ( root, k ) {
        if ( root.key > k ) return false;
        if ( this.refMap.hasOwnProperty(root.key) ) {
            return true;
        }
        this.refMap[root.key] = 0;
        if ( root.key > (k / 2) ) {
            const val = this.findTarget(root.left, k);
            if ( val ) return true;
            return this.findTarget(root.right, k);
        } else {
            const val = this.findTarget(root.right, k);
            if ( val ) return true;
            return this.findTarget(root.left, k);
        }
    }
}
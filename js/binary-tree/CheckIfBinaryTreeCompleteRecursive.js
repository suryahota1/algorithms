const { BinaryTree } = require("./BinaryTreeIntro");

class CheckIfBinaryTreeCompleteRecursive extends BinaryTree {

    totalCount;
    actualCount;

    constructor () {
        this.actualCount = 0;
        this.totalCount = 0;
    }

    checkIfComplete ( root ) {
        this.totalCount += 1;
        if ( root === null ) {
            return true;
        }
        this.actualCount += 1;
        if ( this.totalCount > this.actualCount ) {
            return false;
        }
        const isC = this.checkIfComplete(root.left);
        if ( !isC ) {
            return false;
        }
        return this.checkIfComplete(root.right);
    }
}

const aq = new CheckIfBinaryTreeCompleteRecursive();
aq.createTree();
const isC = aq.checkIfComplete(aq.root);
console.log(isC);

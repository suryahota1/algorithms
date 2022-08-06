const { BinaryTree } = require("../BinaryTreeIntro");

class SumRootToLeafBinaryNums extends BinaryTree {
    constructor () {
        super();
    }

    getSum ( root, sum ) {
        console.log("key ----", root);
        sum = 2 * sum + root.key;
        console.log("sum ****", sum);
        if ( root.left === null && root.right === null ) {
            return sum;
        }
        let leftSum = 0;
        console.log("here");
        if ( root.left !== null ) {
            leftSum = this.getSum(root.left, sum);
        }
        let rightSum = 0;
        if ( root.right !== null ) {
            rightSum = this.getSum(root.right, sum);
        }
        return leftSum + rightSum;
    }

    sumRootToLeaf () {
        if ( this.root === null ) {
            return 0;
        }
        return this.getSum(this.root, 0);
    }
}

const yp = new SumRootToLeafBinaryNums();
yp.createTree();
const sum = yp.sumRootToLeaf();
console.log(sum);

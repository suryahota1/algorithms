const { BinaryTree } = require("../BinaryTreeIntro");

class RangeSumBst extends BinaryTree {

    sum;
    gHigh;
    gLow;

    constructor () {
        super();
        this.sum = 0;
    }

    getSum ( root, low, high ) {
        if ( root === null ) {
            return;
        }
        console.log("getSum ", root.key);
        if ( low && high ) {
            console.log("here 1");
            if ( root.key === low ) {
                // console.log("to add ", low);
                this.sum += low;
                this.getSum(root.right, null, high);
            } else if ( root.key === high ) {
                // console.log("to add ", high);
                this.sum += high;
                this.getSum(root.left, low, null);
            } else {
                if ( root.key > this.gLow && root.key < this.gHigh ) {
                    // console.log("to add ", high);
                    this.sum += root.key;
                }
                if ( low < root.key && high < root.key ) {
                    this.getSum(root.left, low, high);
                } else if ( low > root.key && high > root.key ) {
                    this.getSum(root.right, low, high);
                } else if ( low < root.key && high > root.key ) {
                    this.getSum(root.left, low, null);
                    this.getSum(root.right, null, high);
                }
            }
        } else if ( low ) {
            console.log("here 2");
            if ( root.key === low ) {
                this.sum += low;
                // return;
                this.getSum(root.right, this.gLow, this.gHigh);
            } else {
                console.log("added root.key", root.key);
                console.log("added this.gLow", this.gLow);
                console.log("added this.gHigh", this.gHigh);

                if ( root.key > this.gLow && root.key < this.gHigh ) {
                    this.sum += root.key;
                }
                this.getSum(low > root.key ? root.right : root.left, low, null);
            }
        } else if ( high ) {
            console.log("here 3");
            if ( root.key === high ) {
                this.sum += high;
                this.getSum(root.left, this.gLow, this.gHigh);
                // return;
            } else {
                if ( root.key > this.gLow && root.key < this.gHigh ) {
                    this.sum += root.key;
                }
                this.getSum(high > root.key ? root.right : root.left, null, high);
            }
        }
    }
}

const ti = new RangeSumBst();
ti.createTree();
ti.gLow = 6;
ti.gHigh = 10;
ti.getSum(ti.root, 6, 10);
console.log(ti.sum);

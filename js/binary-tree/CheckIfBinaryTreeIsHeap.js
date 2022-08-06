const { BinaryTree } = require("./BinaryTreeIntro");

class CheckIfBinaryTreeIsHeap extends BinaryTree {

    checkIfComplete ( root ) {
        if ( root === null || ( root.left === null && root.right === null ) ) {
            return true;
        }
        const queue = [];
        queue.push(root);
        let breakFlag = false;

        while ( queue.length !== 0 ) {
            const curr = queue.shift();
            console.log(curr.key);
            if ( breakFlag && ( curr.left !== null || curr.right !== null ) ) {
                return false;
            } else if ( curr.left === null || curr.right === null ) {
                if ( curr.right !== null ) {
                    return false;
                }
                breakFlag = true;
            }
            if ( curr.left !== null ) {
                queue.push(curr.left);
            }
            if ( curr.right !== null ) {
                queue.push(curr.right);
            }
        }
        return true;
    }

    isHeap ( root ) {
        if ( root.left === null && root.right === null ) {
            return true;
        }
        if ( root.right === null ) {
            return root.key >= root.left.key;
        } else {
            if ( root.key >= root.left.key && root.key >= root.right.key ) {
                return this.isHeap(root.left) && this.isHeap(root.left);
            } else {
                return false;
            }
        }
    }

    checkIfHeap () {
        if ( this.checkIfComplete(this.root) && this.isHeap(this.root) ) {
            return true;
        }
        return false;
    }
}

const qw = new CheckIfBinaryTreeIsHeap();
qw.createTree();
const isH = qw.checkIfHeap();
console.log(isH);

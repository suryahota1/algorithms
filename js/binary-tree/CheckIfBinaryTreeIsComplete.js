const { BinaryTree } = require("./BinaryTreeIntro");

class CheckIfBinaryTreeIsComplete extends BinaryTree {

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
}

const yo = new CheckIfBinaryTreeIsComplete();
yo.createTree();
const isC = yo.checkIfComplete(yo.root);
console.log(isC);

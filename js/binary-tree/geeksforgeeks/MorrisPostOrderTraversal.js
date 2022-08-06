const { BinaryTree } = require("../BinaryTreeIntro");

class MorrisPostOrderTraversal extends BinaryTree {
    constructor () {
        super();
    }

    postOrder ( root ) {
        let curr = root;
        let res = [];
        while ( curr !== null ) {
            if ( curr.right === null ) {
                res.push(curr.key);
                curr = curr.left;
            } else {
                let predsc = curr.right;
                while ( predsc.left !== null && predsc.left !== curr ) {
                    predsc = predsc.left;
                }
                if ( predsc.left === null ) {
                    res.push(curr.key);
                    predsc.left = curr;
                    curr = curr.right;
                } else {
                    predsc.left == null;
                    curr = curr.left;
                }
            }
        }
        res.reverse();
        console.log(res);
    }
}

const iu = new MorrisPostOrderTraversal();
iu.createTree();
iu.postOrder(iu.root);

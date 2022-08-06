const { BinaryTree } = require("../BinaryTreeIntro");

class IncreasingOrderSearchTree extends BinaryTree {
    constructor () {
        super();
    }

    order ( root ) {
        const ref = {
            start: null,
            end: null
        };
        if ( root === null ) {
            return ref;
        }
        console.log("root ----", root.key);
        const leftRef = this.order(root.left);
        // console.log("leftRef ----", leftRef);
        root.left = null;
        if ( leftRef.start === null ) {
            ref.start = root;
            ref.end = root;
        } else {
            ref.start = leftRef.start;
            ref.end = leftRef.end;
            ref.end.right = root;
            ref.end = root;
        }
        const rightRef = this.order(root.right);
        if ( rightRef.start !== null ) {
            ref.end.right = rightRef.start;
            ref.end = rightRef.end;
        }
        // console.log("ref start ----", ref.start.key);
        // console.log("ref end ----", ref.end.key);
        return ref;
    }

    increasingBST ( root ) {
        const rootRef = this.order(root);
        console.log("increasingBST rootRef", rootRef);
        this.print(rootRef.start);
    }

    print ( root ) {
        while ( root !== null ) {
            console.log(root.key);
            if ( root.left ) {
                console.log("has left", root.left.key);
            }
            root = root.right;
        }
    }
}

const ry = new IncreasingOrderSearchTree();
ry.createTree();
const root = ry.increasingBST(ry.root);

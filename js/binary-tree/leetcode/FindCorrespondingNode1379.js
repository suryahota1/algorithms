const { BinaryTree } = require("../BinaryTreeIntro");

class FindCorrespondingNode extends BinaryTree {
    constructor () {
        super();
    }

    getPathToNodeInOriginalTree ( node, refNode ) {
        if ( node == null ) {
            return null;
        }
        if ( refNode !== null && node === refNode ) {
            return [];
        }
        const leftArr = this.getPathToNodeInOriginalTree(node.left, refNode);
        if ( leftArr !== null ) {
            leftArr.unshift("l");
            return leftArr;
        }
        const rightArr = this.getPathToNodeInOriginalTree(node.right, refNode);
        if ( rightArr !== null ) {
            rightArr.unshift("r");
            return rightArr;
        }
        return null;
    }

    getClonedNode ( cloned, path ) {
        if ( path.length === 0 ) {
            return cloned;
        }
        for ( let i = 0; i < path.length; i++ ) {
            if ( path[i] === "l" ) {
                cloned = cloned.left;
            } else {
                cloned = cloned.right;
            }
        }
        return cloned;
    }

    getNode ( original, cloned, targetNode ) {
        console.log("getNode original", original.key);
        // console.log("getNode targetNode", targetNode.key);
        const path = this.getPathToNodeInOriginalTree(original, targetNode);
        console.log("path", path);
        if ( path !== null ) {
            const rf = this.getClonedNode(cloned, path);
            console.log(rf); 
        }
    }
}

const yt = new FindCorrespondingNode();
yt.createTree();
yt.getNode(yt.root, yt.root, yt.root.left.right.left);

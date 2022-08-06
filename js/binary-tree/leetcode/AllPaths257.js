const { BinaryTree } = require("../BinaryTreeIntro");

class AllPaths extends BinaryTree {
    constructor () {
        super();
    }

    getAllPaths ( root ) {
        if ( root === null ) {
            return [];
        }
        const lPath = this.getAllPaths(root.left);
        const rPath = this.getAllPaths(root.right);
        if ( lPath.length === 0 && rPath.length === 0 ) return ["" + root.key];

        if ( lPath.length > 0 )
            for ( let i = 0; i < lPath.length; i++ )
                lPath[i] = root.key + lPath[i];
        if ( rPath.length > 0 )
            for ( let i = 0; i < rPath.length; i++ )
                rPath[i] = root.key + rPath[i];
        return lPath.concat(rPath);
    }
}

const aq = new AllPaths();
aq.createTree();
const ry = aq.getAllPaths(aq.root);
console.log(ry);
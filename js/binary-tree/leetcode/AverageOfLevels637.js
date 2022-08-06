const { BinaryTree } = require("../BinaryTreeIntro");

class AverageOfLevels extends BinaryTree {
    constructor () {
        super();
    }

    getAvg ( root ) {
        const queue = [ root ];
        const resp = [];
        let sum = 0;
        let count = 0;
        let ref = root;

        while ( queue.length > 0 ) {
            const polled = queue.shift();
            sum += polled.key;
            count++;
            if ( polled.left !== null ) queue.push(polled.left);
            if ( polled.right !== null ) queue.push(polled.right);
            if ( polled === ref ) {
                resp.push(sum / count);
                count = 0;
                sum = 0;
                ref = queue[queue.length - 1];
            }
        }
        console.log(resp);
        return resp;
    }
}

const nb = new AverageOfLevels();
nb.createTree();
nb.getAvg(nb.root);
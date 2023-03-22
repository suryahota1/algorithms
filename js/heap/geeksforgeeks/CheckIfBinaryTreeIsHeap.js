function CheckIfBinaryTreeIsHeap () {
    this.root = null;
}

CheckIfBinaryTreeIsHeap.prototype.checkIfTreeIsCompleteRecursiveApproach1 = function ( root, index, totalNodes ) {
    // For array like representation
    if ( root === null ) return true;
    if ( index >= totalNodes ) return false;
    return checkIfTreeIsCompleteRecursiveApproach1(root.left, 2 * index + 1, totalNodes) && checkIfTreeIsCompleteRecursiveApproach1(root.right, 2 * index + 2, totalNodes);
}

CheckIfBinaryTreeIsHeap.prototype.checkIfTreeIsCompleteIterativeApproach1 = function ( root ) {
    const queue = [];
    if ( root === null ) return true;
    queue.push(root);
    let flag = false;

    while ( queue.length > 0 ) {
        const node = queue.shift();
        if ( node.left !== null ) {
            if ( flag === true ) return false;
            queue.push(node.left);
        } else {
            flag = true;
        }

        if ( node.right !== null ) {
            if ( flag === true ) return false;
            queue.push(node.right);
        } else {
            flag = true;
        }
    }
    return true;
}

CheckIfBinaryTreeIsHeap.prototype.checkIfTreeIsComplete = function () {

}

export default CheckIfBinaryTreeIsHeap;

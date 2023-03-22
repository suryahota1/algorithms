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
    return this.checkIfTreeIsCompleteIterativeApproach1(this.root);
}

CheckIfBinaryTreeIsHeap.prototype.isMaxHeapUtil = function ( root ) {
    if ( root.right === null && root.left === null ) return true;
    if ( root.right === null ) return root.data >= root.left.data;
    if ( root.data >= root.left.data && root.data >= root.right.data ) return this.isMaxHeapUtil(root.left) && this.isMaxHeapUtil(root.right);
    return false;
}

CheckIfBinaryTreeIsHeap.prototype.isHeap = function () {
    if ( this.root === null ) return true;
    const isComplete = this.checkIfTreeIsComplete();
    if ( !isComplete ) return false;
    return this.isMaxHeapUtil(this.root);
}

export default CheckIfBinaryTreeIsHeap;

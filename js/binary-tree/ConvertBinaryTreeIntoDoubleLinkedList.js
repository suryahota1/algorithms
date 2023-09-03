function convertBTIntoDLL ( root ) {
    if ( root === null ) return null;
    const left = convertBTIntoDLL(root.left);
    const right = convertBTIntoDLL(root.right);

    root.left = left;
    if ( left !== null ) left.right = root;

    root.right = right;
    if ( right !== null ) right.left = root;

    return right === null ? root : right;
}

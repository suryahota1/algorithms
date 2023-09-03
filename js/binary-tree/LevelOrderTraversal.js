function levelOrder ( root ) {
    if ( root === null ) return;
    let currCount = 1, nextCount = 0;
    const queue = [root];
    const resp = [];

    while ( queue.length ) {
        const node = queue.shift();
        currCount--;
        if ( node.left ) {
            queue.push(node.left);
            nextCount++;
        }
        if ( node.right ) {
            queue.push(node.right);
            nextCount++;
        }
        resp.push(node.data);
        if ( currCount === 0 ) {
            currCount = nextCount;
            console.log(resp.join(", "));
        }
    }
}

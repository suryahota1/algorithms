class Bfs {

    traverse ( numOfNodes, adjList ) {
        const queue = [];
        const visited = new Array(numOfNodes + 1).fill(false);
        const startNode = 1;
        visited[startNode] = true;
        queue.push(startNode);

        while ( queue.length > 0 ) {
            const item = queue.shift();
            console.log(item);
            adjList[item].forEach(element => {
                if ( !visited[element] ) queue.push(element);
            });
        }
    }
}

/* 
    Space complexity: 
        queue of size n: O(n)
        visited array of size n: O(n)
        So O(n) + O(n) = O(n)
    Time complexity:
        Trverses each node once and all its adjacent edges
        So O(n) + O(e)
*/
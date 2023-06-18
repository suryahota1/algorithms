class Dfs {

    #recTrversal ( node, adjList, visited ) {
        visited[node] = true;
        console.log(node);
        adjList[node].forEach(element => {
            if ( !visited[element] ) this.#recTrversal(element, adjList, visited);
        });
    }

    traverse ( numOfNode, adjList ) {
        const visited = new Array(numOfNode + 1).fill(false);
        const startNode = 1;
        this.#recTrversal(startNode, adjList, visited);
    }
}

/* 
    Space complexity: 
        visited array of size n, recursion stack size n(worst case)
        O(N) + O(N) = O(N)
    Time complexity:
        Traverses each node once and each edge once
        I undirected graph we can consider each edge as two directed edges
        O(N) + O(E)
*/
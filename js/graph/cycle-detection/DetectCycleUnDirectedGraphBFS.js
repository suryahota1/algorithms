class DetectCycleUnDirectedGraph {

    #bfs ( adjList, visited, src ) {
        const queue = [];
        queue.push([src, -1]);
        visited[src] = true;

        while ( queue.length > 0 ) {
            const [currNode, parentNode] = queue.shift();
            for ( let i = 0; i < adjList[currNode].length; i++ ) {
                const node = adjList[currNode][i];
                if ( !visited[node] ) {
                    queue.push([node, currNode]);
                    visited[node] = true;
                } else if ( node !== parentNode ) return true;
            }
        }
        return false;
    }

    detect ( numOfVertices, adjList ) {

        const visited = new Array(numOfVertices).fill(false);
        for ( let i = 0; i < numOfVertices; i++ ) {
            if ( !visited[i] ) {
                if ( this.#bfs(adjList, visited, i) ) return true;
            }
        }
        return false;
    }
}

const obj4 = new DetectCycleUnDirectedGraph();
const ip1 = [[1], [0, 2, 4], [1, 3], [2, 4], [1, 3]];
const ip2 = [[], [2], [3, 1], [2]];
console.log(obj4.detect(4, ip2));

// Using BFS

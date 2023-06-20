class DetectCycleUnDirectedGraphDFS {

    #dfs ( adjList, visited, src ) {
        for ( let i = 0; i < adjList[src].length; i++ ) {
            const adjNode = adjList[src][i];
            if ( !visited[adjNode] ) {
                visited[adjNode] = src;
                if ( this.#dfs(adjList, visited, adjNode) ) return true;
            } else if ( visited[src] !== adjNode ) return true;
        }
        return false;
    }


    detect ( numOfVertices, adjList ) {

        const visited = new Array(numOfVertices).fill(false);
        for ( let i = 0; i < numOfVertices; i++ ) {
            if ( !visited[i] ) {
                visited[i] = -1;
                if ( this.#dfs(adjList, visited, i) ) return true;
            }
        }
        return false;
    }
}

const obj5 = new DetectCycleUnDirectedGraphDFS();
const ip1 = [[1], [0, 2, 4], [1, 3], [2, 4], [1, 3]];
const ip2 = [[], [2], [3, 1], [2]];
console.log(obj5.detect(4, ip2));

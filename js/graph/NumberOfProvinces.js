const Dfs = require("./traversal/dfs");

class NumberOfProvinces {

    count( numOfVertices, adjList ) {
        let numOfProvinces = 0;
        const visited = new Array(numOfVertices + 1).fill(false);
        const dfsRef = new Dfs();
        for ( let i = 1; i <= numOfVertices; i++ ) {
            if ( !visited[i] ) {
                numOfProvinces++;
                dfsRef.recTrversal(i, adjList, visited);
            }
        }
        return numOfProvinces;
    }
}

module.exports = NumberOfProvinces;

/*
    Space complexity:
        Visited array of size n.
        DFS recursion stack, can be at max n
        So O(N) + O(N) = O(N)
    Time complexity:
        O(N) + O(2 * E)
*/

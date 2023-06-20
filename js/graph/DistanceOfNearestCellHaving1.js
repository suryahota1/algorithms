// Using DFS
class DistanceOfNearestCellHaving1 {

    #prepareVisited ( grid ) {
        const visited = new Array(grid.length);
        for ( let i = 0; i < grid.length; i++ ) {
            visited[i] = new Array(grid[0].length);
            for ( let j = 0; j < grid[0].length; j++ ) {
                if ( grid[i][j] === 1 ) visited[i][j] = 0;
                else visited[i][j] = -1;
            }
        }
        return visited;
    }

    dfs ( i, j, l, n, visited, grid ) {
        if ( visited[i][j] !== -1 ) return visited[i][j];
        // console.log("dfs", i, j, visited[i][j]);
        const neighbours = [
            [i - 1, j - 1], [i - 1, j], [i - 1, j + 1],
            [i, j - 1], [i, j + 1], 
            [i + 1, j - 1], [i + 1, j], [i + 1, j+ 1]
        ];
        let minDist = Number.MAX_SAFE_INTEGER;
        visited[i][j] = Number.MAX_SAFE_INTEGER;

        for ( let m = 0; m < neighbours.length; m++ ) {
            const [p, q] = neighbours[m];
            if ( p >= 0 && p < l && q >= 0 && q < n ) {
                // console.log("pq", p, q);
                if ( visited[p][q] !== Number.MAX_SAFE_INTEGER ) {
                    const currDist = this.dfs(p, q, l, n, visited, grid) + Math.abs(p - i) + Math.abs(q - j);
                    minDist = Math.min(minDist, currDist);
                }
            }
        }
        // console.log("minDist = ", i, j, minDist);
        visited[i][j] = minDist;
        return minDist;
    }

    find ( grid ) {
        const visited = this.#prepareVisited(grid);
        console.log(grid);
        // console.log(visited);
        const m = grid.length;
        const n = grid[0].length;
        for ( let i = 0; i < m; i++ ) {
            for ( let j = 0; j < n; j++ ) {
                if ( visited[i][j] === -1 ) {
                    this.dfs(i, j, m, n, visited, grid);
                }
            }
        }
        return visited;
    }
}

const obj6 = new DistanceOfNearestCellHaving1();
const ip1 = [[0,1,1,0],[1,1,0,0],[0,0,1,1]];
const ip2 = [[1,0,1],[1,1,0],[1,0,0]];
console.log(obj6.find(ip2));

// Try using BFS

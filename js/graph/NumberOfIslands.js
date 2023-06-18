/* 
    1. This is a problem of finding number of connected components
    2. A grid of 0's and 1's are given of n * m size
    3. A island is one which is a piece of land surrounded by water.
*/
class NumberOfIslands {

    #dfs ( i, j, grid, visited ) {
        visited[i][j] = true;
        const neighbours = [
            [i - 1, j - 1], [i - 1, j], [i - 1, j + 1],
            [i, j - 1], [i, j + 1], 
            [i + 1, j - 1], [i + 1, j], [i + 1, j+ 1]
        ];
        neighbours.forEach(([r, c]) => {
            if ( r >= 0 && r < grid.length && c >= 0 && c < grid[0].length && grid[r][c] === 1 && !visited[r][c] ) {
                this.#dfs(r, c, grid, visited);
            }
        });
    }

    count ( grid ) {
        const visited = new Array(grid.length);
        for ( let i = 0; i < grid.length; i++ ) {
            visited[i] = new Array(grid[i].length).fill(false);
        }
        let count = 0;
        for ( let i = 0; i < grid.length; i++ ) {
            for ( let j = 0; j < grid[i].length; i++ ) {
                if ( grid[i][j] === 1 && !visited[i][j] ) {
                    count++;
                    this.#dfs(i, j, grid, visited);
                }
            }
        }
    }
}

/* 
    Space complexity: O(N * M) + O(N * M)
    Time complexity: O(N^2)
*/
class RottenOranges {

    #fillInRottenIndexes ( grid, queue, visited ) {
        for ( let i = 0; i < grid.length; i++ ) {
            for ( let j = 0; j < grid[0].length; j++ ) {
                if (grid[i][j] === 2 ) {
                    queue.push([i, j, 0]);
                    visited[i][j] = true;
                }
            }
        }
    }

    #prepareVisitedMatrix ( grid ) {
        const visited = new Array(grid.length);
        for ( let i = 0; i < grid.length; i++ ) {
            visited[i] = new Array(grid[0].length);
            for ( let j = 0; j < grid[0].length; j++ ) {
                visited[i][j] = false;
            }
        }
        return visited;
    }

    #bfs ( grid, visited, queue ) {
        let minTime = 0;
        while ( queue.length > 0 ) {
            const [i, j, t] = queue.shift();
            console.log(i, j, t);
            minTime = t;
            const neighbours = [[i - 1, j], [i, j + 1], [i + 1, j], [i, j - 1]];
            neighbours.forEach(([ p, q ]) => {
                if ( p >= 0 && p < grid.length && q >= 0 && q < grid[0].length && !visited[p][q] && grid[p][q] !== 0 && grid[p][q] !== 2 ) {
                    visited[p][q] = true;
                    queue.push([p, q, t + 1]);
                }
            });
        }
        return minTime;
    }

    #checkOranges ( grid, visited, minTime ) {
        console.log("visited", visited);
        for ( let i = 0; i < grid.length; i++ ) {
            for ( let j = 0; j < grid[0].length; j++ ) {
                if ( !visited[i][j] && grid[i][j] === 1 ) return -1;
            }
        }
        return minTime;
    }

    findMinTime ( grid ) {
        const queue = [];
        const visited = this.#prepareVisitedMatrix(grid);
        this.#fillInRottenIndexes(grid, queue, visited);
        console.log(queue);
        const minTime = this.#bfs(grid, visited, queue);
        
        return this.#checkOranges(grid, visited, minTime);
    }
}

// Using BFS

const obj3 = new RottenOranges();
const grid = [[2,2,0,1]];
console.log(obj3.findMinTime(grid));
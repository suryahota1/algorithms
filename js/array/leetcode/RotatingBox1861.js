class RotatingBox {

    displaceStones ( grid ) {
        for ( let i = 0; i < grid.length; i++ ) {
            let queue = [];
            for ( let j = grid[0].length - 1; j >= 0; j-- ) {
                if ( grid[i][j] === "." ) {
                    queue.push(j);
                } else if ( grid[i][j] === "#" && queue.length > 0 ) {
                    grid[i][queue.shift()] = "#";
                    grid[i][j] = ".";
                    queue.push(j);
                } else if ( grid[i][j] === "*" ) {
                    queue = [];
                }
            }
        }
    }

    rotateMatrixBy90 ( grid ) {
        this.displaceStones(grid);
        console.log(grid);
        const m = grid.length;
        const resp = new Array(grid[0].length);
        for ( let i = 0; i < grid[0].length; i++ ) {
            resp[i] = new Array(grid.length);
            for ( let j = 0; j < grid.length; j++ ) {
                resp[i][j] = grid[m - 1 - j][i];
            }
        }
        return resp;
    }
}

const obj7 = new RotatingBox();
const ip1 = [["#","#","*",".","*","."],
["#","#","#","*",".","."],
["#","#","#",".","#","."]];
// obj7.displaceStones(ip1);
// console.log(ip1);
console.log("ip1", obj7.rotateMatrixBy90(ip1));

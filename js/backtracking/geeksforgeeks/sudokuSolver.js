
function isSafe ( grid, r, c, num ) {
    // console.log("isSafe r, c, num", r, c, num);
    for ( let i = 0; i < 9; i++ ) {
        if ( grid[r][i] === num ) return false;
        if ( grid[i][c] === num ) return false;
        const rowInc = Math.floor(i / 3);
        const colInc = i % 3;
        const rowNum = (3 * Math.floor(r / 3)) + rowInc;
        const colNum = (3 * Math.floor(c / 3)) + colInc;
        if ( grid[rowNum][colNum] === num ) return false;
    }
    return true;
}

function solveSudoku ( grid) {
    for ( let i = 0; i < 9; i++ ) {
        for ( let j = 0; j < 9; j++ ) {
            if ( grid[i][j] === 0 ) {
                for ( let k = 1; k <= 9; k++ ) {
                    if ( isSafe(grid, i, j, k) ) {
                        console.log("solveSudoku r, c", i, j, k);
                        grid[i][j] = k;
                        if ( solveSudoku(grid) ) return true;
                        else grid[i][j] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

const board = [ 
    [ 3, 0, 6, 5, 0, 8, 4, 0, 0 ],
    [ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
    [ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
    [ 9, 0, 0, 8, 6, 3, 0, 0, 5 ],
    [ 0, 5, 0, 0, 9, 0, 6, 0, 0 ],
    [ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
    [ 0, 0, 5, 2, 0, 6, 3, 0, 0 ] 
];

solveSudoku(board);
console.log(board);
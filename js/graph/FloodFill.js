class FloodFill {

    #dfs ( i, j, image, newColor, currColor ) {
        const neighbours = [[i - 1, j], [i, j + 1], [i + 1, j], [i, j - 1]];
        image[i][j] = newColor;
        neighbours.forEach(([r, c]) => {
            if ( r >= 0 && r < image.length && c >= 0 && c < image[0].length && image[r][c] === currColor ) {
                this.#dfs(r, c, image, newColor, currColor);
            }
        });
    }

    fill ( image, sr, sc, newColor ) {
        const currColor = image[sr][sc];
        this.#dfs(sr, sc, image, newColor, currColor);
    }

    printGraph ( image ) {
        image.forEach((row, rowIdx) => {
            let rowOutput = "";
            row.forEach((col, colIdx) => {
                if ( colIdx !== 0 ) {
                    rowOutput += " ";
                }
                rowOutput += image[rowIdx][colIdx];
            });
            console.log(rowOutput);
        })
    }
}

const ff = new FloodFill();
const imageVal = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];
ff.fill(imageVal, 1, 1, 2);
ff.printGraph(imageVal);

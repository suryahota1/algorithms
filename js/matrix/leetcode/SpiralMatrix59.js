class SpiralMatrix {

    traverse ( matrix ) {
        const m = matrix.length;
        const n = matrix[0].length;
        let maxCol = n - 1, minCol = 0, maxRow = m - 1, minRow = 1;
        let i = 0, j = 0, r = 0, c = 1;
        let ref = 0;
        let dir = "right";
        while ( true ) {
            console.log("params", i, j, r, c);
            console.log(matrix[i][j]);

            if ( dir === "right" && j === maxCol ) {
                console.log("here1");
                dir = "down";
                maxCol--;
                c = 0;
                r = 1;
            } else if ( dir === "down" && i === maxRow ) {
                console.log("here2");
                dir = "left";
                maxRow--;
                c = -1;
                r = 0;
            } else if ( dir === "left" && j == minCol ) {
                console.log("here3");
                dir = "up";
                minCol++;
                c = 0;
                r = -1;
            } else if ( dir === "up" && i === minRow ) {
                console.log("here4");
                dir = "right";
                minRow++;
                r = 0;
                c = 1;
            }
            i += r;
            j += c;
            if ( ++ref === 25 ) break;
        }
    }
}

const obj8 = new SpiralMatrix();
const ip1 = [
    [1, 2, 3, 4, 5], 
    [16, 17, 18, 19, 6],
    [15, 24, 25, 20, 7],
    [14, 23, 22, 21, 8],
    [13, 12, 11, 10, 9]
];
obj8.traverse(ip1);

class AdjacencyMatrix {
    
    matrix;

    constructor ( numOfNodes=0, numOfEdges=0, connections=[] ) {
        this.matrix = new Array(numOfNodes); // Considering 0 based numbering of nodes
        for ( let i = 0; i <= numOfNodes; i++ ) {
            this.matrix[i] = new Array(numOfNodes + 1).fill(0);
        }
        for ( let i = 0; i < connections.length; i++ ) {
            const [ u, v ] = connections[i];
            this.matrix[u][v] = 1;
            this.matrix[v][u] = 1; // Only for undirected graphs
        }
    }

    printGraph () {
        this.matrix.forEach((row, rowIdx) => {
            let rowOutput = "";
            row.forEach((col, colIdx) => {
                if ( colIdx !== 0 ) {
                    rowOutput += " ";
                }
                rowOutput += this.matrix[rowIdx][colIdx];
            });
            console.log(rowOutput);
        })
    }
}

const inst = new AdjacencyMatrix(5, 6, [[1, 2], [1, 3], [2, 4], [3, 4], [3, 5], [4, 5]]);
inst.printGraph();

module.exports = AdjacencyMatrix;

// Space complexity (n * n)

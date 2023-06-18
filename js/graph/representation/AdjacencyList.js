class AdjacencyList {

    list;

    constructor ( numOfNodes, edges ) {
        this.list = new Array(numOfNodes + 1);
        edges.forEach(edge => {
            if ( !this.list[edge[0]] ) this.list[edge[0]] = [edge[1]];
            else this.list[edge[0]].push(edge[1]);
            
            // Only for undirected graphs
            if ( !this.list[edge[1]] ) this.list[edge[1]] = [edge[0]];
            else this.list[edge[1]].push(edge[0]);
        });
    }
}

module.exports = AdjacencyList;

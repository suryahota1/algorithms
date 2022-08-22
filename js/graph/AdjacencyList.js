class AdjacencyList {

    #adjList = [];

    constructor ( vertices ) {
        for ( let i = 0; i <= vertices; i++ ) this.#adjList.push([]);
    }

    printGraph () {
        console.log(this.#adjList);
    }

    addEdge ( v1, v2 ) {
        this.#adjList[v1].push(v2);
        this.#adjList[v2].push(v1);
    }
}

const al = new AdjacencyList(4);
al.addEdge(0, 1);
al.addEdge(0, 4);
al.addEdge(1, 2);
al.addEdge(1, 3);
al.addEdge(1, 4);
al.addEdge(2, 3);
al.addEdge(3, 4);
al.printGraph();
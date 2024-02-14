class CycleDirectedGraphDFS {

    constructor ( vSize ) {
        this.adj = new Array(vSize);
        for ( let i = 0; i < vSize; i++ ) {
            this.adj[i] = [];
        }
    }

    addEdge ( u, v ) {
        this.adj[u].push(v);
    }

    #dfs ( adj, u, visited, recStack ) {
        visited[u] = true;
        recStack[u] = true;
        const neighbours = adj[u];
        for ( let i = 0; i < neighbours.length; i++ ) {
            if ( recStack[neighbours[i]] || this.#dfs(adj, neighbours[i], visited, recStack) ) return true;
        }
        recStack[u] = false;
        return false;
    }

    detectCycle ( adj=this.adj ) {
        const visited = new Array(adj.length).fill(false);
        const recStack = new Array(adj.length).fill(false);
        for ( let i = 0; i < adj.length; i++ ) {
            if ( !visited[i] && this.#dfs(adj, i, visited, recStack) ) return true;
        }
        return false;
    }
}

const inst1 = new CycleDirectedGraphDFS(4);
inst1.addEdge(0, 1);
inst1.addEdge(0, 2);
inst1.addEdge(1, 2);
// inst1.addEdge(2, 0);
inst1.addEdge(2, 3);
// inst1.addEdge(3, 3);

console.log(inst1.detectCycle());

class TopSortDepartTime {

    constructor ( v ) {
        this.adj = new Array(v);
        this.time = 0;
    }

    addEdge ( i, j ) {
        if ( !this.adj[i] ) this.adj[i] = [];
        this.adj[i].push(j);
    }

    dfs ( u, visited, result ) {
        visited[u] = true;
        const adjacents = this.adj[u] ?? [];
        for ( let i = 0; i < adjacents.length; i++ ) {
            if ( !visited[adjacents[i]] ) this.dfs(adjacents[i], visited, result);
        }
        result[this.time++] = u;
    }

    topSort () {
        const visited = new Array(this.adj.length).fill(false);
        const result = [];
        for ( let i = 0; i < this.adj.length; i++ ) {
            if ( !visited[i] ) this.dfs(i, visited, result);
        }
        console.log(result);
    }
}

const inst = new TopSortDepartTime(6);
inst.addEdge(5, 2);
inst.addEdge(5, 0);
inst.addEdge(4, 1);
inst.addEdge(4, 0);
inst.addEdge(2, 3);
inst.addEdge(3, 1);

inst.topSort();

class AllPossibleTopSort {

    constructor ( v ) {
        this.adj = new Array(v);
        this.indegree = new Array(v).fill(0);
    }

    addEdge ( i, j ) {
        if ( !this.adj[i] ) this.adj[i] = [];
        this.adj[i].push(j);
        this.indegree[j]++;
    }

    getAllTopSorts ( path=[], visited ) {
        for ( let i = 0; i < this.adj.length; i++ ) {
            if ( this.indegree[i] !== 0 || visited[i] ) continue;
            const adjs = this.adj[i];
            if ( adjs && adjs.length > 0 ) {
                for ( let i = 0; i < adjs.length; i++ ) {
                    this.indegree[adjs[i]]--;
                }
            }
            visited[i] = true;
            path.push(i);
            this.getAllTopSorts(path, visited);
            visited[i] = false;
            if ( adjs && adjs.length > 0 ) {
                for ( let i = 0; i < adjs.length; i++ ) {
                    this.indegree[adjs[i]]++;
                }
            }
            path.pop();
        }
        if ( path.length === this.adj.length ) console.log(path);
    }
}

const inst = new AllPossibleTopSort(6);
inst.addEdge(5, 2);
inst.addEdge(5, 0);
inst.addEdge(4, 1);
inst.addEdge(4, 0);
inst.addEdge(2, 3);
inst.addEdge(3, 1);

const visited = new Array(6).fill(false);

inst.getAllTopSorts([], visited);

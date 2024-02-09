// The idea is to top sort the graph and add all missing nodes from left to right
class DAGMaxNode {
    constructor ( v ) {
        this.adj = new Array(v);
        this.indegree = new Array(v).fill(0);
    }

    addEdge ( i, j ) {
        if ( !this.adj[i] ) this.adj[i] = [];
        this.adj[i].push(j);
        this.indegree[j]++;
    }

    kahnBFSTopSort () {
        const queue = [];
        const result = [];
        for ( let i = 0; i < this.indegree.length; i++ ) {
            if ( this.indegree[i] === 0 ) queue.push(i);
        }
        while ( queue.length > 0 ) {
            const top = queue.shift();
            result.push(top);
            const adjs = this.adj[top];
            if ( adjs && adjs.length > 0 ) {
                for ( let i = 0; i < adjs.length; i++ ) {
                    if ( --this.indegree[adjs[i]] === 0 ) queue.push(adjs[i]);
                }
            }
        }
        return result;
    }

    addMissingEdges ( sortedArr ) {
        for ( let i = 0; i < sortedArr.length; i++ ) {
            for ( let j = i + 1; j < sortedArr.length; j++ ) {
                if ( !this.adj[sortedArr[i]] ) this.adj[sortedArr[i]] = [];
                if ( this.adj[sortedArr[i]].indexOf(sortedArr[j]) < 0 ) console.log(`[ ${sortedArr[i]}, ${sortedArr[j]} ]`);
            }
        }
    }
}

const graph = new DAGMaxNode(6);
graph.addEdge(5, 2);
graph.addEdge(5, 0);
graph.addEdge(4, 0);
graph.addEdge(4, 1);
graph.addEdge(2, 3);
graph.addEdge(3, 1);

const sortedArr = graph.kahnBFSTopSort();
console.log("sortedArr", sortedArr);
graph.addMissingEdges(sortedArr);

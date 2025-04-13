class Solution09 {
    dfs ( u, parent, discTime, lowDiscTime, timer, answer, adj ) {
        discTime[u] = lowDiscTime[u] = ++timer.count;
        console.log("discTime[u]", u, discTime[u]);
        let childCount = 0;
        for ( const v of adj[u] ) {
            // if ( v === parent ) {
            //     continue;
            // }
            if ( discTime[v] === -1 ) {
                childCount++;
                this.dfs(v, u, discTime, lowDiscTime, timer, answer, adj);
                lowDiscTime[u] = Math.min(lowDiscTime[u], lowDiscTime[v]);
            } else {
                lowDiscTime[u] = Math.min(lowDiscTime[u], discTime[v]);
            }
        }

        if ( parent !== -1 && lowDiscTime[u] >= discTime[u] ) {
            answer.add(u);
        } else if ( parent === -1 && childCount > 1 ) {
            answer.add(u);
        }
        console.log("lowDiscTime[u]", u, lowDiscTime[u]);
    }
    articulationPoints(V, edges) {
        const adj = new Array(V).fill(0).map(() => []);
        for ( const [ u, v ] of edges ) {
            adj[u].push(v);
            adj[v].push(u);
        }
        const discTime = new Array(V).fill(-1);
        const lowDiscTime = new Array(V).fill(-1);
        const timer = { count: 0 };
        const answer = new Set();
        for ( let i = 0; i < V; i++ ) {
            if ( discTime[i] === -1 ) {
                this.dfs(i, -1, discTime, lowDiscTime, timer, answer, adj);
            }
        }
        console.log(answer);
    }
}

const sol09 = new Solution09();
sol09.articulationPoints(5, [[0, 1], [1, 4], [4, 3], [4, 2], [2, 3]]);
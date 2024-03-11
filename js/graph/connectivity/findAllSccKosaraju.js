function convertEdgesIntoAdj ( n, edges ) {
    const adj = new Array(n).fill().map(() => []);
    for ( const [ u, v ] of edges ) {
        adj[u].push(v);
    }
    return adj;
}

function transposeGraph ( adj ) {
    const adjT = new Array(adj.length).fill().map(() => []);
    console.log("transpose", adjT);
    for ( let i = 0; i < adj.length; i++ ) {
        for ( let j = 0; j < adj[i].length; j++ ) {
            adjT[adj[i][j]].push(i);
        }
    }
    return adjT;
}

function dfs1 ( u, visited, adj, stack ) {
    visited[u] = true;
    for ( const v of adj[u] ) {
        if ( !visited[v] ) dfs1(v, visited, adj, stack);
    }
    stack.push(u);
}

function dfs3 ( u, visited, adj, resp ) {
    visited[u] = true;
    for ( const v of adj[u] ) {
        if ( !visited[v] ) {
            resp.push(v);
            dfs3(v, visited, adj, resp);
        }
    }
}

function findAllSccKosaraju ( n, edges ) {
    const adj = convertEdgesIntoAdj(n, edges);
    console.log(adj);
    let visited = new Array(n).fill(false);
    const stack = [];
    for ( let i = 0; i < n; i++ ) {
        if ( !visited[i] ) dfs1(i, visited, adj, stack);
    }
    visited = visited.map(() => false);
    const adjT = transposeGraph(adj);
    while ( stack.length > 0 ) {
        const top = stack.pop();
        if ( !visited[top] ) {
            const resp = [top];
            dfs3(top, visited, adjT, resp);
            console.log(resp.join("--"));
        }
    }
}

findAllSccKosaraju(5, [[1, 0], [0, 2], [2, 1], [0, 3], [3, 4]]);

/**
 * Time complexity: O(V + E) + O(V + E) + O(V + E) = O(V + E)
*/
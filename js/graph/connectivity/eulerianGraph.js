function convertEdgesIntoAdj ( n, edges ) {
    const adj = new Array(n).fill().map(() => []);
    for ( const [ u, v ] of edges ) {
        adj[u].push(v);
        adj[v].push(u);
    }
    return adj;
}

function dfs ( u, visited, adj ) {
    visited[u] = true;
    for ( const v of adj[u] ) {
        dfs(v, visited, adj);
    }
}

function checkIfConnected ( adj ) {
    let nodeWithDegreeNonZero;
    for ( let i = 0; i < adj.length; i++ ) {
        if ( adj[i].length > 0 ) {
            nodeWithDegreeNonZero = i;
            break;
        }
    }
    if ( !nodeWithDegreeNonZero ) return true;
    const visited = new Array(adj.length).fill(false);
    dfs(nodeWithDegreeNonZero, visited, adj);
    for ( let i = 0; i < adj.length; i++ ) {
        if ( !visited[i] && adj[i].length > 0 ) return false;
    }
    return true;
}

function checkOddEdgeCount ( adj ) {
    let count = 0;
    for ( let i = 0; i < adj.length; i++ ) {
        if ( (adj[i].length & 1 )!== 0 ) count++;
    }
    return count;
}

function checkIfEulerian ( n, edges ) {
    const adj = convertEdgesIntoAdj(n, edges);
    const isConnected = checkIfConnected(adj);
    if ( !isConnected ) return console.log("Non Eulerian graph");
    const oddEdgeCount = checkOddEdgeCount(adj);
    if ( oddEdgeCount > 2 ) return console.log("Non Eulerian graph");
    if ( oddEdgeCount === 0 ) return console.log("Eulerian graph");
    return console.log("Semi Eulerian graph");
    // oddEdgeCount can never be 1
}

checkIfEulerian(5, [[1, 0], [0, 2], [2, 1], [0, 3], [3, 4]]);

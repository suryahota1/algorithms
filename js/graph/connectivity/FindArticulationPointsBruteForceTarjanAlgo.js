function dfs ( u, parentOfU, discTime, lowestDiscTime, 
    articulationPoints, timer, adjList 
) {
    timer.count++;
    discTime[u] = lowestDiscTime[u] = timer.count;
    const neighbours = adjList[u];
    let childrenCount = 0;
    for ( const v of neighbours ) {
        if ( discTime[v] === -1 ) {
            childrenCount++;
            dfs(v, u, discTime, lowestDiscTime, 
                articulationPoints, timer, adjList
            );
            lowestDiscTime[u] = Math.min(lowestDiscTime[u], lowestDiscTime[v]);
            if ( parentOfU === -1 && childrenCount > 1 ) articulationPoints.push(u);
            else if ( parentOfU !== -1 && lowestDiscTime[v] > lowestDiscTime[u] ) articulationPoints.push(u);
        } else if ( v !== parentOfU ) {
            lowestDiscTime[u] = Math.min(lowestDiscTime[u], discTime[v]);
        }
    }
}

function findArticulationPointsBruteForceTarjanAlgo ( n, edges ) {
    const adjList = new Array(n).fill().map(v => []);
    for ( const [ u, v ] of edges ) {
        adjList[u].push(v);
        adjList[v].push(u);
    }
    const discTime = new Array(n).fill(-1);
    const lowestDiscTime = new Array(n).fill(-1);
    const articulationPoints = [];
    let timer = { count: 0 };

    for ( let i = 0; i < n; i++ ) {
        if ( discTime[i] === -1 ) {
            dfs(i, -1, discTime, lowestDiscTime, articulationPoints, timer, adjList);
        }
    }
    console.log(articulationPoints);
}

findArticulationPointsBruteForceTarjanAlgo(5, [[1, 0], [0, 2], [2, 1], [0, 3], [3, 4]]);

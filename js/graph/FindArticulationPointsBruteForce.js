function dfs ( currNode, removedNode, adjList, visited ) {
    visited[currNode] = true;
    const neighbours = adjList[currNode];
    for ( const node of neighbours ) {
        if ( node !== removedNode && !visited[node] ) {
            dfs(node, removedNode, adjList, visited);
        }
    }
}

function findArticulationPointsBruteForce ( adjList ) {
    for ( let i = 0; i < adjList.length; i++ ) {
        const visited = new Array(adjList.length).fill(false);
        let components = 0;
        for ( let j = 0; j < adjList.length; j++ ) {
            if ( j !== i ) {
                if ( !visited[j] ) {
                    components++;
                    dfs(j, i, adjList, visited);
                }
            }
        }
        if ( components > 1 ) {
            console.log("Articulation point: ", i);
        }
    }
}

const adj1 = new Array(5).fill().map(() => []);
adj1[0].push(1);
adj1[1].push(0);
adj1[1].push(2);
adj1[2].push(1);
adj1[0].push(2);
adj1[2].push(0);
adj1[2].push(3);
adj1[3].push(2);
adj1[3].push(4);
adj1[4].push(3);

findArticulationPointsBruteForce(adj1);

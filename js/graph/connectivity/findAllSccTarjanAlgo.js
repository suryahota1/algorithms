function dfs ( u, disc, low, inStack, stack, adjList, timer ) {
    disc[u] = low[u] = timer.count;
    timer.count++;
    stack.push(u);
    inStack[u] = true;
    for ( const v of adjList[u] ) {
        if ( disc[v] === -1 ) {
            dfs(v, disc, low, inStack, stack, adjList, timer);
            low[u] = Math.min(low[u], low[v]);
        } else if ( inStack[v] ) {
            low[u] = Math.min(low[u], disc[v]);
        }
    }
    if ( low[u] === disc[u] ) {
        // Head of current SCC
        const arr = [];
        while ( stack[stack.length - 1] !== u ) {
            const top = stack.pop();
            arr.push(top);
            inStack[top] = false;
        }
        const top = stack.pop();
        arr.push(top);
        inStack[top] = false;
        console.log(arr.join("-->"));
    }
}

function findAllSccTarjanAlgo ( n, edges ) {
    const adjList = new Array(n).fill().map(() => []);
    for ( const [ u, v ] of edges ) {
        adjList[u].push(v);
    }
    const disc = new Array(n).fill(-1);
    const low = new Array(n).fill(-1);
    const inStack = new Array(n).fill(false);
    const stack = [];
    let timer = { count: 0 };

    for ( let i = 0; i < n; i++ ) {
        if ( disc[i] === -1 ) {
            dfs(i, disc, low, inStack, stack, adjList, timer);
        }
    }
}

const edges = [[0, 1], [1, 0], [1, 2], [2, 1], [1, 3], [3, 1], [2, 3], [3, 2],
    [2, 4], [4, 2], [3, 4], [4, 3], [1, 5], [5, 1], [0, 6], [6, 0], [5, 6], [6, 5], 
    [5, 7], [7, 5], [5, 8], [8, 5], [7, 8], [8, 7], [8, 9], [9, 8], [10, 11], [11, 10] 
];

const edges1 = [[1, 0], [0, 2], [2, 1], [0, 3], [3, 4]];

findAllSccTarjanAlgo(5, edges1);

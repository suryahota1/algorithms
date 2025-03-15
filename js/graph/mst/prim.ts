import { MinHeap1 } from "../../heap/MinHeap1";

type Edge = [source: number, destination: number, weight: number];

function primMst ( adjList: number[][][] ): Edge[] {
    const priorityQueue = new MinHeap1();
    const inMst = new Array(adjList.length).fill(false);
    let totalWeight = 0, mst: Edge[] = [];

    priorityQueue.insert([0, -1, 0]);

    while ( priorityQueue.size() > 0 ) {
        const [node, parent, weight] = priorityQueue.delete();
        if ( inMst[node] ) continue;

        for ( let i = 0; i < adjList[node].length; i++ ) {
            const adjacentEdge = adjList[node][i];
            if ( !inMst[adjacentEdge[0]] ) {
                priorityQueue.insert([adjacentEdge[0], node, adjacentEdge[1]]);
            }
        }

        inMst[node] = true;
        if ( parent !== -1 ) mst.push([node, parent, weight]);
    }

    return mst;
}
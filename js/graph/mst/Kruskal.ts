import { DisjointSet } from "../DisjointSet";

/**
 * 1. It is  greedy algorithm.
 * 2. Works best for sparse graphs i.e. with fewer edges
 * 3. Internally uses Disjoint Set data structure.
 * 4. Time Complexity: ElogE
 * 
 * Algorithm: 
 * 1. Sort edges in increasing order of edge weight.
 * 2. Pick the edges with the minimum weight.
 * 3. Check if adding the edge into the MST forms a cycle(using DS).
 * 4. If yes, do not include the edge.
 * 5. If no, add the edge until we have (V - 1) edges
 */
type Edge = [source: number, destination: number, weight: number];
function kruskalMST ( adjList: number[][][] ): Edge[] {
    // Convert the adjacency list into a set of edges
    const edges: Edge[] = [];
    
    for ( let i = 0; i < adjList.length; i++ ) {
        for ( let j = 0; j < adjList[i].length; j++ ) {
            edges.push([i, adjList[i][j][0], adjList[i][j][0]]);
        }
    }

    // Sort edges by weight
    edges.sort((e1, e2) => e1[2] - e2[2]);

    // Initialize Disjoint set
    const ds = new DisjointSet(adjList.length);
    const mst: Edge[] = [];

    for ( let i = 0; i < edges.length; i++ ) {
        const canUnite = ds.union(edges[i][0], edges[i][1]);
        if ( canUnite ) {
            mst.push(edges[i]);
        }
        if ( mst.length === adjList.length - 1 ) break;
    }

    return mst;
}
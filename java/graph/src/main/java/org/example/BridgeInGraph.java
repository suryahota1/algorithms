package org.example;

import java.util.List;

public class BridgeInGraph {

    private int timer = 0;

    private void dfs ( int u, List<List<Integer>> adj, int[] disc, int[] low, boolean[] visited, int parent ) {
        disc[u] = low[u] = ++timer;
        visited[u] = true;
        for ( int i = 0; i < adj.get(u).size(); i++ ) {
            int v = adj.get(u).get(i);
            if ( v == parent ) continue;
            if ( !visited[v] ) {
                dfs(v, adj, disc, low, visited, parent);
                low[u] = Math.min(low[u], low[v]);
                if ( low[v] >= disc[u] ) {
                    System.out.println("Bridge " + u + " ------ " + v);
                }
            } else {
                low[u] = Math.min(low[u], disc[v]);
            }
        }
    }

    public void findBridges ( List<List<Integer>> adj ) {
        int[] disc = new int[adj.size()];
        int[] low = new int[adj.size()];
        boolean[] visited = new boolean[adj.size()];


    }
}

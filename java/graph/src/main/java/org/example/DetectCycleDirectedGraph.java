package org.example;

import java.util.ArrayList;

public class DetectCycleDirectedGraph {

    private boolean checkCycle ( ArrayList<ArrayList<Integer>> adjList, int u, boolean[] recStack, boolean[] visited ) {
        if ( recStack[u] ) return true;
        if ( visited[u] ) return false;
        visited[u] = true;
        recStack[u] = true;

        for (Integer v : adjList.get(u)) {
            if ( checkCycle(adjList, v, recStack, visited) ) {
                return true;
            }
        }

        recStack[u] = false;
        return false;
    }

    public boolean isCyclic ( ArrayList<ArrayList<Integer>> adjList ) {
        boolean[] visited = new boolean[adjList.size()];
        boolean[] recStack = new boolean[adjList.size()];
        for ( int i = 0; i < visited.length; i++ ) {
            visited[i] = false;
            recStack[i] = false;
        }

        for ( int i = 0; i < adjList.size(); i++ ) {
            if ( !visited[i] && checkCycle(adjList, i, recStack, visited) ) {
                return true;
            }
        }

        return false;
    }
}

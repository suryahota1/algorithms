package org.example;

import java.util.ArrayList;

public class DetectCycleUndirectedGraph {

    private boolean checkCyclic ( ArrayList<ArrayList<Integer>> adjList, boolean[] visited, int parent, int source ) {
        if ( visited[source] ) return true;
        visited[source] = true;

        for (Integer v : adjList.get(source)) {
            if ( v != parent && checkCyclic(adjList, visited, source, v) ) {
                return true;
            }
        }

        return false;
    }

    public boolean isCyclic ( ArrayList<ArrayList<Integer>> adjList ) {
        boolean[] visited = new boolean[adjList.size()];
        for ( int i = 0; i < visited.length; i++ ) {
            visited[i] = false;
        }

        for ( int i = 0; i < adjList.size(); i++ ) {
            if ( !visited[i] && checkCyclic(adjList, visited, -1, i) ) {
                return true;
            }
        }
        return false;
    }
}

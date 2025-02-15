package org.example;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class MaxEdgeToAddDAGRemainsDAG {

    private void topSortWithDFS ( ArrayList<ArrayList<Integer>> adjList, List<Integer> list, boolean[] visited, int u ) {
        visited[u] = true;

        adjList.get(u).forEach(v -> {
            if ( !visited[v] ) {
                topSortWithDFS(adjList, stack, visited, v);
            }
        });
        list.add(u);
    }

    private int getMaxEdges ( ArrayList<ArrayList<Integer>> adjList, List<Integer> list ) {
        int maxEdges = 0;
        for ( int i = 0; i < list.size(); i++ ) {
            for ( int j = i + 1; j < list.size(); j++ ) {
                if ( !adjList.get(i).contains(j) ) {
                    maxEdges++;
                }
            }
        }
        return maxEdges;
    }

    public int getNumOfMaxEdges ( ArrayList<ArrayList<Integer>> adjList ) {
        List<Integer> list = new ArrayList<>();
        boolean[] visited = new boolean[adjList.size()];
        for ( int i = 0; i < visited.length; i++ ) {
            visited[i] = false;
        }
        topSortWithDFS(adjList, list, visited, 0);
        return getMaxEdges(adjList, list);
    }
}

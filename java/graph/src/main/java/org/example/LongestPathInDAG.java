package org.example;

import java.util.ArrayList;
import java.util.Stack;

public class LongestPathInDAG {

    private void topSortUtil ( ArrayList<ArrayList<Edge>> adjList, boolean[] visited, Stack<Integer> stack, int source ) {
        visited[source] = true;
        adjList.get(source).forEach(v -> {
            if ( !visited[v.getV()] ) {
                topSortUtil(adjList, visited, stack, v.getV());
            }
        });
        stack.push(source);
    }

    private int[] getDistance ( ArrayList<ArrayList<Edge>> adjList, Stack<Integer> stack, int source ) {
        int[] distance = new int[adjList.size()];
        for ( int i = 0; i < distance.length; i++ ) {
            distance[i] = Integer.MIN_VALUE;
        }
        distance[source] = 0;

        while ( !stack.isEmpty() ) {
            int top = stack.pop();
            int currDistance = distance[top];
            if ( currDistance != Integer.MIN_VALUE ) {
                adjList.get(top).forEach(v -> {
                    int nextDistance = currDistance + v.getW();
                    distance[v.getV()] = Math.max(distance[v.getV()], nextDistance);
                });
            }
        }

        return distance;
    }

    public int[] getLongestPath ( ArrayList<ArrayList<Edge>> adjList, int source ) {
        boolean[] visited = new boolean[adjList.size()];
        Stack<Integer> stack = new Stack<>();

        for ( int i = 0; i < visited.length; i++ ) {
            visited[i] = false;
        }

        for ( int i = 0; i < adjList.size(); i++ ) {
            if ( !visited[i] ) {
                topSortUtil(adjList, visited, stack, i);
            }
        }

        return getDistance(adjList, stack, source);
    }
}

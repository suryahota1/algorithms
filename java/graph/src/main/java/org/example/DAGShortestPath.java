package org.example;

import java.util.ArrayList;
import java.util.Stack;

public class DAGShortestPath {

    private void topSortUtil ( ArrayList<ArrayList<Edge>> adjList, Stack<Integer> stack, boolean[] visited, int source ) {
        visited[source] = true;
        adjList.get(source).forEach(edge -> {
            if ( !visited[edge.getV()] ) {
                topSortUtil(adjList, stack, visited, edge.getV());
            }
        });
        stack.push(source);
    }

    private int[] getShortestPath ( int source, Stack<Integer> stack, ArrayList<ArrayList<Edge>> adjList ) {
        int[] distance = new int[adjList.size()];

        for ( int i = 0; i < distance.length; i++ ) {
            distance[i] = Integer.MAX_VALUE;
        }

        distance[source] = 0;

        while ( !stack.isEmpty() ) {
            int top = stack.pop();
            int startDistance = distance[top];
            if ( startDistance != Integer.MAX_VALUE ) {
                adjList.get(top).forEach(edge -> {
                    int targetDistance = startDistance + edge.getW();
                    distance[edge.getV()] = Math.min(distance[edge.getV()], targetDistance);
                });
            }
        }

        return distance;
    }

    public int[] shortestPath ( ArrayList<ArrayList<Edge>> adjList, int source ) {
        Stack<Integer> stack = new Stack<>();
        boolean[] visited = new boolean[adjList.size()];


        for ( int i = 0; i < visited.length; i++ ) {
            visited[i] = false;
        }

        // Find topological sort
        for ( int i = 0; i < adjList.size(); i++ ) {
            if ( !visited[i] ) {
                topSortUtil(adjList, stack, visited, i);
            }
        }

        return getShortestPath(source, stack, adjList);
    }
}

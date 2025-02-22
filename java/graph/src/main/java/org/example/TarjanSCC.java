package org.example;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class TarjanSCC {

    private void dfs ( int source, int[] discoveryTime, int[] lowDiscoveryTime, boolean[] inStack, Stack<Integer> stack, int timer, List<List<Integer>> adjacencyList ) {
        discoveryTime[source] = lowDiscoveryTime[source] = ++timer;
        inStack[source] = true;
        stack.push(source);

        for ( int i = 0; i < adjacencyList.get(source).size(); i++ ) {
            int target = adjacencyList.get(source).get(i);
            if ( discoveryTime[target] == 0 ) {
                dfs(target, discoveryTime, lowDiscoveryTime, inStack, stack, timer, adjacencyList);
                lowDiscoveryTime[source] = Math.min(lowDiscoveryTime[source], lowDiscoveryTime[target]);
            } else if ( inStack[target] ) {
                lowDiscoveryTime[source] = Math.min(lowDiscoveryTime[source], lowDiscoveryTime[target]);
            }
        }

        if ( discoveryTime[source] == lowDiscoveryTime[source] ) {
            while ( stack.peek() != source ) {
                inStack[stack.peek()] = false;
                stack.pop();
            }
            inStack[stack.peek()] = false;
            stack.pop();
        }
    }

    public void findSCC (List<Edge> edges, int n ) {

//        Step-1: Prepare the adjacency list out of the list of edges

        List<List<Integer>> adjacencyList = new ArrayList<>(n);
        for ( int i = 0; i < adjacencyList.size(); i++ ) {
            adjacencyList.set(i, new ArrayList<>());
        }

        edges.forEach(edge -> {
            adjacencyList.get(edge.getU()).add(edge.getV());
            adjacencyList.get(edge.getV()).add(edge.getU());
        });

//        Step-2: Initialize all required tracking variables

        int[] discoveryTime = new int[n];
        int[] lowDiscoveryTime = new int[n];
        boolean[] inStack = new boolean[n];
        Stack<Integer> stack = new Stack<>();

        for ( int i = 0; i < inStack.length; i++ ) {
            inStack[i] = false;
        }

//        Step-3: Do the modified DFS

        for ( int i = 0; i < n; i++ ) {
            if ( discoveryTime[i] == 0 ) {
                dfs(i, discoveryTime, lowDiscoveryTime, inStack, stack, 0, adjacencyList);
            }
        }

//        Step-4: Group nodes with same lowDiscoveryTime and return

    }
}

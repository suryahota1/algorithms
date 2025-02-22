package org.example;

import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

public class KosarajuSCC {

    private List<List<Integer>> getAdjacencylist ( int n, List<Edge> edges ) {
        List<List<Integer>> adjacencyList = new ArrayList<>(n);
        for ( int i = 0; i < n; i++ ) {
            adjacencyList.set(i, new ArrayList<>());
        }
        edges.forEach(edge -> {
            adjacencyList.get(edge.getU()).add(edge.getV());
        });
        return adjacencyList;
    }

    private List<List<Integer>> transposeGraph ( List<List<Integer>> adjacencyList ) {
        List<List<Integer>> newAdjacencyList = new ArrayList<>(adjacencyList.size());
        for ( int i = 0; i < newAdjacencyList.size(); i++ ) {
            newAdjacencyList.set(i, new ArrayList<>());
        }

        for ( int i = 0; i < adjacencyList.size(); i++ ) {
            for ( int j = 0; j < adjacencyList.get(i).size(); j++ ) {
                newAdjacencyList.get(adjacencyList.get(i).get(j)).add(i);
            }
        }

        return newAdjacencyList;
    }

    private void dfs1 (int u, List<List<Integer>> adjacencyList, boolean[] visited, Stack<Integer> stack ) {
        visited[u] = true;
        adjacencyList.get(u).forEach(v -> {
            if ( !visited[v] ) dfs1(v, adjacencyList, visited, stack);
        });
        stack.push(u);
    }

    private void dfs2 ( int u, List<List<Integer>> adjacencyList, boolean[] visited, List<Integer> resp ) {
        visited[u] = true;
        resp.add(u);
        adjacencyList.get(u).forEach(v -> {
            if ( !visited[v] ) dfs2(v, adjacencyList, visited, resp);
        });
    }

    public void findSCC ( int n, List<Edge> edges ) {

//        Step-1: Convert edges into an adjacency list

        List<List<Integer>> adjacencyList = getAdjacencylist(n, edges);

//        Step-2: Find the initial traversal order and keep it inside a stack

        boolean[] visited = new boolean[n];
        Stack<Integer> stack = new Stack<>();

        for ( int i = 0; i < n; i++ ) {
            if ( !visited[i] ) {
                dfs1(i, adjacencyList, visited, stack);
            }
        }

//        Step-3: Transpose the graph
        List<List<Integer>> newAdjacencyList = transposeGraph(adjacencyList);

//        Step-4: Find the SCCs
        for ( int i = 0; i < n; i++ ) {
            visited[i] = false;
        }
        while ( stack.size() > 0 ) {
            int top = stack.pop();
            List<Integer> resp = new ArrayList<>();
            if ( !visited[top] ) {
                dfs2(top, newAdjacencyList, visited, resp);
            }
            System.out.println(resp);
        }
    }
}

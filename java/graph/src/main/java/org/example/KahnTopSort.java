package org.example;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;

public class KahnTopSort {

    private int[] getIndegree ( ArrayList<ArrayList<Integer>> adjList ) {
        int[] indegree = new int[adjList.size()];

        for ( int i = 0; i < indegree.length; i++ ) {
            indegree[i] = 0;
        }
        adjList.forEach(adjInr -> {
            adjInr.forEach(v -> {
                indegree[v]++;
            });
        });

        return indegree;
    }

    public int[] topSort ( ArrayList<ArrayList<Integer>> adjList ) {
        int[] indegree = getIndegree(adjList);
        ArrayList<Integer> al = new ArrayList<>();

        Queue<Integer> queue = new LinkedList<>();

        for ( int i = 0; i < indegree.length; i++ ) {
            if ( indegree[i] == 0 ) {
                queue.offer(i);
            }
        }

        while ( !queue.isEmpty() ) {
            int top = queue.remove();
            al.add(top);
            System.out.println(top);
            adjList.get(top).forEach(v -> {
                if ( --indegree[v] == 0 ) {
                    queue.offer(v);
                }
            });
        }

        return al.stream().mapToInt(Integer::intValue).toArray();
    }
}

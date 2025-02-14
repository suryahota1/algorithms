package org.example;

import java.util.PriorityQueue;
import java.util.Queue;

class Pair {
    private int source;
    private int distance;
    Pair( int source, int distance) {
        this.source = source;
        this.distance = distance;
    }

    public int getSource() {
        return source;
    }

    public int getDistance() {
        return distance;
    }
}

public class Dijkstra1 {


    int[] getShortestPath ( int source, int[][][] adjList ) {
        int[] distance = new int[adjList.length];
        Queue<Pair> pq = new PriorityQueue<>((Pair p1, Pair p2) -> {
            int diff = p1.getDistance() - p2.getDistance();
            if ( diff == 0 ) return p1.getSource() - p2.getSource();
            return diff;
        } );

        distance[source] = 0;
        pq.offer(new Pair(source, 0));

        while ( pq.size() > 0 ) {
            Pair top = pq.remove();
            System.out.println(top);
            int target = top.getSource();
            int currDistance = top.getDistance();
            int[][] adjacents = adjList[target];

            for ( int[] adjacent: adjacents ) {
                int nextNode = adjacent[0];
                int nextDistance = currDistance + adjacent[1];
                if ( distance[nextNode] > nextDistance ) {
                    distance[nextNode] = nextDistance;
                    pq.offer(new Pair(nextNode, nextDistance));
                }
            }
        }

        return distance;
    }
}

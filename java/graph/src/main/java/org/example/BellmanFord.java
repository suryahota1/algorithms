package org.example;

import java.util.ArrayList;
import java.util.Optional;

class Edge {
    private int u;
    private int v;
    private int w;
    Edge ( int u, int v, int w ) {
        this.u = u;
        this.v = v;
        this.w = w;
    }

    public int getU() {
        return u;
    }

    public int getW() {
        return w;
    }

    public int getV() {
        return v;
    }
}

public class BellmanFord {

    private int[] relaxEdges ( ArrayList<Edge> edges, int source, int vSize ) {
        int[] distance = new int[vSize];
        for ( int i = 0; i < distance.length; i++ ) {
            distance[i] = Integer.MAX_VALUE;
        }
        distance[source] = 0;

        for ( int i = 0; i < vSize; i++ ) {
            edges.forEach(edge -> {
                if ( distance[edge.getU()] != Integer.MAX_VALUE ) {
                    int newDistance = distance[edge.getU()] + edge.getW();
                    distance[edge.getV()] = Math.min(newDistance, distance[edge.getV()]);
                }
            });
        }

        return distance;
    }

    private boolean isNegativeCycle ( ArrayList<Edge> edges, int[] distance ) {
        for ( int i = 0; i < edges.size(); i++ ) {
            Edge edge = edges.get(i);
            if ( distance[edge.getU()] != Integer.MAX_VALUE ) {
                int newDistance = distance[edge.getU()] + edge.getW();
                if ( newDistance < distance[edge.getV()] ) {
                    return true;
                }
            }
        }
        return false;
    }

    public Optional<int[]> shortestPath (ArrayList<Edge> edges, int source, int vSize ) {
        int[] distance = relaxEdges(edges, source, vSize);
        boolean negativeCycle = isNegativeCycle(edges, distance);
        if ( negativeCycle ) {
            return Optional.empty();
        }
        return Optional.of(distance);
    }
}

package org.example;

import java.util.ArrayList;

public class FloydWarshall {

    private int[][] populateInitialDistance ( int[][] adjMatrix ) {
        int[][] distance = new int[adjMatrix.length][adjMatrix.length];

        for ( int i = 0; i < adjMatrix.length; i++ ) {
            for ( int j = 0; j < adjMatrix.length; j++ ) {
                if ( i == j ) distance[i][j] = 0;
                else if ( adjMatrix[i][j] == 0 ) distance[i][j] = Integer.MAX_VALUE;
                else distance[i][j] = adjMatrix[i][j];
            }
        }

        return distance;
    }

    public int[][] getShortestPath ( int[][] adjMatrix ) {
        int[][] distance = populateInitialDistance(adjMatrix);

        for ( int k = 0; k < adjMatrix.length; k++ ) {
            for ( int i = 0; i < adjMatrix.length; i++ ) {
                for (int j = 0; j < adjMatrix.length; j++) {
                    int newDistance = distance[i][k] + distance[k][j];
                    distance[i][j] = Math.min(distance[i][j], newDistance);
                }
            }
        }

        return distance;
    }
}

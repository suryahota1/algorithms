package org.example;


import java.util.ArrayList;
import java.util.Collections;
import java.util.Optional;
import java.util.stream.Collectors;

public class Johnson {

    private Optional<int[]> getBellmanFordDistance (ArrayList<Edge> edges, int vSize ) {
        for ( int i = 0; i < vSize; i++ ) {
            edges.add(new Edge(vSize, i, 0));
        }
        BellmanFord bf = new BellmanFord();
        edges = (ArrayList<Edge>) edges.stream().filter(edge -> edge.getU() != vSize).collect(Collectors.toList());
        return bf.shortestPath(edges, vSize, vSize + 1);
    }

    private void modifyEdges ( ArrayList<Edge> edges, int[] distance ) {
        edges.forEach(edge -> {
            edge.setW(edge.getW() + (distance[edge.getU()] - distance[edge.getV()]));
        });
    }

    private int[][][] getAdjacencyList ( ArrayList<Edge> edges, int vSize ) {
        ArrayList<ArrayList<ArrayList<Integer>>> adjList = new ArrayList<>(vSize);
        for ( int i = 0; i < vSize; i++ ) {
            adjList.add(new ArrayList<>());
        }
        edges.forEach(edge -> {
            ArrayList<Integer> adj = new ArrayList<>();
            adj.add(edge.getV());
            adj.add(edge.getW());
            adjList.get(edge.getU()).add(adj);
        });

        return adjList.stream()
                .map(outerList -> outerList.stream()
                        .map(innerList -> innerList.stream().mapToInt(Integer::intValue).toArray()) // Convert List<Integer> to int[]
                        .toArray(int[][]::new)) // Convert List<int[]> to int[][]
                .toArray(int[][][]::new); // Convert List<int[][]> to int[][][]
    }

    Optional<int[][]> getShortestPath ( ArrayList<Edge> edges, int vSize ) {
        Optional<int[]> bfDist = getBellmanFordDistance(edges, vSize);
        if ( !bfDist.isPresent() ) return Optional.empty();
        modifyEdges(edges, bfDist.get());
        int[][][] adjList = getAdjacencyList(edges, vSize);

        int[][] allPathDistance = new int[vSize][vSize];
        Dijkstra1 ds = new Dijkstra1();

        for ( int i = 0; i < allPathDistance.length; i++ ) {
            allPathDistance[i] = ds.getShortestPath(i, adjList);
        }

        return Optional.of(allPathDistance);
    }
}

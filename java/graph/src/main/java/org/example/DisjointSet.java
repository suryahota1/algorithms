package org.example;

public class DisjointSet {
    int[] size;
    int[] parent;
    public DisjointSet ( int n ) {
        this.size = new int[n + 1];
        this.parent = new int[n + 1];

        for ( int i = 0; i < this.size.length; i++ ) {
            this.size[i] = 1;
        }

        for ( int i = 0; i < this.parent.length; i++ ) {
            this.parent[i] = i;
        }
    }

    int find ( int u ) {
        if ( parent[u] == u ) return u;
        return parent[u] = find(parent[u]);
    }

    void union ( int u, int v ) {
        int ulp_u = find(u);
        int ulp_v = find(v);

        if ( ulp_u == ulp_v ) return;
        if ( size[ulp_u] < size[ulp_v] ) {
            parent[ulp_u] = ulp_v;
            size[ulp_v] += size[ulp_u];
        } else {
            parent[ulp_v] = ulp_u;
            size[ulp_u] += size[ulp_v];
        }
    }
}

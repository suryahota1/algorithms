class DisjointSet {
    size;
    parent;

    constructor ( size ) {
        this.size = new Array(size).fill(0);
        this.parent = new Array(size).fill().map((v, idx) => idx);
    }

    find ( u ) {
        if ( this.parent[u] === u ) return u;
        return this.parent[u] = this.find(this.parent[u]);
    }

    union ( u, v ) {
        const par_u = this.find(u);
        const par_v = this.find(v);
        if ( par_u === par_v ) return;
        if ( this.size[par_u] > this.size[par_v] ) {
            this.parent[par_v] = par_u;
            this.size[par_u] += this.size[par_v];
        } else {
            this.parent[par_u] = par_v;
            this.size[par_v] += this.size[par_u];
        }
    }
}

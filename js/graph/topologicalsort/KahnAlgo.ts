class KahnAlgo {

    private getIndegree ( adjList: number[][] ): number[] {
        const inDegree: number[] = [];
        for ( let i = 0; i < adjList.length; i++ ) {
            inDegree[i] = 0;
        }
        for ( const list of adjList ) {
            for ( const v of list ) {
                inDegree[v]++;
            }
        }
        return inDegree;
    }

    public topSort ( adjList: number[][] ): number[] {
        const inDegree = this.getIndegree(adjList);
        const queue: number[] = [];
        const result: number[] = [];

        for ( let i = 0; i < inDegree.length; i++ ) {
            if ( inDegree[i] === 0 ) {
                queue.push(i);
            }
        }

        while ( queue.length > 0 ) {
            const top = queue.shift()!;
            const adjacents = adjList[top];
            for ( const v of adjacents ) {
                if ( --inDegree[v] === 0 ) {
                    queue.push(v);
                }
            }
            result.push(top);
        }

        if ( result.length < adjList.length ) {
            // The graph has loop
            return [];
        }

        return result;
    }
}
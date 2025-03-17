class TopSortUsingDFS {

    private dfs ( u: number, adjList: number[][], visited: boolean[], stack: number[] ): void {
        visited[u] = true;
        const adjacents = adjList[u];
        for ( let i = 0; i < adjacents.length; i++ ) {
            if ( !visited[adjacents[i]] ) {
                this.dfs(adjacents[i], adjList, visited, stack);
            }
        }
        stack.push(u);
    }

    public topSort ( adjList: number[][] ): number[] {
        const visited: boolean[] = [];
        for ( let i = 0; i < adjList.length; i++ ) {
            visited[i] = false;
        }
        const stack: number[] = [];

        for ( let i = 0; i < adjList.length; i++ ) {
            if ( !visited[i] ) {
                this.dfs(i, adjList, visited, stack);
            }
        }

        return stack.reverse();
    }
}
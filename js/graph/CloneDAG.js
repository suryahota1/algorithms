class GraphNode {

    constructor ( key ) {
        this.key = key;
        this.adjacents = [];
    }
}

class CloneDAG {

    constructor () {
        
    }

    #dfs ( sourceNode, nodeMap ) {
        const newNode = new GraphNode(sourceNode.key);
        nodeMap.set(sourceNode, newNode);
        const neighbours = sourceNode.adjacents;
        for ( const nbr of neighbours ) {
            const clonedNode = nodeMap[nbr];
            if ( clonedNode ) {
                newNode.adjacents.push(clonedNode);
            } else {
                newNode.adjacents.push(this.#dfs(nbr, nodeMap));
            }
        }
        return newNode;
    }

    clone ( u ) {
        const nodeMap = new Map();
        return this.#dfs(u, nodeMap);
    }

    print ( sourceNode, visited ) {
        console.log(sourceNode.key);
        visited[sourceNode.key] = true;
        const neighbours = sourceNode.adjacents;
        for ( const nbr of neighbours ) {
            if ( !visited[nbr.key] ) this.print(nbr, visited);
        }
    }
}

const n0 = new GraphNode(0);
const n1 = new GraphNode(1);
const n2 = new GraphNode(2);
const n3 = new GraphNode(3);
const n4 = new GraphNode(4);

n0.adjacents.push(n1);
n0.adjacents.push(n2);
n1.adjacents.push(n2);
n1.adjacents.push(n3);
n1.adjacents.push(n4);
n2.adjacents.push(n3);
n3.adjacents.push(n4);

let visited = [false, false, false, false, false];
const cDAg = new CloneDAG();
cDAg.print(n0, visited);
const clonedNode = cDAg.clone(n0);
visited = [false, false, false, false, false];
cDAg.print(clonedNode, visited);

// What is a Graph?
// A Graph is a non-linear data structure that consists of:

// Nodes (Vertices) → Represent entities (e.g., people, cities, computers).
// Edges → Represent relationships between nodes (e.g., roads, friendships, network connections).

// Types of Graphs
// 1️⃣ Based on Direction of Edges
// Undirected Graph → Edges have no direction (e.g., friendship in social media).
// Directed Graph (Digraph) → Edges have a specific direction (e.g., one-way road).
// 2️⃣ Based on Weight of Edges
// Unweighted Graph → All edges are equal (e.g., social networks).
// Weighted Graph → Each edge has a weight (e.g., road distances).
// 3️⃣ Based on Connectivity
// Connected Graph → Every node is reachable from any other node.
// Disconnected Graph → Some nodes are isolated.
// 4️⃣ Special Graphs
// Tree → A connected acyclic graph.
// DAG (Directed Acyclic Graph) → No cycles; used in scheduling, dependencies.
// Bipartite Graph → Vertices can be split into two groups with no internal connections.

// Representation of Graph 
// Adjacency Matrix
let matrix = [
    [0 , 1 ,0],
    [1 , 0 ,1],
    [0 , 1 ,0],
]

// console.log('adjacency Matrix : ' , matrix[0][0])

// Adjacency List
let list = {
    'A' : ['B'],
    'B' : ['A' , 'C'],
    'C' : ['B'],
}

// console.log('Adjacency List : ' , list["A"])

class Graph {
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = new Set()
    }

    addEdge(vertex1 , vertex2) {
        if(!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1 , vertex2) {
        return (
            this.adjacencyList[vertex1].has(vertex2) &&
            this.adjacencyList[vertex2].has(vertex1) 
        )
    }

    removeEdge(vertex1 , vertex2) {
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex) {
        if(!this.adjacencyList[vertex]) return null
        for(let adjacentVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex , adjacentVertex);
        }

        delete this.adjacencyList[vertex]
    }

    display() {
        for(let vertex in this.adjacencyList) {
            console.log(vertex + '-->' + [...this.adjacencyList[vertex]])
        }
    }
}

let graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A' , 'B')
graph.addEdge('B' , 'C')
graph.removeEdge('A' , 'B')
graph.removeVertex('A')

graph.display()
// console.log('Edge Has : ' , graph.hasEdge('A' , 'B'))


class Vertex {
  constructor(name) {
    this.name = name; 
    this.edges = []; 
  }

  equals(v) {

  }

  addEdge(v) {
    this.edges.push(new Edge(v)); 
  }
};

class Edge {
  constructor(neighbor) {
    this.weight = 0; 
    this.neigbor = neighbor; 
  }

  equals(e) {
  }
}

class Graph {
  constructor() {
    this.vertices = [];
    this.isDirected = false; 
  }

  equals(other) {
  }

 /*
  *  Add a vertex with the given name to the graph.
  *
  *   @param {string} name The desired name of the vertex.
  */
  addVertex(name) {
    this.vertices.push(new Vertex(name));
  }

 /*
  *  Remove a vertex with the given name from the graph. If no vertex exists
  *   with the given name, the graph will remain unchanged.
  *
  *   @param {string} name The name of the vertex to be removed.
  */
  removeVertex(name) {

  }

  getVertex(name) {
    for (var i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].name === name) {
        return this.vertices[i]; 
      }
    }
    return null 
  }

  /*
   *  Add an edge between the given vertices with the given weight.
   *
   *   @param {Vertex} v1
   *   @param {Vertex} v2
   *  @param {number} weight
   */
  addEdge(v1, v2) {
    v1.edges.push(new Edge(v2, weight));

    // If undirected graph, add the other direction as well
    if (!this.isDirected) {
      v2.edges.push(new Edge(v1, weight))
    }
  }

  /*
   *  Remove the any edges between the given vertices from the graph. If one of the
   *  given vertices does not exist in this graph, the graph is left unchanged.
   *
   *   @param {Vertex} v1
   *  @param {Vertex} v2
   */
  removeEdge(v1, v2) {
    for (i = 0; i < v1.edges.length; i++) {
      if (v1.edges[i].neigbor === v2) {
        v1.edges.splice(i, 1);
        break;
      }
    }

    // If graph is undirected, remove the other direction
    if(!this.isDirected) {
      for (i = 0; i < v2.edges.length; i++) {
        if (v2.edges[i].neigbor === v1) {
          v2.edges.splice(i, 1);
          return;
        }
      }
    }
  }  

 /*
  *  Return true if there exists a path between the two given vertices in the graph,
  *  otherwise return false. Note that if either of these vertices do not belong to
  *  this graph, false will be returned.
  *
  *  @param {Vertex} v1
  *  @param {Vertex} v2
  */
  pathExists(v1, v2) {

  } 

  /*
   *  Return true iff there exists a cycle in the graph, otherwise return false. 
   */
  isCyclic() {

  }

  /*
   *   Return true iff this graph is connected.
   *
   *   @return {bool}
   */
  isConnected() {

  }

  /*
   *  Return true iff this graph is a tree, otherwise return false.
   */
  isTree() {
    return !this.isCyclic() && isConnected(); 
  }

}

g = new Graph(); 
g.addVertex("a");
g.addVertex("b"); 
console.log(g.vertices); 
console.log(g.getVertex("a")); 
console.log(g.getVertex("c")); 
g.removeVertex("b"); 

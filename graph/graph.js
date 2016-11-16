const _ = require('lodash');
const PriorityQueue = require('js-priority-queue');

/*
 *  
 */ 
class Vertex {
  constructor(value) {
    this.value = value || null;
    this.degree = 0; 
    this._adjacency_list = [];
    this._distance = Number.MAX_SAFE_INTEGER; 
    this._visited = false; 
    this._parent = null; 
  }

  /*
   *  Add the given vertex to this instance's adjacency list. Return true if Vertex v was 
   *  added to the adjacency list, false if the vertex already belogned to the list. 
   *
   *  @return {bool}
   */
  addEdge(v, weight) {
    if (!weight) {
      weight = 1; 
    }

    if (!this.neighborTo(v)) {
      this._adjacency_list.push(new Edge(v, weight));
      this.degree += 1; 
      return true; 
    }
    return false; 
  }

  /*
   *  Remove the given vertex from this instance's adjacency list. Return true if Vertex v
   *  was removed from the adjacency list, false if it did not belong to this instance's 
   *  adjacency list.  
   *
   *  @return {bool}
   */
  removeEdge(v) {
    for (var i = 0; i < this._adjacency_list.length; i++) {
      if (this._adjacency_list[i].tail.is(v)) {
        this._adjacency_list.splice(i, 1);
        this.degree -= 1; 
        return true; 
      }
    }
    return false; 
  }

  /*
   *  Return true iff this vertex has an edge connected to the given vertex v.
   */
  neighborTo(v) {
    for (var i = 0; i < this._adjacency_list.length; i++) {
      if (this._adjacency_list[i].tail.is(v)) {
        return true;
      }
    }
    return false;
  }

  /*
   *  Replace the value of this vertex with the given one. 
   *  
   *  @param {Object} newValue
   */
  changeValue(newValue) {
    this.value = newValue; 
  }

  is(v) {
    return _.isEqual(this,v);
  }
};

/*
 *
 */
class Edge {
  constructor(tail, weight) {
    this.weight = weight || 1;
    this.tail = tail;
  }
}

/*
 *
 */
class Graph {
  constructor(directed) {
    this.vertices = [];
    this.isDirected = directed || false;
    this._isConnected = null; 
    this._isCyclic = null; 
    this._size = 0;
  }

  _update() {
    this._isConnected = null; 
    this._isCyclic = null; 
  }

  /*
   *  Return the number of vertices in the graph. 
   *
   *  @return {int}
   */
  order() {
    return this.vertices.length; 
  }
  /*
   *  Return the number of edges in the graph. 
   *
   *  @return {int}
   */
  size(){
    return this._size; 
  }

  /*
   *  Add a vertex to the graph. If a vertex is not given, a new vertex 
   *  is created with the argument given.  
   *
   *   @param {Vertex} || {Object} v The vertex to be added to the graph, or value of the vertex to be created. 
   */
  addVertex(v) {
    let temp_v = v;
    if (!(v instanceof Vertex)) {
      temp_v = new Vertex(v);
    }
    this.vertices.push(temp_v);
    this._update(); 
  }

  /*
   *  Remove the given vertex from the graph. If the given vertex is not
   *  a member of this graph, the graph is left unchanged. Return true if the 
   *  given vertex was removed from the graph, false if it did not belong to the graph. 
   *
   *  @param {Vertex} v The vertex to be removed
   *  @return {bool}
   */
  removeVertex(v) {
    let temp_v = v;
    if (!(v instanceof Vertex)) {
      temp_v = new Vertex(v);
    }
    for (let i = 0; i < this.vertices.length; i++) {
      if (this.vertices[i].is(temp_v)) {
        this.vertices.splice(i, 1);

        // vertex removed
        this._update(); 
        return true;
      }
    }

    // vertex not found
    return false;
  }

  /*
   *  Return the vertex in this graph with the given value. If no vertex exists
   *  in this graph with the given value, return null.
   *  
   *  @param {Object} value
   *  @return {Vertex} 
   */
  getVertex(value) {
    for (var i = 0; i < this.vertices.length; i++) {
      if (_.isEqual(this.vertices[i].value, value)) {
        return this.vertices[i];
      }
    }
    return null;
  }

  /*
   *  Add an edge between the given vertices with the given weight.
   *
   *   @param {Vertex} v1
   *   @param {Vertex} v2
   *   @param {number} [weight]
   */
  addEdge(v1, v2, weight) {
    if (!weight) {
      weight = 1; 
    }
    this.size = this.size + v1.addEdge(v2, weight);
    this._update(); 
    

    // If undirected graph, add the other direction as well
    if (!this.isDirected) {
      this.size = this.size + v2.addEdge(v1, weight);
      this._update(); 
    }
  }

  /*
   *  Return true iff there exists an edge (v1, v2) in this graph. Otherwise 
   *  return false.
   *
   *  @param {Vertex} v1
   *  @param {Vertex} v2
   *  @return {bool}
   */
  hasEdge(v1, v2) {
    return v1.neighborTo(v2);
  }

  /*
   *  Remove the any edges between the given vertices from the graph. If one of the
   *  given vertices does not exist in this graph, the graph is left unchanged.
   *
   *  @param {Vertex} v1
   *  @param {Vertex} v2
   */
  removeEdge(v1, v2) {
    isRemoved = v1.removeEdge(v2); 
    this.size = this.size - isRemoved; 
    this._update(); 

    // If graph is undirected, remove the other direction
    if(!this.isDirected) {
      isRemoved = v2.removeEdge(v1); 
      this.size = this.size - isRemoved; 
      this._update(); 
    }
  } 

  /*
   *  Return true if there exists a path between the two given vertices in the graph,
   *  otherwise return false. Note that if either of these vertices do not belong to
   *  this graph, false will be returned.
   *
   *  @param {Vertex} v1
   *  @param {Vertex} v2
   *  @return {bool}
   */
  pathExists(v1, v2) {
    return null; 
  }

  /*
   *  Return true iff there exists a cycle in the graph, otherwise return false.
   *
   *  @return {bool}
   */
  isCyclic() {
    return this._isCyclic; 
  }

  /*
   *  Return true iff there exists a path between every pair of vertices in the graph. 
   *  Otherwise return false.  
   *
   *  @return {bool}
   */
  isConnected() {
    return this.isConnected; 
  }

  /*
   *  Return true iff this graph is connected and asyclic, otherwise return false.
   *
   *  @return {bool}
   */
  isTree() {
    return !this.isCyclic() && isConnected();
  }

  /*
   *  Return a minimum spanning tree for the given graph if one exists. If the given graph
   *  is not connected null is returned. 
   *
   *  @return {Graph}
   */
  minimumSpanningTree() {

  }

  /*
   * Return the shortest path between vertex v1 and v2 if it exists. If no path exists between 
   * v1 and v2, an empty array is returned. 
   *
   * @param {Vertex} v1
   * @param {Vertex} v2
   * @return {Array of Vertices} path 
   */
  shortestPathBetween(v1, v2) {
    const compareNumbers = (a, b) => a._distance - b._distance;

    let q = new PriorityQueue({comparator: compareNumbers}); 
    let distance = 0; 
    v1._distance = 0; 
    let currentVertex = v1;  
    currentVertex._visited = true; 

    // Set all parents to null before hand
    for (let i = 0; i < this.vertices.length; i++) {
      this.vertices[i].parent = null;
      this.vertices[i].parent = Number.MAX_SAFE_INTEGER; 
    }

    q.queue(currentVertex);
    while (q.length != 0) {
      let currentVertex = q.dequeue();

      // Add all neigbours to the Queue, assuming they haven't been visited 
      for (let i = 0; i < currentVertex.degree; i++) {
        let curEdge = currentVertex._adjacency_list[i]; 
        let discoveredVertex = curEdge.tail; 
        let distance = Math.min(currentVertex._distance + curEdge.weight, discoveredVertex._distance); 
        
        // Update distance if we found a shorter path
        if (distance < discoveredVertex._distance) {
          discoveredVertex._distance = distance; 
          discoveredVertex._parent = currentVertex; 
        }

        // If vertex has no already been visited, add it to the queue 
        if (discoveredVertex._visited == false) {
          discoveredVertex._visited = true; 
          discoveredVertex._parent = currentVertex;  
          q.queue(discoveredVertex); 
        }
      } 
    }

    // Backtrack to get the path
    let path = [] 
    let node = v2; 
    while (node._parent != null) {
      path.unshift(node);
      node = node._parent;  
    }

    return path; 

  }

}

/*
 * 
 */
class FlowNetwork {
  constructor(source, terminal, graph) {
    this.source = source; 
    this.terminal = terminal; 
    this.graph = graph || new Graph(true); 
  }

  /*
   * Returns a set of edges with their flows, representing the maximum flow in this flow network. 
   * @return {List of Edges} 
   */
  maximumFlow() {

  }
}


exports.Vertex = Vertex;
exports.Edge = Edge;
exports.Graph = Graph;

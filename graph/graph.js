const _ = require('lodash');

/*
 *  
 */ 
class Vertex {
  constructor(value) {
    this.name = value;
    this.edges = [];
  }

  /*
   *  Add an edge connecting this vertex to the given vertex v to the adjacency list. 
   *  If this edge already exists, the adjacency list is left unchanged. Return true 
   *  if the edge was added, 0 if the edge already existed in the graph. 
   *
   *  @return {bool}
   */
  addEdge(v) {
    if (!this.neighborTo(v)) {
      this.edges.push(new Edge(v));
    }
  }

  /*
   *  Remove the edge connected to the given vertex from this vertex's adjacency list.
   *  If there isn't an edge connecting this vertex and v, the adjacency list is left
   *  unchanged. Returns true if removed, 0 if the edge did not exist in the graph. . 
   *
   *  @return {bool}
   */
  removeEdge(v) {
    for (var i = 0; i < this.edges.length; i++) {
      if (this.edges[i].neighbor.is(v)) {
        this.edges.splice(i, 1);
        return true; 
      }
    }
    return false; 
  }

  /*
   *  Return true iff this vertex has an edge connected to the given vertex v.
   */
  neighborTo(v) {
    for (var i = 0; i < this.edges.length; i++) {
      if (this.edges[i].neighbor.is(v)) {
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
  constructor(neighbor) {
    this.weight = arguments[1] || 0;
    this.neighbor = neighbor;
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
    this.size = 0;
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
    return this.size; 
  }

  /*
   *  Add a vertex to the graph. If a vertex is not given, a new vertex 
   *  is created with the argument given.  
   *
   *   @param {Vertex} v The vertex to be added to the graph.
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
   *  a member of this graph, the graph is left unchanged.
   *
   *   @param {Vertex} v The vertex to be removed
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
   *  Return the vertex in this graph with the given name. If no vertex exists
   *  in this graph with the given name, return null.
   */
  getVertex(name) {
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
   *   @param {number} weight
   */
  addEdge(v1, v2) {
    this.size = this.size + v1.addEdge(v2);
    this._update(); 
    

    // If undirected graph, add the other direction as well
    if (!this.isDirected) {
      this.size = this.size + v2.addEdge(v1);
      this._update(); 
    }
  }

  /*
   *  Return true iff there exists an edge (v1, v2) in this graph. Otherwise 
   *  return false.
   *
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
    this.size = this.size - v1.removeEdge(v2); 
    this._update(); 

    // If graph is undirected, remove the other direction
    if(!this.isDirected) {
      this.size = this.size - v2.removeEdge(v2); 
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

  }

  /*
   *  Return true iff there exists a cycle in the graph, otherwise return false.
   *
   *  @return {bool}
   */
  isCyclic() {

  }

  /*
   *  Return true iff there exists a path between every pair of vertices in the graph. 
   *  Otherwise return false.  
   *
   *  @return {bool}
   */
  isConnected() {

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
   *  is not connected an empty list is returned. 
   *
   *  @return {List of Vertices}
   */
  minimumSpanningTree() {

  }

  /*
   * Return the shortest path between vertex v1 and v2 if it exists. If no path exists between 
   * v1 and v2, an empty array is returned. 
   *
   * @param {Vertex} v1
   * @param {Vertex} v2
   * @return {List of Vertices} path 
   */
  shortestPathBetween(v1, v2) {

  }

}

exports.Vertex = Vertex;
exports.Edge = Edge;
exports.Graph = Graph;

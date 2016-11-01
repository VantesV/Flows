var Vertex = function(name) {
	this.name = name; 
	this.edges = [] 
}; 

var Edge = function(neigbor) {
	this.weight = 0; 
	this.neigbor = neighbor; 
}

var Graph = function() {
	this.vertices = []; 
	this.isFlowNetwork = false; 
	this.isDirected = false; 
}

/*
	Add a vertex with the given name to the graph. 
*/
Graph.prototype.addVertex(name) {
	newVertex = new Vertex(name); 
	this.vertices.push(newVertex); 
}

/*
	Remove a vertex with the given name in the graph 
*/
Graph.prototype.removeVertex(name) {

}

/*
	Add a edge between vertices v1 and v2 with the given weight.
*/
Graph.prototype.addEdge(v1, v2, weight) {
	if (this.isDirected == true) {
		v1.edges.push(new Edge(v2))
	}
	newEdge = []; 
	v1.edges.push(newEdge); 
	v2.edges.push([v1, weight])

}

/*
	Remove the given edge from the graph 
*/

/*
	Returns the index of the given vertex in the Graph's vertex list. 
*/
Graph.prototype.findVertexIndex(v) {

}

/*
	Return True iff there is a path betweeen vertex v1 and vertex v2 
*/
Graph.prototype.pathExists(v1, v2) {
	return false; 
}


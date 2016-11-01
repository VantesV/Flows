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
 *	Add a vertex with the given name to the graph. 
 *
 * 	@param {string} name The desired name of the vertex. 
 */
Graph.prototype.addVertex(name) {
	/* 
		NOTE: Add error checking for vertices with that name already? 
	*/
	this.vertices.push(new Vertex(name))
}

/*
 *	Remove a vertex with the given name from the graph. If no vertex exists 
 * 	with the given name, the graph will remain unchanged.  
 *
 * 	@param {string} name The name of the vertex to be removed. 
 */
Graph.prototype.removeVertex(name) {
	vertex = this.getVertex(name)
}

/*
 *	Return the vertex with the given name. If no vertex exists with the given name
 *	return null. 
 *
 * 	@param {string} name The desired name of the vertex. 
 */
Graph.prototype.getVertex(name) {
	vertex = null; 
	for (i = 0; i < this.vertices.length; i++) {
		if (this.vertices[i].name === name) {
			vertex = vertices[i]; 
		}
	}

	return vertex 
}

/*
 *	Add an edge between the given vertices with the given weight. 
 *
 * 	@param {Vertex} v1 
 * 	@param {Vertex} v2
 *	@param {number} weight
 */
Graph.prototype.addEdge(v1, v2, weight) {

}

/*
 *	Remove the given edge from the graph. If this edge does not exist in the 
 * 	graph, the graph is left unchanged. 
 *
 * 	@param {Edge} e The edge to be removed
 */
Graph.prototype.removeEdge(e) {

}

/*
 *	Return true if there exists a path between the two given vertices in the graph, 
 * 	otherwise return false. Note that if either of these vertices do not belong to 
 *	this graph, false will be returned. 
 *
 * 	@param {Vertex} v1 
 *	@param {Vertex} v2 
 */
Graph.prototype.pathExists(v1, v2) {

}


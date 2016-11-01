var Vertex = function(name) {
	this.name = name; 
	this.edges = [] 
}; 

/*
 *	Return true iff the given vertex is equivalent to this. 
 *
 * 	@param {Vertex} v
 */
Vertex.prototype.equals(v) {

}

var Edge = function(neigbor) {
	this.weight = 0; 
	this.neigbor = neighbor; 
}

/*
 *	Return True iff the given edge is equivalent to this. 
 *
 *	@param {Edge} e
*/
Edge.prototype.equals(e) {

}

var Graph = function() {
	this.vertices = []; 
	this.isFlowNetwork = false; 
	this.isDirected = false; 
}

/*
 * 	Return true iff the given Graph is equivalent to this. 
 *
 * @param {Graph} g
*/
Graph.prototype.equals(g) {

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
	vertex = this.getVertex(name);
	index = this.vertices.indexOf(vertex); 
	this.vertices.splice(index, 1); 
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

	v1.edges.push(new Edge(v2, weight)); 

	// If undirected graph, add the other direction as well 
	if (!this.isDirected) {
		v2.edges.push(new Edge(v1, weight))
	}
}

/*
 *	Remove the any edges between the given vertices from the graph. If one of the
 *  given vertices does not exist in this graph, the graph is left unchanged. 
 *
 * 	@param {Vertex} v1 
 *	@param {Vertex} v2
 */
Graph.prototype.removeEdge(v1, v2) {
	for (i = 0; i < v1.edges.length; i++) {
		if (v1.edges[i].neigbor === v2) {
			v1.edges.splice(i, 1);
			break; 
		}
	}

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
 *	Return true if there exists a path between the two given vertices in the graph, 
 * 	otherwise return false. Note that if either of these vertices do not belong to 
 *	this graph, false will be returned. 
 *
 * 	@param {Vertex} v1 
 *	@param {Vertex} v2 
 */
Graph.prototype.pathExists(v1, v2) {

}

console.log("Punani");

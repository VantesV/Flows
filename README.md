# Flows

> A Javascript API that allows you to build and manage flow networks and graph data structures. 

## API Reference 

### Graph 

This is the class for the graph data structure. 

#### Instance Variables 

```javascript
vertices 
```
A list of Vertex object, representing all the vertices in the graph. 

```javascript
isDirected
```
A boolean denoting whether this graph is directed or undirected. 

#### Methods


```javascript
order()
```
Returns the number of vertices in the graph.

@return {int}


```javascript
size()
```
Returns the number of edges in the graph. 

@return {int} 


```javascript
addVertex(v)
```
Adds a vertex to the graph. If a vertex is not given, a new vertex is 
created with the argument given as the value of that Vertex.

@param {Vertex} || {Object}


```javascript
removeVertex(v)
```
Remove the given vertex from the graph. If the given vertex is not a 
member of this graph, the graph is left unchanged. Returns true on successful removal,
false if the vertex did not belong to the graph. 

@param {Vertex} v The vertex to be removed

@return {bool} 

```javascript
getVertex(value)
```
Return the vertex in this graph with the given value. If no vertex exists 
in this graph with the given value, returns null. 

@param {Object}


```javascript
addEdge(v1, v2, weight)
```
Add an edge between the given vertices with the given weight. If no weight is provided, the 
edge is initialized with weight 1. Note that if the edge (v1, v2) already exists in the 
graph, the graph is left unchanged. 

@param {Vertex} v1

@param {Vertex} v2

@param {number} weight

```javascript 
hasEdge(v1, v2)
```
Returns true if there exists an edge (v1, v2) in this graph. Otherwise returns false; 

@param {Vertex} v1

@param {Vertex} v2

@return {bool}


```javascript
removeEdge(v1, v2)
```
If the edge (v1, v2) exists in the graph, the edge is removed. If no edge exists between v1 
an v2 the graph is left unchanged. Returns true when an edge has been removed, false if the
edge does not exist in this graph. 

@param {Vertex} v1

@param {Vertex} v2

@return {bool} 

```javascript
pathExists(v1, v2)
```

Returns true if there exists a path between the given vertices, otherwise returns
false. Note that if either v1 or v2 do not belong to the graph, false will be returned. 

@param {Vertex} v1

@param {Vertex} v2

@return {bool}


```javascript
isCyclic()
```
Returns true if there exists a cycle in the graph, otherwise return false. 

@return {bool}

```javascript
isConnected()
```
Returns true iff there exists a path between every pair of vertices in the graph. Otherwise
return false. 

@return {bool}

```javascript
isTree()
```
Returns true if this graph is a tree, otherwise return false. Recall that a graph is a tree 
if it is connected and asyclic. 

@return {bool}

```javascript
minimumSpanningTree() 
```
Returns a minimum spanning tree for the given graph if one exists. If the given graph is not
connected, null is returned. 

@return {Graph}

```javascript
shortestPathBetween(v1, v2) 
```
Returns the shortest path between vertex v1 and v2 if it exists. If no path exists between 
v1 and v2, an empty array is returned. 

@param {Vertex} v1

@param {Vertex} v2

@return {Array of Vertices} path



#### Directed Graph

To create a directed graph, pass in true into the constructor. 

```javascript
Graph(true); 
```

#### Undirected Graph

The graph class initializes the graph as an undirected graph by default if no argument is 
passed into the constructor. Both of the methods shown below are valid ways of initializing 
an undirected graph. 

```javascript
Graph(false)
Graph()
```

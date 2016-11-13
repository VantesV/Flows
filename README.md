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
member of this graph, the graph is left unchanged. 
@param {Vertex} v The vertex to be removed

```javascript
getVertex(value)
```
Return the vertex in this graph with the given value. If no vertex exists 
in this graph with the given value, returns null. 
@param {Object}

```javascript
addEdge(v1, v2, weight)
```
Add an edge between the given vertices with the (optional) weight argument provided. 
@param {Vertex} v1
@param {Vertex} v2
@param {number} weight

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

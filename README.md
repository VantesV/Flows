# Flows

> A Javascript API that allows you to build and manage flow networks and graph data structures. 

## Table of Contents

* [API Reference] (#api-reference)
  * [Graph] (#graph)
    * [Instance Variables] (#instance-variables)
    * [Methods] (#methods)
    * [Directed Graphs] (#directed-graphs)
    * [Undirected Graphs] (#undirected-graphs)
  * [Vertex] (#vertex) 
    * [Instance Variables] (#instance-variables-1) 
    * [Methods] (#methods-1)
* [Coming Soon] (#coming-soon)
  

## API Reference 

### Graph 

This is the class for the graph data structure. A graph structure contains a set of vertices, and a set of pairs of vertices
called edges. Vertices can be seen as a set of objects, and edges can be seen as pairwise relations between two objects. A graph can also be directed or undirected, which is a further abstraction that allows us to model non commutative pairwise relations between vertices. 

Graphs can be used to model a variety of problems, for example a graph can model a map with the vertices representing cities and edges can represent roads between two cities. If this graph is directed, a directed edge can represent a one way road. 

#### Instance Variables 

```javascript
vertices 
```
An array of Vertex objects, representing all the vertices in the graph. 

```javascript
isDirected
```
A boolean denoting whether this graph is directed or undirected. 

#### Methods


```javascript
order()
```
Returns the number of vertices in the graph.  

_Return_: int  


```javascript
size()
```
Returns the number of edges in the graph. 

_Return_: int  


```javascript
addVertex(v)
```
Adds a vertex to the graph. If a non Vertex argument is provided, a new vertex 
is created with value v and is added to the graph.   

_Parameters_: Vertex || Object v  


```javascript
removeVertex(v)
```
Remove the given vertex from the graph. If the given vertex is not a 
member of this graph, the graph is left unchanged. Returns true on successful removal,
false if the vertex did not belong to the graph.  

_Parameters_: Vertex v    
_Return_: bool  


```javascript
getVertex(value)
```
Return the vertex in this graph with the given value. If no vertex exists 
in this graph with the given value, returns null.  

_Parameters_: Object value  


```javascript
addEdge(v1, v2, weight)
```
Add an edge between the given vertices with the given weight. If no weight is provided, the 
edge is initialized with weight 1. Note that if the edge (v1, v2) already exists in the 
graph, the graph is left unchanged. Return true if edge added, false if the edge already 
exists in the graph.  

_Parameters_: Vertex v1, Vertex v2, (Optional) Number weight  
_Return_: bool

```javascript 
hasEdge(v1, v2)
```
Returns true if there exists an edge (v1, v2) in this graph. Otherwise returns false.  

_Parameters_: Vertex v1, Vertex v2  
_Return_: bool  



```javascript
removeEdge(v1, v2)
```
If the edge (v1, v2) exists in the graph, the edge is removed. If no edge exists between v1 
an v2 the graph is left unchanged. Returns true when an edge has been removed, false if the
edge does not exist in this graph.  
_Parameters_: Vertex v1, Vertex v2  
_Return_: bool  


```javascript
pathExists(v1, v2)
```
Returns true if there exists a path between the given vertices, otherwise returns
false. Note that if either v1 or v2 do not belong to the graph, false will be returned.  

_Parameters_: Vertex v1, Vertex v2  
_Return_: bool  


```javascript
isCyclic()
```
Returns true if there exists a cycle in the graph, otherwise return false.  

_Return_: bool  


```javascript
isConnected()
```
Returns true iff there exists a path between every pair of vertices in the graph. Otherwise
return false.  

_Return_: bool  


```javascript
isTree()
```
Returns true if this graph is a tree, otherwise return false. Recall that a graph is a tree 
if it is connected and asyclic.  

_Return_: bool  


```javascript
minimumSpanningTree() 
```
Returns a minimum spanning tree for the given graph if one exists. If the given graph is not
connected, null is returned. 

_Return_: bool    


```javascript
shortestPathBetween(v1, v2) 
```
Returns the shortest path between vertex v1 and v2 if it exists. If no path exists between 
v1 and v2, an empty array is returned. Note that the current version only supports positive 
edge weighted graphs.  

_Parameters_: Vertex v1, Vertex v2
_Return_: Array of Vertex objects  


#### Directed Graphs

To create a directed graph, pass in true into the constructor. 

```javascript
Graph(true); 
```

#### Undirected Graphs

The graph class initializes the graph as an undirected graph by default if no argument is 
passed into the constructor. Both of the methods shown below are valid ways of initializing 
an undirected graph. 

```javascript
Graph(false)
Graph()
```

### Vertex 

This class is for the vertex object. This class is meant to be used in conjunction with
the graph class. However, the graph class allows you to manage and create vertices without
having direct access to the Vertex class if you choose. Both options are available for 
the convenience of the user. 

#### Instance Variables 

```javascript
value
```  
The instance variable value is an optional Object that is associated with this vertex. 
You may use this value as a simple ID, or as storage for the object. If no object is 
provided, this.value is set to null be default. 


#### Methods

```javascript
changeValue(newValue)
```  
Replaces the value of this vertex with the given Object newValue. 

_Parameters_: Object newValue 

```javascript
degree()
```
Returns the number of outgoing edges this vertex has. 

_Return_: Number degree

```javascript
is(v)
```  
Return true if this vertex is equivalent to the given vertex v.  

_Parameters_: Vertex v  
_Return_: bool  

## Coming Soon

- Flow Network data structure with the ability to calculate maximum flows
- Topological Sort 
- Depth First Search 
- Shortest Path with negative edge weights 

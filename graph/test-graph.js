const test = require('ava').test;
const _ = require('lodash');
const graph = require('./graph');

const Vertex = graph.Vertex;
const Edge = graph.Edge;
const Graph = graph.Graph;


test('Makes Vertices', t => {
  let v = new Vertex(1);
  t.true(v.value === 1);
});

test('Makes Edges', t => {
  let v = new Vertex(1);
  let u = new Vertex(2);
  let edge_u = new Edge(u);
  v.addEdge(u);
  t.deepEqual(v._adjacency_list[0], edge_u);
});

test('Edges have weight', t => {
  let v = new Vertex(1);
  let u = new Vertex(2);
  v.addEdge(u);
  let w = new Vertex(3); 
  v.addEdge(w, 5); 

  t.true(v._adjacency_list[0].weight === 1 && v._adjacency_list[1].weight == 5);
});

test('Edges can be removed', t => {
  let v = new Vertex(1);
  let u = new Vertex(2);
  v.addEdge(u);
  v.removeEdge(u);

  t.true(v._adjacency_list.length === 0 && v.degree == 0);
});

test('Edges can be added with correct degree', t => {
  let g = new Graph(); 
  let v = new Vertex(1); 
  let u = new Vertex(2); 
  g.addVertex(v); 
  g.addVertex(u); 
  let before = v.degree; 
  g.addEdge(v, u); 
  let after = v.degree; 
  t.true(v._adjacency_list.length == 1 && before == 0 && after == 1 && v._adjacency_list[0].tail.is(u)); 
});

test('Edges are neighbors', t => {
  let v = new Vertex(1);
  let u = new Vertex(2);
  v.addEdge(u);

  t.true(v.neighborTo(u));
});

test('Independent vertices are not neighbors', t => {
  let v = new Vertex(1);
  let u = new Vertex(2);

  t.false(v.neighborTo(v));
});

test.todo('Edges take weight');

test('Vertices can be added by value', t => {
  let g = new Graph();
  let u = new Vertex(1);
  g.addVertex(1);
  t.deepEqual(u, g.vertices[0]);
});

test('Vertices can be added by Vertex', t => {
  let g = new Graph();
  let u = new Vertex(1);
  g.addVertex(u);
  t.deepEqual(u, g.vertices[0]);
});

test('Added vertices cannot be changed outside', t => {
  let g = new Graph();
  let u = new Vertex(1);
  g.addVertex(u);
  u = 'hello';
  t.true(g.vertices[0] instanceof Vertex);
});

test('Vertices are removed from graphs by value', t => {
  let g = new Graph();
  let u = new Vertex(1);
  g.addVertex(1);
  g.removeVertex(1);
  t.true(g.vertices.length === 0);
});

test('Vertices are removed from graphs by Vertex', t => {
  let g = new Graph();
  let u = new Vertex(1);
  g.addVertex(u);
  g.removeVertex(u);
  t.true(g.vertices.length === 0);
});

test('Edges added with weight', t => {
  let g = new Graph(); 
  let u = new Vertex(1); 
  g.addVertex(u);
  let v = new Vertex(2);
  g.addVertex(v); 
  g.addEdge(u, v, 3); 
  t.true(u._adjacency_list[0].weight == 3 && u._adjacency_list[0].tail.is(v)); 

})

test('Shortest Path between vertices with no path is 0', t => {
  let g = new Graph();
  let u = new Vertex(1);
  let v = new Vertex(2);
  let list = g.shortestPathBetween(u, v);
  t.true(list.length === 0);
});

test('Shortest Path between vertices in simple graph', t => {
  let g = new Graph(); 
  let u = new Vertex(1); 
  let v = new Vertex(2); 
  let w = new Vertex(3); 
  g.addEdge(u, v);
  g.addEdge(v, w);  
  let list = g.shortestPathBetween(u,w); 
  let expected = [v, w]; 
  t.true(list.length == 2 && _.isEqual(list, expected) && w._distance == 2); 
});

test('Shortest Path non trivial graph', t => {
  let g = new Graph(); 
  let u = new Vertex(1); 
  let v = new Vertex(2); 
  let w = new Vertex(3); 
  let z = new Vertex(4); 
  g.addEdge(u, v, 1);
  g.addEdge(u, w, 2); 
  g.addEdge(v, z, 5);
  g.addEdge(w, z, 1); 
  let expected = [w, z]; 
  let actual = g.shortestPathBetween(u, z); 
  t.true(_.isEqual(expected, actual) && z._distance == 3);   
});

test.todo('has edge');
test.todo('path exists');
test.todo('is connected');
test.todo('is cyclic');
test.todo('is Tree');

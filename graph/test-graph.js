const test = require('ava').test;

const graph = require('./graph');

const Vertex = graph.Vertex;
const Edge = graph.Edge;
const Graph = graph.Graph;


test('Makes Vertices', t => {
  let v = new Vertex(1);
  t.true(v.name === 1 && !v.edge);
});

test('Makes Edges', t => {
  let v = new Vertex(1);
  let u = new Vertex(2);
  let edge_u = new Edge(u);
  v.addEdge(u);
  t.deepEqual(v.edges[0], edge_u);
});

test('Edges have weight', t => {
  let v = new Vertex(1);
  let u = new Vertex(2);
  v.addEdge(u);

  t.true(v.edges[0].weight === 0);
});

test('Edges can be removed', t => {
  let v = new Vertex(1);
  let u = new Vertex(2);
  v.addEdge(u);
  v.removeEdge(u);

  t.true(v.edges.length === 0);
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

test.todo('has edge');
test.todo('path exists');
test.todo('is connected');
test.todo('is cyclic');
test.todo('is Tree');

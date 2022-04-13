# Shortest path

# Problem

Write a function, *shortestPath*, that takes in an array of edges for an undirected graph and two nodes (_nodeA_, *nodeB*). The function should return the length of the shortest path between *A* and *B*. Consider the length as the number of edges in the path, not the number of nodes. If there is no path between *A* and *B*, then return -1.

### test_00:

```
const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

shortestPath(edges, 'w', 'z'); // -> 2

```

### test_01:

```
const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

shortestPath(edges, 'y', 'x'); // -> 1

```

### test_02:

```
const edges = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];

shortestPath(edges, 'a', 'e'); // -> 3

```

### test_03:

```
const edges = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];

shortestPath(edges, 'e', 'c'); // -> 2

```

### test_04:

```
const edges = [
  ['a', 'c'],
  ['a', 'b'],
  ['c', 'b'],
  ['c', 'd'],
  ['b', 'd'],
  ['e', 'd'],
  ['g', 'f']
];

shortestPath(edges, 'b', 'g'); // -> -1

```

### test_05:

```
const edges = [
  ['c', 'n'],
  ['c', 'e'],
  ['c', 's'],
  ['c', 'w'],
  ['w', 'e'],
];

shortestPath(edges, 'w', 'e'); // -> 1

```

### test_06:

```
const edges = [
  ['c', 'n'],
  ['c', 'e'],
  ['c', 's'],
  ['c', 'w'],
  ['w', 'e'],
];

shortestPath(edges, 'n', 'e'); // -> 2

```

### test_07:

```
const edges = [
  ['m', 'n'],
  ['n', 'o'],
  ['o', 'p'],
  ['p', 'q'],
  ['t', 'o'],
  ['r', 'q'],
  ['r', 's']
];

shortestPath(edges, 'm', 's'); // -> 6

```

## Successful Code

```js
const shortestPath = (edges, nodeA, nodeB) => {
  const graph = generateGraph(edges);

  console.log(graph);

  const visitedNodes = new Set();
  let count = 0;
  const queue = [{ node: nodeA, level: count }];
  while (queue.length > 0) {
    const currentNode = queue.shift(); // {node: w, level: 0}
    console.log(currentNode);
    visitedNodes.add(currentNode.node);

    if (currentNode.node === nodeB) return currentNode.level;

    for (const neighbor of graph[currentNode.node]) {
      if (!visitedNodes.has(neighbor))
        queue.push({ node: neighbor, level: currentNode.level + 1 });
    }
    count += 1;
  }
  return -1;
};

function generateGraph(edges) {
  const graph = {};
  for (const edge of edges) {
    const [node1, node2] = edge;
    if (!graph[node1]) graph[node1] = [];
    if (!graph[node2]) graph[node2] = [];
    graph[node1].push(node2);
    graph[node2].push(node1);
  }
  return graph;
}
```

## Complexity

- e = edges
- n = nodes
  **Time**: `O(e)`
  **Space**: `O(n)`

## Steps - Iterative - depth

1. Build graph
2. Use BFS to touch all nodes at each level extending out from `nodeA`.
3. If you reach `nodeB` return the level value.
4. If node hasn't been visited push to queue the node and distance (count)

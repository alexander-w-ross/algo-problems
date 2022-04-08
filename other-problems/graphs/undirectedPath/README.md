# Undirected path

# Problem

Write a function, *undirectedPath*, that takes in an array of edges for an undirected graph and two nodes (_nodeA_, *nodeB*). The function should return a boolean indicating whether or not there exists a path between *nodeA* and *nodeB*.

### test_00:

```
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

undirectedPath(edges, 'j', 'm'); // -> true

```

### test_01:

```
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

undirectedPath(edges, 'm', 'j'); // -> true

```

### test_02:

```
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

undirectedPath(edges, 'l', 'j'); // -> true

```

### test_03:

```
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

undirectedPath(edges, 'k', 'o'); // -> false

```

### test_04:

```
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

undirectedPath(edges, 'i', 'o'); // -> false

```

### test_05:

```
const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];

undirectedPath(edges, 'a', 'b'); // -> true

```

### test_06:

```
const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];

undirectedPath(edges, 'a', 'c'); // -> true

```

### test_07:

```
const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];

undirectedPath(edges, 'r', 't'); // -> true

```

### test_08:

```
const edges = [
  ['b', 'a'],
  ['c', 'a'],
  ['b', 'c'],
  ['q', 'r'],
  ['q', 's'],
  ['q', 'u'],
  ['q', 't'],
];

undirectedPath(edges, 'r', 'b'); // -> false

```

### test_09:

```
const edges = [
  ['s', 'r'],
  ['t', 'q'],
  ['q', 'r'],
];

undirectedPath(edges, 'r', 't'); // -> true

```

## Successful Code

```js
const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = generateGraph(edges);
  const stack = [nodeA];
  const visitedNodes = new Set();
  while (stack.length > 0) {
    const current = stack.pop();
    if (current === nodeB) return true;
    visitedNodes.add(current);
    for (let neighbor of graph[current]) {
      if (!visitedNodes.has(neighbor)) stack.push(neighbor);
    }
  }
  return false;
};

const generateGraph = (edges) => {
  const graph = new Object();
  for (let edge of edges) {
    const [node1, node2] = edge;
    if (!(node1 in graph)) graph[node1] = [];
    if (!(node2 in graph)) graph[node2] = [];
    graph[node1].push(node2);
    graph[node2].push(node1);
  }

  return graph;
};
```

## Complexity

- e = edges
- n = nodes
  **Time**: `O(e)`
  **Space**: `O(n)`

## Steps - Iterative - breadth / depth

1. Convert `edges` to adjacency list (graph)
2. Setup regular code for breadth/depth.
3. For each `src` value, use a for loop to loop through its _adjacency list_ and push those values to the stack/queue.
4. if `current` node is not in the `visited` _set_, add it so that we can check if we've already visited a node.
5. return `true` if `neighbour === dst`

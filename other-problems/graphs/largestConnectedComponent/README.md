# Largest Connected Component

# Problem

Write a function, *largestComponent*, that takes in the adjacency list of an undirected graph. The function should return the size of the largest connected component in the graph.

### test_00:

```
largestComponent({
  0: ['8', '1', '5'],
  1: ['0'],
  5: ['0', '8'],
  8: ['0', '5'],
  2: ['3', '4'],
  3: ['2', '4'],
  4: ['3', '2']
}); // -> 4

```

### test_01:

```
largestComponent({
  1: ['2'],
  2: ['1','8'],
  6: ['7'],
  9: ['8'],
  7: ['6', '8'],
  8: ['9', '7', '2']
}); // -> 6

```

### test_02:

```
largestComponent({
  3: [],
  4: ['6'],
  6: ['4', '5', '7', '8'],
  8: ['6'],
  7: ['6'],
  5: ['6'],
  1: ['2'],
  2: ['1']
}); // -> 5

```

### test_03:

```
largestComponent({}); // -> 0

```

### test_04:

```
largestComponent({
  0: ['4','7'],
  1: [],
  2: [],
  3: ['6'],
  4: ['0'],
  6: ['3'],
  7: ['0'],
  8: []
}); // -> 3

```

## Successful Code

```js
const largestComponent = (graph) => {
  const graphNodes = Object.keys(graph);
  if (graphNodes.length === 0) return 0;

  const visitedNodes = new Set();
  let count = 0;
  let max = 0;
  for (const graphNode of graphNodes) {
    if (!visitedNodes.has(graphNode)) {
      const stack = [graphNode];

      while (stack.length > 0) {
        const curr = stack.pop();

        if (!visitedNodes.has(curr)) {
          visitedNodes.add(curr);
          count += 1;

          for (const neighbor of graph[curr]) {
            if (!visitedNodes.has(neighbor)) stack.push(neighbor);
          }
        }
      }
    }
    max = count > max ? count : max;
    count = 0;
  }
  return max;
};
```

## Complexity

- e = edges
- n = nodes
  **Time**: `O(e)`
  **Space**: `O(n)`

## Steps - Iterative - depth

1. Since its possible to have an unreachable node by just picking a node to start at and doing a traversal, you will have to touch each node (key) in the given graph.
2. Start a for loop over each node (key) in the graph that isn't in `visitedNodes`
3. For each node, do a regular depth-first traversal. For each node visited, add it to a `visitedNode` set, and if you have visited that node before (its in the set) just skip it, otherwise increment `count` by one

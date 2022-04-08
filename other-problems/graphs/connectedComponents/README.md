# Connected Components

# Problem

Write a function, *connectedComponentsCount*, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.

### test_00:

```
connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}); // -> 2

```

### test_01:

```
connectedComponentsCount({
  1: [2],
  2: [1,8],
  6: [7],
  9: [8],
  7: [6, 8],
  8: [9, 7, 2]
}); // -> 1

```

### test_02:

```
connectedComponentsCount({
  3: [],
  4: [6],
  6: [4, 5, 7, 8],
  8: [6],
  7: [6],
  5: [6],
  1: [2],
  2: [1]
}); // -> 3

```

### test_03:

```
connectedComponentsCount({}); // -> 0

```

### test_04:

```
connectedComponentsCount({
  0: [4,7],
  1: [],
  2: [],
  3: [6],
  4: [0],
  6: [3],
  7: [0],
  8: []
}); // -> 5

```

## Successful Code

```js
const connectedComponentsCount = (graph) => {
  if (Object.keys(graph).length === 0) return 0;

  let count = 0;

  const visitedNodes = new Set();
  const graphNodes = Object.keys(graph);
  for (let _node of graphNodes) {
    const node = parseInt(_node);
    const stack = [node];
    if (!visitedNodes.has(node)) {
      while (stack.length > 0) {
        const curr = stack.pop();
        visitedNodes.add(curr);

        for (let neighbor of graph[curr]) {
          if (!visitedNodes.has(neighbor)) stack.push(neighbor);
        }
      }
      count += 1;
    }
  }
  return count;
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
3. For each node, do a regular depth-first traversal. For each node visited, add it to a `visitedNode` set, and if you have visited that node before (its in the set) just skip it.
4. Each time the stack gets to zero, increment the counter by 1 because you've reach all the nodes.

Setup regular code for breadth/depth. 2. For each `src` value, use a for loop to loop through its _adjacency list_ and push those values to the stack/queue. 3. return `true` if `neighbour === dst`

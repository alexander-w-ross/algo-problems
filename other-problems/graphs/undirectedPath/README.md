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
const hasPath = (graph, src, dst) => {
  // iterative - depth
  if (!graph || !src) return false;
  if (src === dst) return true;
  const stack = [src];

  while (stack.length > 0) {
    const curr = stack.pop();
    if (curr === dst) return true;

    for (let neighbour of graph[curr]) {
      stack.push(neighbour);
    }
  }
  return false;

  // iterative - breadth
  if (!graph || !src) return false;
  if (src === dst) return true;
  const queue = [src];

  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr === dst) return true;

    for (let neighbour of graph[curr]) {
      queue.push(neighbour);
    }
  }
  return false;

  // recursive
  if (src === dst) return true;
  for (let neighbour of graph[src]) {
    if (hasPath(graph, neighbour, dst)) return true;
  }
  return false;
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

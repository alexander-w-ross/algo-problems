# Longest Path

# Problem

Write a function, *longestPath*, that takes in an adjacency list for a directed acyclic graph. The function should return the length of the longest path within the graph. A path may start and end at any two nodes. The length of a path is considered the number of *edges* in the path, not the number of *nodes*.

### test_00:

```
const graph = {
  a: ['c', 'b'],
  b: ['c'],
  c: []
};

longestPath(graph); // -> 2

```

### test_01:

```
const graph = {
  a: ['c', 'b'],
  b: ['c'],
  c: [],
  q: ['r'],
  r: ['s', 'u', 't'],
  s: ['t'],
  t: ['u'],
  u: []
};

longestPath(graph); // -> 4

```

### test_02:

```
const graph = {
  h: ['i', 'j', 'k'],
  g: ['h'],
  i: [],
  j: [],
  k: [],
  x: ['y'],
  y: []
};

longestPath(graph); // -> 2

```

### test_03:

```
const graph = {
  a: ['b'],
  b: ['c'],
  c: [],
  e: ['f'],
  f: ['g'],
  g: ['h'],
  h: []
};

longestPath(graph); // -> 3

```

## Successful Code

```js
const longestPath = (graph) => {
  let longestPath = -Infinity;

  for (const keyNode of Object.keys(graph)) {
    const queue = [[keyNode, 0]];
    while (queue.length > 0) {
      const curr = queue.shift();
      const [currNode, distance] = curr;

      for (const neighbor of graph[currNode]) {
        queue.push([neighbor, distance + 1]);
      }

      longestPath = distance > longestPath ? distance : longestPath;
    }
  }
  return longestPath;
};
```

## Complexity

- n = node
- e = edges
  **Time**: `O(e)`
  **Space**: `O(n)`

## Steps - Iterative - breadth first traversal

1. Set up breadth-first traversal.
2. At the end of each iteration of `while` loop, check and see if the distance
   you've travalled is greater than the `longestPath` so far.
3. You have to loop through each key in the adjacency list because there could be disconnected components.

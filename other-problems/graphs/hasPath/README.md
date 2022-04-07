# Has Path

# Problem

Write a function, *hasPath*, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (_src_, *dst*). The function should return a boolean indicating whether or not there exists a directed path between the *source* and *destination* nodes.

_Hey. This is our first graph problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ_

### test_00:

```
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph, 'f', 'k'); // true

```

### test_01:

```
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph, 'f', 'j'); // false

```

### test_02:

```
const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

hasPath(graph, 'i', 'h'); // true

```

### test_03:

```
const graph = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],
};

hasPath(graph, 'v', 'w'); // true

```

### test_04:

```
const graph = {
  v: ['x', 'w'],
  w: [],
  x: [],
  y: ['z'],
  z: [],
};

hasPath(graph, 'v', 'z'); // false

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

1. Setup regular code for breadth/depth.
2. For each `src` value, use a for loop to loop through its _adjacency list_ and push those values to the stack/queue.
3. return `true` if `neighbour === dst`

## Steps - recursive

1. Set the base case where if `src===dst` return true.
2. loop through each of `src` neighbours and call `hasPath()` function on each neighbour. If any of those calls return true, then bubble up the `true` return to the top.
3. else return false.

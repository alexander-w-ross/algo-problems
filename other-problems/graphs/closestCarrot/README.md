# Closest Carrot

# Problem

Write a function, *closestCarrot*, that takes in a grid, a starting row, and a starting column. In the grid, 'X's are walls, 'O's are open spaces, and 'C's are carrots. The function should return a number representing the length of the shortest path from the starting position to a carrot. You may move up, down, left, or right, but cannot pass through walls (X). If there is no possible path to a carrot, then return -1.

### test_00:

```
const grid = [
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['O', 'X', 'C', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['C', 'O', 'O', 'O', 'O'],
];

closestCarrot(grid, 1, 2); // -> 4

```

### test_01:

```
const grid = [
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['O', 'X', 'C', 'O', 'O'],
  ['O', 'X', 'X', 'O', 'O'],
  ['C', 'O', 'O', 'O', 'O'],
];

closestCarrot(grid, 0, 0); // -> 5

```

### test_02:

```
const grid = [
  ['O', 'O', 'X', 'X', 'X'],
  ['O', 'X', 'X', 'X', 'C'],
  ['O', 'X', 'O', 'X', 'X'],
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'X', 'X', 'X', 'X'],
  ['O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'C', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O'],
];

closestCarrot(grid, 3, 4); // -> 9

```

### test_03:

```
const grid = [
  ['O', 'O', 'X', 'O', 'O'],
  ['O', 'X', 'X', 'X', 'O'],
  ['O', 'X', 'C', 'C', 'O'],
];

closestCarrot(grid, 1, 4); // -> 2

```

### test_04:

```
const grid = [
  ['O', 'O', 'X', 'O', 'O'],
  ['O', 'X', 'X', 'X', 'O'],
  ['O', 'X', 'C', 'C', 'O'],
];

closestCarrot(grid, 2, 0); // -> -1

```

### test_05:

```
const grid = [
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'X'],
  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'C'],
];

closestCarrot(grid, 0, 0); // -> -1

```

## Successful Code

```js
const closestCarrot = (grid, startRow, startCol) => {
  const visitedNodes = new Set();
  let level = 0;

  // bfs
  const queue = [[startRow, startCol, level]];
  while (queue.length > 0) {
    const [currRow, currCol, currLevel] = queue.shift();

    if (grid[currRow][currCol] === "C") return currLevel;

    const deltas = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    for (const delta of deltas) {
      const [deltaRow, deltaCol] = delta;
      const neighborRow = currRow + deltaRow;
      const neighborCol = currCol + deltaCol;

      const rowInbounds = 0 <= neighborRow && neighborRow < grid.length;
      const colInbounds =
        0 <= neighborCol && neighborCol < grid[currRow].length;
      const pos = neighborRow + "," + neighborCol;
      if (
        rowInbounds &&
        colInbounds &&
        !visitedNodes.has(neighborRow + "," + neighborCol) &&
        grid[neighborRow][neighborCol] !== "X"
      ) {
        visitedNodes.add(pos);
        queue.push([neighborRow, neighborCol, currLevel + 1]);
      }
    }
  }
  console.log(visitedNodes);
  return -1;
};
```

## Complexity

- r = r
- c = c
  **Time**: `O(r*c)`
  **Space**: `O(r*c)`

## Steps - Iterative - breadth

1. Do a breadth-first traversal. Instead of having to do 4 if statements, make a variable called `deltas` where it has all of the neigbor rows/cols.
2. For each pair, determine of the row and col are inbounds and then check if it hasn't been visited and its not and `X`, then push to queue of the form `[neighborRow, neighborCol, level+1]`

## Comments

- it's easy to push the coordinates as `[x,y]` to the stack so that you can destructure them using `const [x,y] = coordinates`.
- To be able to compare the currnet coordinates to the ones in the `Set` you have to store them as strings and thus when checking using the `.has()` method, pass in as a string.
  - This is required because the coordinates are an object, even if the numbers are the same, the reference will be different, thus you'll never have a match.

# Island Count

# Problem

Write a function, *islandCount*, that takes in a grid containing Ws and Ls. W represents water and L represents land. The function should return the number of islands on the grid. An island is a vertically or horizontally connected region of land.

### test_00:

```
const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

islandCount(grid); // -> 3

```

### test_01:

```
const grid = [
  ['L', 'W', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'L', 'L', 'L'],
];

islandCount(grid); // -> 4

```

### test_02:

```
const grid = [
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
  ['L', 'L', 'L'],
];

islandCount(grid); // -> 1

```

### test_03:

```
 const grid = [
  ['W', 'W'],
  ['W', 'W'],
  ['W', 'W'],
];

islandCount(grid); // -> 0

```

## Successful Code

```js
const islandCount = (grid) => {
  const visitedNodes = new Set();
  let landCount = 0;
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (let colIndex = 0; colIndex < grid[rowIndex].length; colIndex++) {
      if (
        grid[rowIndex][colIndex] === "W" ||
        visitedNodes.has(`${[rowIndex, colIndex]}`)
      )
        continue;

      // start depth search
      const stack = [[rowIndex, colIndex]];
      while (stack.length > 0) {
        const current = stack.pop();
        const [currRow, currCol] = current;
        visitedNodes.add(`${current}`);

        const deltas = [
          [-1, 0],
          [1, 0],
          [0, -1],
          [0, 1],
        ];
        for (const delta of deltas) {
          const [rowDelta, colDelta] = delta;
          const neighborRow = currRow + rowDelta;
          const neighborCol = currCol + colDelta;

          const rowInbounds = 0 <= neighborRow && neighborRow < grid.length;
          const colInbounds =
            0 <= neighborCol && neighborCol < grid[currRow].length;

          if (
            rowInbounds &&
            colInbounds &&
            grid[neighborRow][neighborCol] === "L" &&
            !visitedNodes.has(`${[neighborRow, neighborCol]}`)
          )
            stack.push([neighborRow, neighborCol]);
        }
      }
      landCount += 1;
    }
  }
  return landCount;
};
```

## Complexity

- r = r
- c = c
  **Time**: `O(r*c)`
  **Space**: `O(r*c)`

## Steps - Iterative - depth

1. Set up a 2 for loops (nested) to hit each value in grid.
2. Initialize a `visitedNodes` set and `landCount` variable.
3. At each coordinate, if the value at that coordinate is a `W` or it
   has been visited, then continue to next coordinate.
4. Otherwise you want to do a depth-first search, where you're pushing
   the coordinates to the stack..
   _ at each coordinate in the stack, you want to check if the values
   around the current coordinate are an `L` and not yet visited.
   _ to help with the checking of the boundaries, I set 4 variables that
   will either be true or false depending if you're going out of bounds or not
5. Once you've exhausted all of the connected `L`s in one component, add one
   to the `landCount`

## Comments

- it's easy to push the coordinates as `[x,y]` to the stack so that you can destructure them using `const [x,y] = coordinates`.
- To be able to compare the currnet coordinates to the ones in the `Set` you have to store them as strings and thus when checking using the `.has()` method, pass in as a string.
  - This is required because the coordinates are an object, even if the numbers are the same, the reference will be different, thus you'll never have a match.

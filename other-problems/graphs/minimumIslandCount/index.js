const minimumIsland = (grid) => {
  const visitedNodes = new Set();
  let currIslandSize = 0;
  let minIslandSize = +Infinity;

  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (let colIndex = 0; colIndex < grid[rowIndex].length; colIndex++) {
      const currNode = grid[rowIndex][colIndex];
      if (currNode === "W" || visitedNodes.has(`${[rowIndex, colIndex]}`))
        continue;

      const stack = [[rowIndex, colIndex]];
      while (stack.length > 0) {
        const curr = stack.pop();
        const [currRow, currCol] = curr;
        if (!visitedNodes.has(`${[currRow, currCol]}`)) currIslandSize += 1;
        visitedNodes.add(`${[currRow, currCol]}`);

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

          if (
            rowInbounds &&
            colInbounds &&
            !visitedNodes.has(`${[neighborRow, neighborCol]}`) &&
            grid[neighborRow][neighborCol] === "L"
          )
            stack.push([neighborRow, neighborCol]);
        }
      }
      minIslandSize =
        currIslandSize < minIslandSize ? currIslandSize : minIslandSize;
      currIslandSize = 0;
    }
  }
  return minIslandSize;
};

// const grid = [
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'W', 'W', 'L', 'W'],
//   ['W', 'W', 'L', 'L', 'W'],
//   ['L', 'W', 'W', 'L', 'L'],
//   ['L', 'L', 'W', 'W', 'W'],
// ];
// const grid = [
//   ['L', 'W', 'W', 'L', 'W'],
//   ['L', 'W', 'W', 'L', 'L'],
//   ['W', 'L', 'W', 'L', 'W'],
//   ['W', 'W', 'W', 'W', 'W'],
//   ['W', 'W', 'L', 'L', 'L'],
// ];

const grid = [
  ["L", "L", "L"],
  ["L", "L", "L"],
  ["L", "L", "L"],
];
console.log(minimumIsland(grid));

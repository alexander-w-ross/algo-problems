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
// const grid = [
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'W', 'W', 'L', 'W'],
//   ['W', 'W', 'L', 'L', 'W'],
//   ['L', 'W', 'W', 'L', 'L'],
//   ['L', 'L', 'W', 'W', 'W'],
// ];

// console.log(islandCount(grid)); // -> 3
const grid = [
  ["L", "W", "W", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["W", "L", "W", "L", "W"],
  ["W", "W", "W", "W", "W"],
  ["W", "W", "L", "L", "L"],
];

console.log(islandCount(grid)); // -> 4

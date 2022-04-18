const islandCount = (grid) => {
  const visitedNodes = new Set();
  let landCount = 0;
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    for (let colIndex = 0; colIndex < grid[rowIndex].length; colIndex++) {
      const currNode = grid[rowIndex][colIndex];
      if (currNode === "W" || visitedNodes.has(`${[rowIndex, colIndex]}`))
        continue;

      // start depth search
      const stack = [[rowIndex, colIndex]];
      while (stack.length > 0) {
        const current = stack.pop();
        visitedNodes.add(`${current}`);
        const [currRow, currCol] = current;

        const canCheckForward = currCol + 1 <= grid[rowIndex].length - 1;
        const canCheckBackward = currCol - 1 >= 0;
        const canCheckTop = currRow - 1 >= 0;
        const canCheckBottom = currRow + 1 <= grid.length - 1;

        // forward
        if (
          canCheckForward &&
          !visitedNodes.has(`${[currRow, currCol + 1]}`) &&
          grid[currRow][currCol + 1] === "L"
        )
          stack.push([currRow, currCol + 1]);
        // backward
        if (
          canCheckBackward &&
          !visitedNodes.has(`${[currRow, currCol - 1]}`) &&
          grid[currRow][currCol - 1] === "L"
        )
          stack.push([currRow, currCol - 1]);
        // up
        if (
          canCheckTop &&
          !visitedNodes.has(`${[currRow - 1, currCol]}`) &&
          grid[currRow - 1][currCol] === "L"
        )
          stack.push([currRow - 1, currCol]);
        // down
        if (
          canCheckBottom &&
          !visitedNodes.has(`${[currRow + 1, currCol]}`) &&
          grid[currRow + 1][currCol] === "L"
        )
          stack.push([currRow + 1, currCol]);
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

islandCount(grid); // -> 4

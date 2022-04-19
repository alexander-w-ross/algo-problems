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
        if (!visitedNodes.has(`${curr}`)) currIslandSize += 1;
        visitedNodes.add(`${curr}`);
        const [currRow, currCol] = curr;

        const canCheckForward = currCol + 1 <= grid[rowIndex].length - 1;
        const canCheckBackward = currCol - 1 >= 0;
        const canCheckAbove = currRow - 1 >= 0;
        const canCheckBelow = currRow + 1 <= grid.length - 1;

        const forwardCoord = [currRow, currCol + 1];
        const backwardCoord = [currRow, currCol - 1];
        const aboveCoord = [currRow - 1, currCol];
        const belowCoord = [currRow + 1, currCol];

        // forward
        if (
          canCheckForward &&
          !visitedNodes.has(`${forwardCoord}`) &&
          grid[currRow][currCol + 1] === "L"
        )
          stack.push(forwardCoord);
        // backward
        if (
          canCheckBackward &&
          !visitedNodes.has(`${backwardCoord}`) &&
          grid[currRow][currCol - 1] === "L"
        )
          stack.push(backwardCoord);
        // above
        if (
          canCheckAbove &&
          !visitedNodes.has(`${aboveCoord}`) &&
          grid[currRow - 1][currCol] === "L"
        )
          stack.push(aboveCoord);
        // below
        if (
          canCheckBelow &&
          !visitedNodes.has(`${belowCoord}`) &&
          grid[currRow + 1][currCol] === "L"
        )
          stack.push(belowCoord);
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
console.log(minimumIsland(grid)); // -> 2

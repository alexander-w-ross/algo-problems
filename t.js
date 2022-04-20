const closestCarrot = (grid, startRow, startCol) => {
  const visitedNodes = new Set();
  let level = 0;

  // bfs
  const queue = [[startRow, startCol, level]];
  while (queue.length > 0) {
    const [currRow, currCol, currLevel] = queue.shift();
    visitedNodes.add(`${(currRow, currCol)}`);

    if (grid[currRow][currCol] === "C") return currLevel;

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

      const rowInbounds = 0 <= neighborRow && neighborRow <= grid.length - 1;
      const colInbounds =
        0 <= neighborCol && neighborCol <= grid[currRow].length - 1;

      if (
        rowInbounds &&
        colInbounds &&
        !visitedNodes.has(`${(neighborRow, neighborCol)}`) &&
        grid[neighborRow][neighborCol] !== "X"
      ) {
        queue.push([neighborRow, neighborCol, currLevel + 1]);
        visitedNodes.add(`${(neighborRow, neighborCol)}`);
      }
    }
  }
  return -1;
};

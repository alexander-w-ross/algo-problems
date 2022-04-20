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

const grid = [
  ["O", "O", "O", "O", "O"],
  ["O", "X", "O", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["O", "X", "C", "O", "O"],
  ["O", "X", "X", "O", "O"],
  ["C", "O", "O", "O", "O"],
];

console.log(closestCarrot(grid, 1, 2)); // -> 4
// const grid = [
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'X'],
//   ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'X', 'C'],
// ];

// closestCarrot(grid, 0, 0); // -> -1

const longestPath = (graph) => {
  const visitedNodes = new Set();
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

const graph = {
  h: ["i", "j", "k"],
  g: ["h"],
  i: [],
  j: [],
  k: [],
  x: ["y"],
  y: [],
};

console.log(longestPath(graph)); // -> 2

// function highestPop(births, deaths) {
//   let currEnd = deaths[0];
//   let count = 1;
//   let year = births[0];

//   for (let i = 1; i < births.length; i++) {
//     if (births[i] > currEnd) {
//       currEnd = deaths[i];
//       count = 1;
//       year = births[i];
//     } else {
//       count += 1;
//       year = births[i];
//     }
//   }
//   console.log(count, year);
//   return year;
// }
// highestPop(
//   [1750, 1803, 1840, 1860, 1894, 1975, 1980, 2000],
//   [1809, 1869, 1921, 1921, 1935, 2003, 2005, 2010]
// );

const generateGraph = (edges) => {
  const graph = {};
  for (const edge of edges) {
    const node1 = edge[0];
    const node2 = edge[1];
    if (!graph[node1]) graph[node1] = [];
    if (!graph[node2]) graph[node2] = [];
    graph[node1].push(node2);
    graph[node2].push(node1);
  }
  return graph;
};

const shortestPath = (edges, nodeA, nodeB) => {
  if (edges.length === 0) return 0;

  const graph = generateGraph(edges);

  const visitedNodes = new Set();

  const queue = [[nodeA, 0]];

  while (queue.length > 0) {
    const [currNode, distance] = queue.shift();
    visitedNodes.add(currNode);

    if (currNode === nodeB) return distance;

    for (const neighbor of graph[currNode]) {
      if (!visitedNodes.has(neighbor)) queue.push([neighbor, distance + 1]);
    }
  }
  return -1;
};
const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

console.log(shortestPath(edges, "w", "z")); // -> 2

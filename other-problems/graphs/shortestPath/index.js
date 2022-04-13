const shortestPath = (edges, nodeA, nodeB) => {
  const graph = generateGraph(edges);

  console.log(graph);

  const visitedNodes = new Set();
  let count = 0;
  const queue = [{ node: nodeA, level: count }];
  while (queue.length > 0) {
    const currentNode = queue.shift(); // {node: w, level: 0}
    console.log(currentNode);
    visitedNodes.add(currentNode.node);

    if (currentNode.node === nodeB) return currentNode.level;

    for (const neighbor of graph[currentNode.node]) {
      if (!visitedNodes.has(neighbor))
        queue.push({ node: neighbor, level: currentNode.level + 1 });
    }
    count += 1;
  }
  return -1;
};

function generateGraph(edges) {
  const graph = {};
  for (const edge of edges) {
    const [node1, node2] = edge;
    if (!graph[node1]) graph[node1] = [];
    if (!graph[node2]) graph[node2] = [];
    graph[node1].push(node2);
    graph[node2].push(node1);
  }
  return graph;
}

// const shortestPath = (edges, nodeA, nodeB) => {
//   const graph = buildGraph(edges);
//   const visited = new Set([nodeA]);
//   const queue = [[nodeA, 0]];

//   while (queue.length > 0) {
//     const [node, distance] = queue.shift();

//     if (node === nodeB) return distance;

//     for (let neighbor of graph[node]) {
//       if (!visited.has(neighbor)) {
//         visited.add(neighbor);
//         queue.push([neighbor, distance + 1]);
//       }
//     }
//   }

//   return -1;
// };

// const buildGraph = (edges) => {
//   const graph = {};

//   for (let edge of edges) {
//     const [a, b] = edge;
//     if (!(a in graph)) graph[a] = [];
//     if (!(b in graph)) graph[b] = [];

//     graph[a].push(b);
//     graph[b].push(a);
//   }

//   return graph;
// };

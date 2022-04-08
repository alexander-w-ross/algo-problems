const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = generateGraph(edges);
  const stack = [nodeA];
  const visitedNodes = new Set();
  while (stack.length > 0) {
    const current = stack.pop();
    if (current === nodeB) return true;
    visitedNodes.add(current);
    for (let neighbor of graph[current]) {
      if (!visitedNodes.has(neighbor)) stack.push(neighbor);
    }
  }
  return false;
};

const generateGraph = (edges) => {
  const graph = new Object();
  for (let edge of edges) {
    const [node1, node2] = edge;
    if (!(node1 in graph)) graph[node1] = [];
    if (!(node2 in graph)) graph[node2] = [];
    graph[node1].push(node2);
    graph[node2].push(node1);
  }

  return graph;
};

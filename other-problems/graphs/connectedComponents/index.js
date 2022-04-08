const connectedComponentsCount = (graph) => {
  if (Object.keys(graph).length === 0) return 0;

  let count = 0;

  const visitedNodes = new Set();
  const graphNodes = Object.keys(graph);
  for (let _node of graphNodes) {
    const node = parseInt(_node);
    const stack = [node];
    if (!visitedNodes.has(node)) {
      while (stack.length > 0) {
        const curr = stack.pop();
        visitedNodes.add(curr);

        for (let neighbor of graph[curr]) {
          if (!visitedNodes.has(neighbor)) stack.push(neighbor);
        }
      }
      count += 1;
    }
  }
  return count;
};

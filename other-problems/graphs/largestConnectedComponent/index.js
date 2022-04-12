const largestComponent = (graph) => {
  const graphNodes = Object.keys(graph);
  if (graphNodes.length === 0) return 0;

  const visitedNodes = new Set();
  let count = 0;
  let max = 0;
  for (const graphNode of graphNodes) {
    if (!visitedNodes.has(graphNode)) {
      const stack = [graphNode];

      while (stack.length > 0) {
        const curr = stack.pop();

        if (!visitedNodes.has(curr)) {
          visitedNodes.add(curr);
          count += 1;

          for (const neighbor of graph[curr]) {
            if (!visitedNodes.has(neighbor)) stack.push(neighbor);
          }
        }
      }
    }
    max = count > max ? count : max;
    count = 0;
  }
  return max;
};

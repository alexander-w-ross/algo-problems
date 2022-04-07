const hasPath = (graph, src, dst) => {
  // iterative - depth
  //   if (!graph || !src) return false
  //   if (src === dst) return true
  //   const stack = [ src ]

  //   while (stack.length > 0) {
  //     const curr = stack.pop()
  //     if (curr === dst) return true

  //     for (let neighbour of graph[curr]) {
  //       stack.push(neighbour)
  //     }
  //   }
  //   return false
  // iterative - breadth
  //   if (!graph || !src) return false
  //   if (src === dst) return true
  //   const queue = [ src ]

  //   while (queue.length > 0) {
  //     const curr = queue.shift()
  //     if (curr === dst) return true

  //     for (let neighbour of graph[curr]) {
  //       queue.push(neighbour)
  //     }
  //   }
  //   return false

  // recursive
  if (src === dst) return true;
  for (let neighbour of graph[src]) {
    if (hasPath(graph, neighbour, dst)) return true;
  }
  return false;
};

const shortestPath = (edges, nodeA, nodeB) => {
const graph = generateGraph(edges)

console.log(graph)

const visitedNodes = new Set()
let count = 0
const queue = [{node: nodeA, level: count}]
while (queue.length > 0) {
const currentNode = queue.shift() // {node: w, level: 0}
console.log(currentNode)
visitedNodes.add(currentNode.node)

    if (currentNode.node === nodeB) return currentNode.level

    for (const neighbor of graph[currentNode.node]) {
      if(!visitedNodes.has(neighbor)) queue.push({node: neighbor, level: currentNode.level + 1})
    }
    count+=1

}
return -1
};

function generateGraph (edges) {
const graph = {}
for (const edge of edges) {
const [node1, node2] = edge
if (!graph[node1]) graph[node1] = []
if (!graph[node2]) graph[node2] = []
graph[node1].push(node2)
graph[node2].push(node1)
}
return graph
}

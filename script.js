// const hasPath = (graph, src, dst) => {
//   let queue = [src] //f
  
//   while(queue.length > 0){
//     let current = queue.shift() //return f
//     if(current === dst) return true
    
//     for (let neighbor of graph[current]){
//       queue.push(neighbor)
//     }
//   }
//   return false
// };

// const hasPath = (graph, src, dst) => {
//   const queue = [src]
//   while(queue.length > 0){
//     const current = queue.shift()
//     if(current === dst) return true
    
//     for(let neighbor of graph[current]){
//       queue.push(neighbor)
//     }
//   }
//   return false
// };

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = createGraph(edges)
  return hasPath(graph, nodeA, nodeB, new Set())
};

const createGraph = (edges) => {
const graph = {}

for(let edge of edges){
  const [a, b] = edge
  if(!(a in graph)) graph[a] = []
  if(!(b in graph)) graph[b] = []

  graph[a].push(b)
  graph[b].push(a)
}
  return graph
};


const hasPath = (graph, src, dst, visited) => {
  if(src === dst) return true
  if(visited.has(src)) return false
  visited.add(src)
  
  for(let neighbor of graph[src]){
    if(hasPath(graph, neighbor, dst, visited) === true) {
      return true
    }
  }
  return false
}


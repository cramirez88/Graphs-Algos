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

// const undirectedPath = (edges, nodeA, nodeB) => {
//   const graph = createGraph(edges)
//   return hasPath(graph, nodeA, nodeB, new Set())
// };

// const createGraph = (edges) => {
// const graph = {}

// for(let edge of edges){
//   const [a, b] = edge
//   if(!(a in graph)) graph[a] = []
//   if(!(b in graph)) graph[b] = []

//   graph[a].push(b)
//   graph[b].push(a)
// }
//   return graph
// };


// const hasPath = (graph, src, dst, visited) => {
//   if(src === dst) return true
//   if(visited.has(src)) return false
//   visited.add(src)
  
//   for(let neighbor of graph[src]){
//     if(hasPath(graph, neighbor, dst, visited) === true) {
//       return true
//     }
//   }
//   return false
// }

// const graph = {
//   f: ['g', 'i'],
//   g: ['h'],
//   h: [],
//   i: ['g', 'k'],
//   j: ['i'],
//   k: []
// };



// const hasPath = (graph, src, dst) => {
//   if(src === dst) return true 
//   let queue = [src]

//   while(queue.length > 0){

//     let current = queue.shift()
//     if(current === dst) return true
//     for(let neighbor of graph[current]){
//       queue.push(neighbor)
//     }
//   }
//   return false
// };

// console.log(hasPath(graph, 'f', 'j'))

// const hasPath = (graph, src, dst) => {
//   if(src === dst) return true
//   for(let neighbor of graph[src]){
//     if(hasPath(graph, neighbor, dst)){
//       return true
//     }
//   }
//   return false
// }


// console.log(hasPath(graph, 'f', 'k'))


// const edges = [
//   ['i', 'j'],
//   ['k', 'i'],
//   ['m', 'k'],
//   ['k', 'l'],
//   ['o', 'n']
// ];


// const graph = {}

// // converting the edges to a graph data structure
// const convertToGraph = () => {
//   for(let edge of edges){
//     let [a, b] = edge 
//     if(!(a in graph)) graph[a] = []
//     if(!(b in graph)) graph[b] = []
  
//     graph[a].push(b)
//     graph[b].push(a)
//   }
//   return graph
// }

// console.log(convertToGraph())

// // Using the graph, find if node A and node B have a common path

// const hasPath = (graph, nodeA, nodeB) => {
//   if(nodeA === nodeB) return true

//   for(let neighbor of graph[nodeA]){
//     if(hasPath(graph, nodeA, nodeB)){
//       return true
//     }
//   }
//   return false
// }



// console.log(hasPath(edges, 'j', 'm')); 

// const connectedComponentsCount = (graph) => {
//   let count = 0
//   let visited = new Set()
//   for(let neighbor in graph){
//     if(traverseGraph(graph, neighbor, visited)){
//       count += 1
//     }
//   }
//   return count
// };
// const traverseGraph = (graph, node, visited) => {
//   if(visited.has(String(node))) return false
//   visited.add(String(node))
  
//   for(let neighbor of graph[node]){
//     traverseGraph(graph, neighbor, visited)
//   }
//   return true 
// }

const largestComponent = (graph) => {
  let visited = new Set()
  let largest = 0
  for (let node in graph){
    let size = exploreSize(graph, node, visited)
    if(size > largest) largest = size
    
  }
  return largest
};

const exploreSize = (graph, node, visited) => {
  if(visited.has(node)) return false
  
  visited.add(node)
  console.log(visited)
  let size = 1
  for (let neighbor of graph[node]){
    size += exploreSize(graph, neighbor, visited)
    
  }
  return size
}



largestComponent({
  1: ['2'],
  2: ['1','8'],
  6: ['7'],
  9: ['8'],
  7: ['6', '8'],
  8: ['9', '7', '2']
});


const shortestPath = (edges, nodeA, nodeB) => {
  const graphDS = convertEdgesToGraph(edges)
   let visited = new Set([nodeA])
  const queue = [[nodeA, 0]]
  
  while(queue.length > 0){
    const [node, distance] = queue.shift()
    if(node === nodeB) return distance
    for(let neighbor of graph[node]){
      if(!visited.has(neighbor)){
      visited.add(neighbor)
      queue.push([neighbor, distance + 1])
      }
    }
  }
  return -1
};

const graph = {}
convertEdgesToGraph = (edges) => {
  for(let edge of edges){
    const [a,b] = edge
    if(!(a in graph)) graph[a] = []
    if(!(b in graph)) graph[b] = []
    graph[a].push(b)
    graph[b].push(a)
  }
 return graph
}

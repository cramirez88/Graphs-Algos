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

// const largestComponent = (graph) => {
//   let visited = new Set()
//   let largest = 0
//   for (let node in graph){
//     let size = exploreSize(graph, node, visited)
//     if(size > largest) largest = size
    
//   }
//   return largest
// };

// const exploreSize = (graph, node, visited) => {
//   if(visited.has(node)) return false
  
//   visited.add(node)
//   console.log(visited)
//   let size = 1
//   for (let neighbor of graph[node]){
//     size += exploreSize(graph, neighbor, visited)
    
//   }
//   return size
// }



// largestComponent({
//   1: ['2'],
//   2: ['1','8'],
//   6: ['7'],
//   9: ['8'],
//   7: ['6', '8'],
//   8: ['9', '7', '2']
// });


// const shortestPath = (edges, nodeA, nodeB) => {
//   const graphDS = convertEdgesToGraph(edges)
//    let visited = new Set([nodeA])
//   const queue = [[nodeA, 0]]
  
//   while(queue.length > 0){
//     const [node, distance] = queue.shift()
//     if(node === nodeB) return distance
//     for(let neighbor of graph[node]){
//       if(!visited.has(neighbor)){
//       visited.add(neighbor)
//       queue.push([neighbor, distance + 1])
//       }
//     }
//   }
//   return -1
// };

// const graph = {}
// convertEdgesToGraph = (edges) => {
//   for(let edge of edges){
//     const [a,b] = edge
//     if(!(a in graph)) graph[a] = []
//     if(!(b in graph)) graph[b] = []
//     graph[a].push(b)
//     graph[b].push(a)
//   }
//  return graph
// }

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

// const visited = new Set()
// let count = 0

// for (let i = 0; i < grid.length; i++){
//   console.log(i)
//   for(let c = 0; c < grid[0].length; c++){
//     if(explore(grid, i, c, visited)){
//       count ++
//     }
//   }
// return count
// }


// const explore = (grid, i, c, visited) => {
//   const rowInbound = 0 <= i && i < grid.length;
//   const colInbound = 0 <= c && c < grid.length;

//   if(!(rowInbound || colInbound)) return false
//   if(grid[i][r] === 'W') return false

//   const position = r + ',' + c;

//   if(visited.has(position)) return false
//   visited.add(position)

//   explore(grid, i + 1, c, visited)
//   explore(grid, i - 1, c, visited)
//   explore(grid, i, c + 1, visited)
//   explore(grid, i, c - 1, visited)

//   return true
// }


// const minimumIsland = (grid) => {
//   let visited = new Set()
//   let minSize = Infinity
//   for(let row = 0; row < grid.length; row++){
//     for(let col = 0; col < grid[0].length; col++){
//       let size = explore(grid, row, col, visited )
//       if(size < minSize && size > 0){
//         minSize = size
//       }
//     }
//   }
  
//   return minSize
// };


// const explore = (grid, row, col, visited) => {
//   const rowInbound = 0 <= row && row < grid.length
//   const colInbound = 0 <= col && col < grid[0].length
  
//   if(!rowInbound || !colInbound) return false
//   if(grid[row][col] === 'W') return false
  
//   const position = row + ',' + col
  
//   if(visited.has(position)) return false
//   visited.add(position)
  
//   let size = 1
//   size += explore(grid, row - 1, col, visited)
//   size += explore(grid, row + 1, col, visited)
//   size += explore(grid, row, col - 1, visited)
//   size += explore(grid, row, col + 1, visited)
  
//   return size
// }



// const shortestPath = (edges, nodeA, nodeB) => {
//   const buildGraph = edgeToGraph(edges)
//   const queue = [[nodeA, 0]]
//   let visited = new Set([nodeA])
  
//   while(queue.length > 0){
//     const [node, distance] = queue.shift()
//     if(node === nodeB) return distance
//     for(let neighbor of buildGraph[node]){
//       console.log(neighbor)
//       if(!visited.has(neighbor)){
//         visited.add(neighbor)
//         queue.push([neighbor, distance + 1])
//       }
      
//     }
//   }
//   return -1
// };


// const edgeToGraph = (edges) => {
//   const graph = {}
//   for (let edge of edges){
//     const [a, b] = edge
//     if(!(a in graph)) graph[a] = []
//     if(!(b in graph)) graph[b] = []
    
//     graph[a].push(b)
//     graph[b].push(a)
//   }
//   return graph
// }


// const islandCount = (grid) => {
//   let visited = new Set()
//   let count = 0
//   for(let row = 0; row < grid.length; row++){
//     for(let column = 0; column < grid[0].length; column++){
//       if(exploreIsland(grid, row, column, visited)){
//         count += 1
//       }
//     }
//   }
//   return count
// };

// const grid = [
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'W', 'W', 'L', 'W'],
//   ['W', 'W', 'L', 'L', 'W'],
//   ['L', 'W', 'W', 'L', 'L'],
//   ['L', 'L', 'W', 'W', 'W'],
// ];
  
//   const exploreIsland = (grid, row, column, visited) => {
//     const rowInbound = 0 <= row && row < grid.length;
//     const columnInbound = 0<= column && column < grid.length;
//     if(!rowInbound || !columnInbound) return false
//     if(grid[row][column] === 'W') return false
//     const position = row + ',' + column
//     if(visited.has(position)) return false
//     visited.add(position)
    
//     exploreIsland(grid, row + 1, column, visited)
//     exploreIsland(grid, row - 1, column, visited)
//     exploreIsland(grid, row, column + 1, visited)
//     exploreIsland(grid, row, column - 1, visited)
//     return true
//   }




// islandCount(grid); // -> 3
// module.exports = {
//   islandCount,
// };


// const minimumIsland = (grid) => {
//   let visited = new Set()
//   let smallestIsland = Infinity
//   for(let row = 0; row < grid.length; row++){
//     for(let column = 0; column < grid[0].length; column++){
//       let size = exploreIsland(grid, row, column, visited)
//       if(size < smallestIsland && size > 0){
//         smallestIsland = size
//       }
//     }
//   }
 
//   return smallestIsland
// }

// const exploreIsland = (grid, row, column, visited) => {
//   const rowInbound = 0 <= row && row < grid.length;
//   const columnInbound = 0 <= column && column < grid[0].length;
//   if(!rowInbound || !columnInbound) return false
//   if(grid[row][column] === 'W') return false
  
//   const position = row + ',' + column
//   if(visited.has(position)) return false
//   visited.add(position)
//   let size = 1
//   size += exploreIsland(grid, row + 1, column, visited)
//   size += exploreIsland(grid, row - 1, column, visited)
//   size += exploreIsland(grid, row, column + 1, visited)
//   size += exploreIsland(grid, row, column - 1, visited)
//   return size
// }


const closestCarrot = (grid, startRow, startCol) => {
  let queue = [[startRow, startCol, 0]]
  let visited = new Set ([startRow, startCol])
  while (queue.length > 0){
    const [row, col, distance] = queue.shift()
    console.log(row, col, distance)
    if(grid[row][col] === 'C') return distance
    const deltas = [[1,0], [-1,0], [0,1], [0,-1]]
    for(let delta of deltas){
      const [deltaRow, deltaCol] = delta
      const rowNeighbor = deltaRow + row
      const colNeighbor = deltaCol + col
      const rowInbound = 0 <= rowNeighbor && rowNeighbor < grid.length;
      const colInbound = 0 <= colNeighbor && colNeighbor < grid[0].length;
      const pos = rowNeighbor + ',' + colNeighbor
      if(rowInbound && colInbound && grid[rowNeighbor][colNeighbor] !== 'X' && !visited.has(pos)){
        visited.add(pos)
        queue.push([rowNeighbor, colNeighbor, distance + 1])
        
      }
    }
  }
  return -1
};



const hasPath = (graph, src, dst) => {
  let queue = [src] //f
  
  while(queue.length > 0){
    let current = queue.shift() //return f
    if(current === dst) return true
    
    for (let neighbor of graph[current]){
      queue.push(neighbor)
    }
  }
  return false
};
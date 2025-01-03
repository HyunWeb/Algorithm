class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }
  pop() {
    return this.items[this.front++];
  }
  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(graph, start) {
  // 인접 리스트
  const adjList = {};
  for (let [u, v] of graph) {
    if (!adjList[u]) adjList[u] = [];
    adjList[u].push(v);
  }

  const visited = new Set();

  const queue = new Queue();
  queue.push(start);
  visited.add(start);
  const result = [start];

  while (!queue.isEmpty()) {
    const node = queue.pop();
    for (let neighbor of adjList[node] || []) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
        result.push(neighbor);
      }
    }
  }
  return result;
}

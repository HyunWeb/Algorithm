// 25.01.06일 BFS 구현 복습

// 시간 복잡도를 고려해 더 효율적인 큐 직접 구현
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
  // 인접 리스트 제작
  const adjust = {};
  graph.forEach(([u, v]) => {
    if (!adjust[u]) adjust[u] = [];
    adjust[u].push(v);
  });

  // 방문체크용 visited와 큐, 결과 배열 생성
  const visited = new Set();
  visited.add(start);
  const queue = new Queue();
  queue.push(start);
  result = [start];

  // 큐가 빌때까지 계속 실행한다.
  while (!queue.isEmpty()) {
    const node = queue.pop();
    (adjust[node] || []).forEach((neighbor) => {
      // 방문한적 없은 노드면 큐에 추가한다.
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
        result.push(neighbor);
      }
    });
  }
  return result;
}

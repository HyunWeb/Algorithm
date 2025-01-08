// 25/01/07일 벨만 포드 알고리즘 학습

// [[(1, 4), (2, 3), (4,-6)], [(3, 5)], [(1, 2)], [(0, 7), (2, 4)], [(2, 2)]]
// 0
// [[0, -2, -4, 3, -6], [null, 2, 4, 1, 0]]

function solution(graph, source) {
  // 그래프의 노드 개수
  const numVertices = graph.length;

  // 거리 배열 초기화
  const distance = Array(numVertices).fill(Infinity);
  distance[source] = 0;

  // 직전 노드 초기화
  const predecessor = Array(numVertices).fill(null);

  for (let temp = 0; temp < numVertices - 1; temp++) {
    for (let u = 0; u < numVertices; u++) {
      for (const [v, weight] of graph[u]) {
        if (distance[u] + weight < distance[v]) {
          distance[v] = distance[u] + weight;
          predecessor[v] = u;
        }
      }
    }
  }

  for (let u = 0; u < numVertices; u++) {
    for (const [v, weight] of graph[u]) {
      if (distance[u] + weight < distance[v]) {
        return [-1];
      }
    }
  }

  return [distance, predecessor];
}

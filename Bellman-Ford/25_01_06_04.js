// [[(1, 4), (2, 3), (4,-6)], [(3, 5)], [(1, 2)], [(0, 7), (2, 4)], [(2, 2)]]
// 0
// [[0, -2, -4, 3, -6], [nul, 2, 4, 1, 0]]

function solution(graph, source) {
  // 그래프의 노드 개수
  const numVertices = graph.length;

  // 거리 배열 초기화
  const distance = Array(numVertices).fill(Infinity);
  distance[source] = 0; // 시작 거리는 0

  // 직전 노드 초기화
  const predecessor = Array(numVertices).fill(null);

  // 만약 노드가 5개(0, 1, 2, 3, 4)인 경우 0 ~ 3
  for (let temp = 0; temp < numVertices - 1; temp++) {
    // 0 ~ 4 까지 모든 노드 반복
    for (let u = 0; u < numVertices; u++) {
      // u의 인접 노드와 해당 노드까지의 가중치 추출
      for (const [v, weight] of graph[u]) {
        // u까지의 거리 + 인접노드까지의 거리가 현재 인접노드까지의 거리보다 짧은지 비교
        if (distance[u] + weight < distance[v]) {
          // 계산한게 기존보다 더 짧다면 갱신
          distance[v] = distance[u] + weight;
          predecessor[v] = u; // 직전 노드 갱신
        }
      }
    }
  }

  // 동일하게 한번 더 돌렸을 때 값이 갱신되면 안된다. (음의 가중치가 존재)
  for (let u = 0; u < numVertices; u++) {
    for (cosnt[(v, weight)] of graph[u]) {
      if (distance[u] + weight < distance[v]) {
        return [-1];
      }
    }
  }

  return [distance, predecessor];
}

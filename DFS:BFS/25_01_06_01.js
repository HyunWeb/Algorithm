// 25.01.06일 DFS 구현 복습
function solution(graph, start) {
  const adjust = {};

  // graph 속 배열을 받아서 객체에 키 : 값으로 전부 정리
  graph.forEach(([u, v]) => {
    if (!adjust[u]) adjust[u] = [];
    adjust[u].push(v);
  });

  // 방문 체크용 set객체, 결과를 담을 배열 생성
  const visited = new Set();
  const result = [];

  dfs(start, visited, result);

  function dfs(node, visited, result) {
    visited.add(node);
    result.push(node);
    // node와 이어진 노드들의 배열을 받아 처리
    (adjust[node] || []).forEach((neighbor) => {
      // 방문 안했으면 dfs로 다시 돌린다.
      if (!visited.has(neighbor)) dfs(neighbor, visited, result);
    });
  }

  return result;
}

function solution(graph, start) {
  const adjust = {};

  // 인접 리스트 만들기
  graph.forEach(([u, v]) => {
    if (!adjust[u]) adjust[u] = [];
    adjust[u].push(v);
  });

  function dfs(node, visited, result) {
    visited.add(node);
    result.push(node);
    (adjust[node] || []).forEach((neighbor) => {
      if (!visited.has(neighbor)) dfs(neighbor, visited, result);
    });
  }

  const visited = new Set();
  const result = [];

  dfs(start, visited, result);

  return result;
}

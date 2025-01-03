function solution(graph, start) {
  const adjList = {};

  //인접 리스트 만들기
  graph.forEach(([u, v]) => {
    if (!adjList[u]) adjList[u] = [];
    adjList[u].push(v);
  });

  function dfs(node, visited, result) {
    visited.add(node);
    result.push(node);
    (adjList[node] || []).forEach((neighbor) => {
      if (!visited.has(neighbor)) dfs(neighbor, visited, result);
    });
  }

  const visited = new Set();
  const result = [];

  dfs(start, visited, result);

  return result;
}

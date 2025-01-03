// 깊이 우선 탐색 순회
//[['A','B'],['B', 'C'],['C','D'],['D','E']]
// 'A'

function solution(graph, start) {
  const adList = {};
  graph.forEach(([u, v]) => {
    if (!adList[u]) adList[u] = [];
    adList[u].push(v);
  });

  function dfs(node, visited, result) {
    visited.add(node);
    result.push(node);
    (adList[node] || []).forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        dfs(neighbor, visited, result);
      }
    });
  }

  const visited = new Set();
  const result = [];
  dfs(start, visited, result);

  return result;
}
console.log(
  solution(
    [
      ["A", "B"],
      ["B", "C"],
      ["C", "D"],
      ["D", "E"],
    ],
    "A"
  )
);

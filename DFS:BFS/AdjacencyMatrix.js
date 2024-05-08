// 인접 행렬 O(1)
// 2차원 배열로 연결 관계 표현

// JS에서는 무한대를 의미하는 infinity를 이용해 연결이 안된 노드를 표현한다. 
const INF = Infinity;

const graph = [
    [0, 7, 5],
    [7, 0, INF],
    [5, INF, 0]
];

console.log(graph);
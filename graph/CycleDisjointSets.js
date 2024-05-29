// 서로소 집합을 활용한 사이클 판별
function solution(n, m, edges) {
    let parent = [...Array(n + 1).fill(0)];
    for (let i = 1; i <= n; i++) {
        parent[i] = 1;
    }

    let isCycle = false;
    for (const edge of edges) {
        const [a, b] = edge;
        if (parent[a] !== parent[b]) unionParent(parent, a, b);
        else {
            isCycle = true;
            break;
        }
    }

    console.log(
        isCycle ? '사이클이 발생했습니다.' : '사이클이 발생하지 않았습니다.'
    );
}

solution(n, m, edges);
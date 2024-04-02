// DFS 풀이
const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
const visited = Array.from(Array(n), () => Array(m).fill(false));

// 좌표를 받아서 방문 처리를 한다. 
// 사방으로 돌면서 인접한 곳에 방문 처리를 하고 돌아다닌다. 
// 스택 방식
const dfs = (graph, x, y) => {
    // 그래프가 0인 곳의 좌표를 받아서 주변을 탐색해 1로 전환하는 역할
    visited[x][y] = true;

    for(let i = 0; i < 4; i++){
        const nx = x + dir[i][0]
        const ny = y + dir[i][1]

        if(nx < 0 || nx >= n || ny < 0 || ny >= m)
            continue;

        if(!visited[nx][ny] && graph[nx][ny] === '0'){
            dfs(graph, nx, ny);
        }
    }
}

function solution(n, m, graph) {
    let count = 0;

    // 좌표 확인 후 0이면 함수를 실행하는 역할
    for (let i = 0; i < n; i++){
        for(let j = 0; j < m; j++) {
            const cur = graph[i][j];
            if (!visited[i][j] && cur === '0'){
                dfs(graph, i, j);
                count++;
            }
        }
    }

    return count;
}

console.log(solution(n, m, graph));
// 미로 탈출
// 최단 경로 문제라서 BFS로 풀었을때 효과적이다. 

const fs = require('fs');
let input = fs.readFileSync("./tc.txt").toString().trim().split('\n');

const [nm, ...arr] = input;
const [n, m] = nm.split(' ').map(v => +v);
const graph = arr.map(v1 => v1.split('').map(v2 => +v2));
//------------------------

const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
const visited = Array.from(Array(n), () => Array(m).fill(false));

const bfs = (graph, sx, sy) => {
    const q = [];
    q.push([sx, sy]);
    visited[sx][sy] = true; 

    while (q.length !== 0) {
        const [x, y] = q.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dir[i][0];
            const ny = y + dir[i][1];

            if (nx < 0 || nx >= n || ny < 0 || ny >= m)
                continue;

            if (!visited[nx][ny] && graph[nx][ny]) {
                q.push([nx, ny]);
                visited[nx][ny] = true;
                // 해당 좌표 숫자 1에 (이전 좌표의 숫자 + 1)을 대입해서 숫자를 점점 늘린다. 
                graph[nx][ny] = graph[x][y] + 1;
            }
        }
    }
}

function solution(n, m, graph) {
    bfs(graph, 0, 0);
    return graph[n - 1][m - 1];
}

console.log(solution(n, m, graph));
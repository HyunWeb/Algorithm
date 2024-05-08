//음료수 얼려먹기
// 단순히 모든 정점을 탐색하는 문제다. 
// DFS, BFS 중 아무거나 선택해서 풀어도 된다. 

//입력 정제
const fs = require('fs');
let input = fs.fs.readFileSync("../tc.txt").toString().trim().split('\n');

const [nm, ...arr] = input; 
const [n, m] = nm.split(' ').map(v => +v);
const graph = arr.map(v1 => v1.split(''));
//----------------------------------------

//BFS  풀이_ 큐
/*
    1. 큐에 좌표를 추가 후 방문처리
    2. 큐에서 하나씩 좌표를 빼서 사방 탐색 
    3. 탐색하다 걸려들면 다시 그부분을 큐에 추가 후 방문 처리
*/
const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
const visited = Array.from(Array(n), () => Array(m).fill(false));

// 받은 좌표를 기준으로 주변에 또 '0'이 있는지 탐색 시작
const bfs = (graph, sx, sy) => {
    // 좌표를 큐에 추가 
    const q = [];
    q.push([sx, sy]);
    visited[sx][sy] = true;

    // 큐에서 하나씩 좌표를 빼서 상, 하, 좌, 우 좌표 탐색
    while (q.length !== 0) {
        const [x, y] = q.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dir[i][0];
            const ny = y + dir[i][1];

            // 좌표가 영역 밖이면 그냥 넘어가기
            if (nx < 0 || nx >= n || ny < 0 || ny >= m)
            continue;
            
            //상, 하, 좌, 우 중 좌표가 '0'이면 큐에 추가해서 차후 탐색 예약
            if (!visited[nx][ny] && graph[nx][ny] == '0') {
                q.push([nx, ny]);
                visited[nx][ny] = true;
            }
        }
    }
}

function solution(n, m, graph) {
    let count = 0;

    for (let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            const cur = graph[i][j];
            if(!visited[i][j] && cur === '0') {
                bfs(graph, i, j);
                count++;
            }
        }
    }

    return count;
}

console.log(solution(n, m, graph));
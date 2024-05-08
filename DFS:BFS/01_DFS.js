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

//DFS 풀이_ 스택
/*
    1. 받은 좌표 하나만 방문 처리
    2. 하나의 좌표를 기준으로 사방 탐색
    3. 탐색하다 걸려들면 다시 그 좌표로 재귀 호출
*/
const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
const visited = Array.from(Array(n), () => Array(m).fill(false));

const dfs = (graph, x, y) => {
    visited[x][y] = true;

    for(let i = 0; i < 4; i++) {
        const nx = x + dir[i][0];
        const ny = y + dir[i][1];

        if(nx < 0 || nx >= n || ny < 0 || ny >= m)
            continue;

        if(!visited[nx][ny] && graph[nx][ny] === '0'){
            dfs(graph, nx, ny);
        }
    }
}

function solution(n, m, graph) {
    let count = 0;

    for (let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            const cur = graph[i][j];
            if(!visited[i][j] && cur === '0') {
                dfs(graph, i, j);
                count++;
            }
        }
    }
    return count;
}

console.log(solution(n, m, graph));
// 입력 정제
const fs = require('fs');
// 파일을 불러온다 > 문자열로 바꾼다 > 공백은 다 지운다 > 개행 단위로 나눠서 배열로 넣는다. 
let input = fs.readFileSync("./tc.txt").toString().trim().split('\n');

const [nm, ...arr] = input; 
const [n, m] = nm.split(' ').map(v => +v);
const graph = arr.map(v1 => v1.split(''));
// -----------------------------------
// BFS 풀이

const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
const visited = Array.from(Array(n), () => Array(m).fill(false));

// 1. 좌표를 받아서 배열 큐에 추가 시킨다.
// 2. 방문 처리를 한다. 
// 3. 큐가 빌때 까지 반복문을 돌린다. 
// 4. 최신 큐를 지우고 그 좌표를 기준으로 사방을 돌린다. 
// 5. 방문 안한곳이면 그 좌표를 다시 큐에 집어넣고 방문처리한다. 
// 큐를 활용한 방식
const bfs = (graph, sx, sy) => {
    const q = [];
    q.push([sx, sy]);
    visited[sx][sy] = true;

    while (q.length !== 0){
        // 큐의 첫 좌표를 지우면서 그 값을 각각 대입
        const [x, y] = q.shift();

        //각 방향으로 이동시킨 좌표를 생성
        for (let i = 0; i < 4; i++) {
            const nx = x + dir[i][0];
            const ny = y + dir[i][1];

            // 범위 밖이면 스킵.
            if (nx < 0 || nx >= n || ny < 0 || ny >= m)
            continue;

            // 범위 안쪽이면 각 방향에 방문한적 있는지 확인 후 없으면 큐에 추가 
            if(!visited[nx][ny] && graph[nx][ny] === '0') {
                q.push([nx, ny]);
                visited[ns][ny] = true;
            }
        }
    }
}

function solution(n, m, graph) {
    let count = 0;

    for (let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++){
            const cur = graph[i][j];
            if(!visited[i][j] && cur === '0'){
                bfs(graph, i, j);
                count ++;
            }
        }
    }
}

console.log(solution(n, m, graph));
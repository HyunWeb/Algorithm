// 최단 경로 문제는 BFS로 풀었을 때 효과적이다. 

const fs = require('fs');
let input = fs.readFileSync("./tc.txt").toString().trim().split('\n');

const [nm, ...arr] = input;
const [n, m] = nm.split(' ').map(v => +v);
const graph = arr.map(v1 => v1.split('').map(v2 => +v2));
//----------------------------------------

// 방향 정의 및 방문 배열 생성
const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
const visited = Array.from(Array(n), () => Array(m).fill(false));

//bfs 
const bfs = (graph, sx, sy) => {
    // 큐 배열 생성 하고 좌표를 넣는다. > 방문 처리한다. 
    const q = [];
    q.push([sx, sy]);
    visited[sx][sy] = true;

    // 큐가 빌때 까지 계속 수행한다. 
    while (q.length !== 0) { 
        // 가장 첫번째 큐를 지우면서 그 값을 대입한다. 
        const [x, y] = q.shift();

        // 이동 방향에 따라 4번 실행
        for (let i = 0; i < 4; i++) {
            const nx = x + dir[i][0];
            const ny = y + dir[i][1];
            // 영역 밖이나 이미 방문한 곳은 넘어간다. 
            if (nx < 0 || nx >= n || ny < 0 || ny >= m)
                continue;
            
            // 방문 안한 1번 좌표는 좌표값을 큐에 대입, 방문처리한다. 
            // 출발 지점부터 이동한 칸 수를 1씩 늘리며 기록한다. 
            // 출구의 번호가 최단거리가 된다. 
            if (!visited[nx][ny] && graph[nx][ny]) {
                q.push([nx, ny]);
                visited[nx][ny] = true;
                graph[nx][ny] = graph[x][y] + 1;
            }
        }
    }
}

// 그래프 기준으로 0, 0 좌표부터 탐색 시작
// 결과는 가장 마지막 배열 인덱스라서  -1 해줘야한다. 
function solution(n, m, graph) {
    bfs(graph, 0, 0);
    return graph[n - 1][m - 1];
}

console.log(solution(n, m, graph));


// 별도의 방문 처리가 없어도 무방한 문제이긴 하다. (중복 방문 탐색 여부)
// raph[nx][ny] === 1 만의 검사만 가지고도 탐색이 가능하다. 
// 중복된 방문은 있을지라도 출구의 위치 번호만 도출하면 되기 때문이다. 
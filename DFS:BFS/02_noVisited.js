// 미로 탈출
// 방문 처리를 하지 않아도 무방한 문제다. 
// 방문 처리 안해도 좌표 숫자가 1이면 처음 방문이란 뜻이기 때문
// 중복 방문이 있더라도 마지막 위치의 번호만 알면 되기 때문에 상관 없다. 

const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];

const bfs = (graph, sx, sy) => {
    const q = [];
    q.push([sx, sy]);

    while (q.length !== 0) {
        const [x, y] = q.shift();

        for (let i = 0; i < 4; i++) {
            const nx = x + dir[i][0];
            const ny = y + dir[i][1];

            if (nx < 0 || nx >= n || ny < 0 || ny >= m)
                continue;

            // 해당 노드를  처음 방문하는 경우에만 최단 거리 기록
            if (graph[nx][ny] == 1) {
                q.push([nx, ny]);
                // 해당 좌표 숫자 1에 (이전 좌표의 숫자 + 1)을 대입해서 숫자를 점점 늘린다. 
                graph[nx][ny] = graph[x][y] + 1;
            }
        }
    }
}

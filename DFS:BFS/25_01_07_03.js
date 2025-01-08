// 레벨 2 게임 맵 최단거리
class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }
  first() {
    return this.items[this.front];
  }
  last() {
    return this.items[this.rear - 1];
  }
  pop() {
    return this.items[this.front++];
  }
  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(maps) {
  // 움직임 정의
  const move = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
  ];

  // 게임판의 크기
  const n = maps.length;
  const m = maps[0].length;

  // 방문 체크용 -1 배열
  const dist = Array.from({ length: n }, () => Array(m).fill(-1));

  function bfs(start) {
    const q = new Queue();
    q.push(start);
    // 방문 체크
    dist[start[0]][start[1]] = 1;

    // 큐가 비어있지 않다면 반복
    while (!q.isEmpty()) {
      // 현재위치 기준 움직일수 있는 방향 모두 탐색
      const here = q.pop();
      for (const [dx, dy] of move) {
        // 움직였을 때의 좌표 계산
        const row = here[0] + dx;
        const column = here[1] + dy;

        // 계산 값이 범위 밖이면 스킵
        if (row < 0 || row >= n || column < 0 || column >= m) {
          continue;
        }
        // 계산 값이 0(벽)이면 스킵
        if (maps[row][column] === 0) {
          continue;
        }
        // 둘다 아니고 방문한적도 없을시 큐에 넣는다.
        if (dist[row][column] === -1) {
          q.push([row, column]);
          // 거리값은 현재값 + 1로 다음 노드 추가
          dist[row][column] = dist[here[0]][here[1]] + 1;
        }
      }
    }
    // 반복문이 다 끝나면 결과 반환
    return dist;
  }
  bfs([0, 0]);

  return dist[n - 1][m - 1];
}

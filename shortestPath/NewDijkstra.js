/*
    개선된 다익스트라 알고리즘
    1. 최단거리노드의 탐색을 최소힙을 통한 우선순위 큐를 활용한다. 
    2. 별도의 방문처리 변수 visited가 필요 없다. 
      2.1. 우선순위큐에 최소값부터 순서대로 전부 쌓일 것이기 때문
    3. 시간복잡도 O(nlogm)
*/

const PriorityQueue = require('./PriorityQueue');

const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, s, ...rest] = input; 
const [n, m] = nm.split(' ').map((v) => +v);
const start = +s;
// 입력된 노드 연결 정보
const arr = rest.map((str) => str.split(' ').map((v) => +v));

// 최종 결과가 될 각 노드별 최단거리 연결 현황
let d = [...Array(n + 1).fill(Infinity)];

function solution(n, m, start, arr) {
    // 입력된 노드 정보를 각 인덱스(노드순서) 별로 정리한다. 
    const graph = Array.from(Array(n + 1), () => []);
    for (const v of arr) {
        const [a, b, c] = v;
        // 각 graph의 인덱스(노드)마다 [연결된 노드번호, 드는 비용]이 삼중 배열로 다 기록된다. 
        graph[a].push([b, c]);
    }

    const dijkstra = (start) => {
        // 시작 노드 초기화
        // 우선순위 큐 인스턴스 생성
        const pq = new PriorityQueue();
        pq.push([0, start]); // [거리, 노드]
        d[start] = 0;

        while (!pq.empty()) {
            // 현재 노드와 현재 노드까지의 최단 거리
            const [dist, cur] = pq.pop(); // 현재 최단 거리가 가장 짧은 노드

            // 최단 거리가 아닌 경우(방문한 적이 있는 경우) 스킵
            if (d[cur] < dist) continue;

            for (const i of graph[cur]) { // 인접 노드 탐색
                const node = i[0]; // 연결된 노드
                // dist = 현재 노드까지 올수 있는 제일 짧은 거리
                // i[1] = 현재 노드에서 갈 수 있는 노드 중 아무 노드 까지의 거리
                const cost = dist + i[1];
                // 이미 기록되어 있던 해당 노드까지의 최단길이와 비교
                if (cost < d[node]) {
                    // 최소값이 갱신되야한다면 다음 최소값으로 큐에 추가
                    pq.push([cost, node]);
                    // 최소값 테이블 갱신
                    d[node] = cost;
                }
            }
        }
    };

    dijkstra(start);

    for (let i = 1; i <= n; i++) {
        if (d[i] === Infinity) {
            console.log("INFINITY");
        } else {
            console.log(d[i]);
        }

        return d;
    }
}

console.log(solution(n, m, start, arr));
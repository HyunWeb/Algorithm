// 간단한 다익스트라 알고리즘 O(n)
// 노드 5,000 ~ 10,000개 이하에서 가능

const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, s, ...rest] = input;
// n = 노드 수, m = 간선 수
const [n, m] = nm.split(' ').map((v) => +v);
// s = 시작 노드 번호
const start = +s;

const arr = rest.map((str) => str.split(' ').map((v) => +v));
// 방문 여부
let visited = [...Array(n + 1).fill(false)];
// 최단 거리
let d = [...Array(n + 1).fill(Infinity)];

function solution(n, m, start, arr) {
    //초기화
    //[ [],[],[],[],[],[],[] ]
    const graph = Array.from(Array(n + 1), () => []);
    for (const v of arr) {
        // a, b, c = a부터 b까지 가는 비용이 c다. 
        const [a, b, c] = v;
        //[ [] , [ [ 2, 2 ], [ 3, 5 ], [ 4, 1 ] ], .... ,[] ]
        graph[a].push([b, c]);
    }

    // 방문하지 않은 노드에서 최단 거리가 가장 짧은 노드의 인덱스 반환
    const getSmallestNode = () => {
        let min = Infinity;
        let index = 0;

        // d = [Infinity, 0, 2, 5, 1, ...]
        for (const i in d) {
            // 방문하지 않았고 d의 모든 수 중 제일 작은 수가 최종 대입
            if (!visited[i] && min > d[i]) {
                min = d[i];
                index = i;
            }
        }
        return index;
    };

    const dijkstra = (start) => {
        // 시작 노드 초기화
        // start = 1
        d[start] = 0;
        visited[start] = true;
        // [ [ 2, 2 ], [ 3, 5 ], [ 4, 1 ] ]
        for (const i of graph[start]) {
            const [node, cost] = i;
            // 1번부터 2번 까지의 최단경로에 infinity 대신 cost값 2를 대입
            d[node] = cost;
        }

        //시작 노드를 제외한 전체 노드에 대해 반복
        // 0 ~ 5
        for (let i = 0; i < n; i++) {
            // 방문 안했으면서 최단 거리가 제일 짧은 노드의 인덱스
            const cur = +getSmallestNode();
            visited[cur] = true;

            // 해당 노드의 연결 정보를 토대로 현재 최단 거리표와 비교 및 갱신
            // 2번 노드 : [ [ 3, 3 ], [ 4, 2 ] ]
            for (const j of graph[cur]) {
                const node = j[0];
                // d = [Infinity, 0, 2, 5, 1, ...]x
                const cost = d[cur] + j[1];
                if (cost < d[node]) {
                    d[node] = cost;
                }
            }
        }
    };

    dijkstra(start);

    for (let i = 1; i <= n; i++) {
        if (d[i] === Infinity) {
            console.log('INFINITY');
        } else {
            console.log(d[i]);
        }
    }

    return d;
}
// solution(6, 11, 1, 1 2 2...)
console.log(solution(n, m, start, arr));

/*
    한 번 선택된(방문한) 노드는 최단 거리가 감소하지 않는다(갱신되지 않는다). 
    즉, 다익스트라 알고리즘이 진행되면서 한 단계당 하나의 노드에 대한
    최단 거리를 확실히 찾는 것으로 이해할 수 있다. 
*/
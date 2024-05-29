// 위상 정렬
/*
7 8
1 2
1 5
2 3
2 6
3 4
4 7
5 6
6 4
*/
class Queue {
    constructor() {
        this.items = [];
    }

    // 큐가 비었는지 확인
    empty() {
        return this.items.length === 0;
    }

    // 큐에 요소를 추가
    enqueue(element) {
        this.items.push(element);
    }

    // 큐에서 요소를 제거하고 반환
    dequeue() {
        if (this.empty()) {
            return null;
        }
        return this.items.shift();
    }
}


const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
arr = arr.map((str) => str.split(' ').map((v) => +v));

// 진입 차수
// 각 노드별 연결되어 있는 간선 횟수
let indegree = [...Array(n + 1).fill(0)];

function solution(n, m, arr){
    // 그래프 연결 정보
    // 각 노드별 연결된 노드 번호 현황
    let graph = Array.from(Array(n + 1), () => []);

    //그래프 및 진입 차수 초기화
    for (const value of arr) {
        const [u, v] = value;
        graph[u].push(v);
        // 연결이 닿고 있는 v 노드의 간선 횟수 증가
        indegree[v]++;
    }

    const q = new Queue();
    // 노드 개수만큼 반복
    for (let i = 1; i <= n; i++) {
        // 진입 차수가 0인 노드 큐에 삽입
        if (indegree[i] === 0) q.enqueue(i);
    }

    // 정답이 될 정렬된 순서 배열
    let sorted = [];
    // 큐가 빌때 까지 반복
    while (!q.empty()) {
        // 큐에서 노드빼서 결과 배열에 추가 
        const cur = q.dequeue();
        sorted.push(cur);

        // 해당 노드와 연결되어 있는 노드들
        for (const node of graph[cur]) {
            indegree[node]--; //간선 제거
            // 간선 제거 후 0이 됐으면 큐에 추가
            if (indegree[node] === 0) q.enqueue(node); 
            // 진입 차수가 0이 된 노드 큐에 삽입
        }
    }

    return sorted;
}

console.log(solution(n, m, arr));
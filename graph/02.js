// 도시 분할 계획
// 크루스칼 알고리즘
// 가장 마지막에 추가되는 도시는 제외
// 1. 그래프를 두개로 분할해야한다. 
// 2. 각 그래프 속의 노드는 서로서로 연결되어 있어야한다. 
// >> 최소 신장트리로 모든 노드를 우선 연결 > 비용 가장 큰 간선 하나만 지운다. 

/*
7 12
1 2 3
1 3 2
3 2 1
2 5 2
3 4 4
7 3 6
5 1 5
1 6 2
6 4 1
6 5 3
4 5 3
6 7 4
*/

const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, ...arr]  = input;
const [n, m] = nm.split(' ').map((v) => +v);
arr = arr.map((str) => str.split(' ').map((v) => +v));

function solution(n, m, arr) {
    // 노드의 부모 노드를 찾아간다. 
    const findParent = (parent, x) => {
     if (parent[x] === x) return parent[x];
     else return (parent[x] = findParent(parent, parent[x]));
    };

    // 노드의 부모 노드를 찾아서 더 작은 쪽의 노드로 바꾼다. 
    const unionParent = (parent, a, b) => {
        a = findParent(parent, a);
        b = findParent(parent, b);
        if (a < b) parent[b] = a;
        else parent[a] = b;
    }

    // 부모 배열을 자기 자신으로 초기화 시켜 놓는다. 
    let parent = [...Array(n + 1).fill(0)];
    for (let i = 1; i <= n; i++) {
        parent[i] = i;
    }

    // 받은 데이터들을 정렬을 위해 첫 요소를 cost로 바꾼다. 
    let edges = [];
    for (const value of arr) {
        const [u, v, cost] = value;
        edges.push([cost, u, v]);
    }

    // 비용을 오름차순으로 노드들을 정렬한다. 
    edges.sort((a, b) => a[0] - b[0]);

    let total = 0;
    let last = 0;
    for (const edge of edges) {
        const [cost, u, v] = edge;
        // 연결된 두 노드의 부모노드가 같지 않다면 실행
        if (findParent(parent, u) !== findParent(parent, v)) {
            // 노드 병합으로 둘 중 작은 노드가 부모노드가 될 수 있도록 대입
            unionParent(parent, u, v);
            total += cost;
            last = cost;
        }
    }

    return total - last;
};

console.log(solution(n, m, arr));
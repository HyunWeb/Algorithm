//크루스칼 알고리즘

/*
7 9
1 2 29
1 5 75
2 3 35
2 6 34
3 4 7
4 6 23
4 7 13
5 6 53
6 7 25
*/

const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, ...arr] = input
const [n, m] = nm.split(' ').map((v) => +v);
arr = arr.map((str) => str.split(' ').map((v) => +v));

const findParent = (parent, x) => {
    if (parent[x] === x) return parent[x];
    return (parent[x] = findParent(parent, parent[x]));
};

const unionParent = (parent, a, b) => {
    a = findParent(parent, a);
    b = findParent(parent, b);
    if (a < b) parent[b] = a; 
    else parent[a] = b;
};

function solution (n, m, arr) {
    // 부모 노드를 기록하는 배열, 처음엔 자기자신을 부모 번호로 초기화
    let parent = [...Array(n + 1).fill(0)];
    for (let i = 1; i <= n; i++) {
        parent[i] = i;
    }

    let edges = [];
    // 노드 두개와 이어지는 비용
    for (const value of arr) {
        const [u, v, cost] = value;
        // 오름차순 정렬을 위해 맨 앞에 cost
        edges.push([cost, u, v])
    }
    // 각 이중 배열의 첫번째 원소들(cost)로 오름차순 정렬
    edges.sort((a, b) => a[0] - b[0]);

    let result = 0;

    //모든 간선 확인
    for (const edge of edges) {
        const [cost, a, b] = edge;
        // 사이클이 발생하지 않는 경우에만 집합에 포함
        if (findParent(parent, a) !== findParent(parent, b)) {
            unionParent(parent, a, b);
            result += cost;
        }
    }

    return result;
}

console.log(solution(n, m, arr));
// 159



// 팀 결성
// 유니온 파인드 알고리즘
/*
7 8
0 1 3
1 1 7
0 7 6
1 7 1
0 3 7
0 4 2
0 1 1
1 1 1
*/


const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
const edges = arr.map((str) => str.split(' ').map((v) => +v));


//특정 원소가 속한 집합 찾기(루트 찾기)
const findParent = (parent, x) => {
    if (parent[x] === x) return parent[x];
    return (parent[x] = findParent(parent, parent[x]));
};

// 두 원소가 속한 집합을 합치기 (루트 갱신) 
const unionParent = (parent, a, b) => {
    a = findParent(parent, a);
    b = findParent(parent, b);
    if (a < b) parent[b] = a;
    else parent[a] = b;
};

function solution(n, m, edges) {
    // 부모 테이블 초기화
    let parent = [...Array(n + 1).fill(0)];
    for (let i = 1; i <= n; i++) {
        parent[i] = i;
    }

    for (let i = 0; i < m; i++) {
        const [oper, a, b] = edges[i]
        // 각각 0일때는 합연산을, 1일때는 부모가 같으면 yes 다르면 no
        if (oper === 0) {
            unionParent(parent, a, b);
        } else if (oper === 1) {
            if (findParent(parent, a) === findParent(parent, b)) {
                console.log('YES');
            } else {
                console.log('NO');
            }
        }
    }
    
}
solution(n, m, edges);

/*
NO
NO
YES
*/
// 서로소 집합
// 기본적인 서로소 집합 알고리즘
// 노드 a와 노드 b의 루트(부모) 노드를 찾고, 더 큰 번호에 해당하는 루트 노드를 작은 번호로 대체한다.
/*
  6 4
  1 4
  2 3
  2 4
  5 6
 */
const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
const edges = arr.map((str) => str.split(' ').map((v) => +v));


// 특정 원소가 속한 집합 찾기 (루트 찾기)
//-----------------------------------------------------
// 비 효율적인 부분이다. 모든 노드를 다 확인 해야할 수도 있댜. 
// 최악의 경우 시간복잡도가 O(V)가 된다. 
const findParent1 = (parent, x) => {
    // 반환값은 부모 노드의 번호다. 
    if (parent[x] === x) return x;
    return findParent(parent, parent[x]);
};
//-----------------------------------------------------
// 경로 압축 기법(개선)
const findParent = (parent, x) => {
    if (parent[x] === x) return parent[x];
    return (parent[x] = findParent(parent, parent[x]));
}
//-----------------------------------------------------


//두 원소가 속한 집합을 합치기 (루트 갱신)
const unionParent = (parent, a, b) => {
    //각 노드의 부모 번호를 대입
    a = findParent(parent, a);
    b = findParent(parent, b);
    // 비교 후 더 작은 번호로 부모노드 통일
    if (a < b) parent[b] = a;
    else parent[a] = b;
};

function solution(n, m, edges) {
    // 부모 테이블 초기화
    let parent = [...Array(n + 1).fill(0)];
    for (let i = 1; i <= n; i++) {
      parent[i] = i;
    }

    // union 연산 수행
    // 주어진 유니온 정보를 받아서 부모 노드 초기화
    for (const edge of edges) {
        const [a, b] = edge;
        unionParent(parent, a, b);
      }

    // 각 원소가 속한 집합 출력
    // 유니온 연산으로 정리가 끝난 부모노드 테이블 정리
    let sets = '';
    for (let i = 1; i <= n; i++) {
        sets += findParent(parent, i);
    }

    console.log(`각 원소가 속한 집합: ${sets.split('').join(' ')}`);
    // parent의 인덱스 0이 0이므로 1부터 마지막까지만 복사해서 조인
    console.log(`부모 테이블: ${parent.slice(1, n).join(' ')}`);
}

solution(n, m, edges);

/*
    각 원소가 속한 집합: 1 1 1 1 5 5
    부모 테이블: 1 1 2 1 5 5
*/

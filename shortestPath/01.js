// 미래도시
/*
    플로이드 워셜 알고리즘
    1 > K > X를 가는 최단 경로를 구하는 문제로, 
    1에서 K까지 가는 최단 경로와 X까지 가는 최단경로를 각각 알아야 하기 때문
*/
const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, ...arr] = input; 
const [n, m] = nm.split(' ').map((v) => +v);
let [x, k] = arr[m].split(' ').map((v) => +v);
arr.pop();
arr = arr.map((str) => str.split(' ').map((v) => +v));

function solution(n, m, x, k, arr) {
    // 길이가 n + 1인 배열 생성 후 각 배열의 길이를 n + 1로 설정 한 후 infinity로 채우기
    const d = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));
    for (let i = 1; i <= n; i++) d[i][i] = 0;
    for (const value of arr) {
        const [u, v] = value;
        // 연결된 노드끼리는 서로 왕복 가능하며 서로 오가는 비용이 1이다. 
        d[u][v] = 1;
        d[v][u] = 1;
    }

    for (let i = 1; i <= n; i++) {
        for (let from = 1; from <= n; from++) {
            for(let to = 1; to <= n; to++) {
                if( i === from || from === to) continue;
                d[from][to] = Math.min(d[from][to], d[from][i] + d[i][to]);
            }
        }
    }

    const dist = d[1][k] + d[k][x];
    return dist >= Infinity ? -1 : dist;
}

console.log(solution(n, m, x, k, arr));
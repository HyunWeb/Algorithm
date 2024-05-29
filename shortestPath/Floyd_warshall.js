// 플로이드 워셜 알고리즘
const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, m, ...rest] = input;
(n = +n), (m = +m);
const arr = rest.map((str) => str.split(' ').map((v) => +v));

function solution(n, m, arr) {
    // 최단거리 테이블 초기화 
    // 길이가 n + 1인 배열 생성 후 각 배열의 길이를 n + 1로 설정 한 후 infinity로 채우기
    let d = Array.from(Array(n + 1), () => Array(n + 1).fill(Infinity));
    
    // 자기 자신은 0으로 초기화
    for (let i = 1; i <= n; i++) d[i][i] = 0;
    
    // d테이블 1차 초기화 
    for (const value of arr) {
        const [u, v, cost] = value;
        d[u][v] = cost;
    }

    //모든 노드에 대해 반복
    for (let k = 1; k <= n; k++) {
        // 최단 거리 갱신
        for (let from = 1; from <= n; from++) {
            for (let to = 1; to <= n; to++) {
                if (k === from || from === to) continue; // 생략 가능
                // 1차 초기화인 직접 연결이냐 아니면 k를 지나가는 경로냐
                // 더 짧은 경로로 대입한다. 
                d[from][to] = Math.min(d[from][to], d[from][k] + d[k][to]);
            }
        }
    }

    let ans = '';
    for (let from = 1; from <= n; from++) {
        for (let to = 1; to <= n; to++) {
            if (d[from][to] === Infinity) ans += 'INFINITY';
            else ans += `${d[from][to]}`;
        }
        ans += '\n';
    }
    return ans;
}
console.log(solution(n, m, arr));
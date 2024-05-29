// 개미전사
// i 번째 식량 창고를 털지 안 털지 결정하고 최댓값을 구하면 된다. 
// d[i]는 i번째 식량 창고에 도달했을 때 털 수 있는 최대 식량을 의미한다. 

const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, arr] = input;
n = +n;
arr = arr.split(' ').map((v) => +v);

const d = [...Array(n + 1).fill(0)];

const dp = (n) => {
    d[0] = arr[0];
    d[1] = Math.max(arr[0], arr[1]);

    for (let i = 2; i < n; i++) {
        // 현재 창고와 2번째 전 창고를 터는 것
        // 바로 이전 창고까지의 최대 값 중 어느 것의 수가 더 큰지 비교
        d[i] = Math.max(d[i - 2] + arr[i], d[i - 1]);
    }
    return d[n - 1];
};

function solution(n, arr) {
    return dp(n);
}

console.log(solution(n, arr));
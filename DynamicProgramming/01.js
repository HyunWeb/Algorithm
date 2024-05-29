// 1로 만들기 

// 1. Top - Down
// 이전에 계산된 연산 결과 중 최소값을 고르기 위해서 Math.min을 사용한다. 
const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim();

const n = +input;

const d = [...Array(n + 1).fill(0)];

const dp = (x) => {
    if (x === 1 || x === 2 || x === 3 || x === 5) return 1;

    if(d[x] !== 0) return d[x];

    // 나눠지는 수가 있다면 해당 경우의 수와 - 1 을 했을 때의 경우의수를 비교한다. 
    // 둘 중 더 적은 횟수를 정답으로 가져가야하므로 Math.min으로 비교한다. 
    // 그리고 나눴든 뺐든 결국 연산을 한번 한것이므로 + 1을 더한다. 

    // 6은 3으로 나눠서 2가되고, 2는 2로 나눠 1이되므로 총 2번의 연산이다. 
    // Math.min(dp(2), dp(5)) + 1
    // Math.min(1, 1) + 1
    // 1 + 1 로 2가 되는 것
    if(x % 5 === 0) return (d[x] = Math.min(dp(x / 5), dp(x - 1)) + 1);
    if(x % 3 === 0) return (d[x] = Math.min(dp(x / 3), dp(x - 1)) + 1);
    if(x % 2 === 0) return (d[x] = Math.min(dp(x / 2), dp(x - 1)) + 1);
    // 나눠지는 수가 없다면 빼기만 진행하고 해당 연산에 대한 횟수 1을 더한다. 
    return (d[x] = dp(x - 1) + 1);
};

function solution(n) {
    return dp(n);
}

console.log(solution(n));


// 2. Bottom - Up
const dp2 = (x) => {
    d[1] = d[2] = d[3] = d[5] = 1;
    d[4] = 2;

    for (let i = 6; i <= x; i++) {
        d[i] = d[i - 1] + 1;
        if (i % 2 === 0) d[i] = Math.min(d[i / 2], d[i - 1]) + 1;
        if (i % 3 === 0) d[i] = Math.min(d[i / 3], d[i - 1]) + 1;
        if (i % 5 === 0) d[i] = Math.min(d[i / 5], d[i - 1]) + 1;
    }

    return d[x];
};
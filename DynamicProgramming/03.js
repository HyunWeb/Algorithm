// 바닥 공사
// d[i]는 가로가 i일 때 바닥을 채우는 방법의 수를 의미한다. 

const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim();

const n = +input;

const DIV = 796796;
const d = [...Array(n + 1).fill(0)];

const dp = (n) => {
    //d[0]은 가로가 0인것이므로 타일이 들어올수 없기에 0이다. 
    d[1] = 1;
    d[2] = 3;

    for (let i = 3; i <= n; i++) {
        d[i] = (d[i - 2] * 2 + d[i - 1]) % DIV;
    }

    return d[n];
};

function solution(n) {
    return dp(n);
}

console.log(solution(n));
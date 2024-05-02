// 수학적인 아이디어 활용 방식 O(1)
const fs = require('fs');
let input = fs.readFileSync("./tc.txt").toString().trim().split('\n');

let [nums, arr] = input;
// +v : 문자 앞에 +인 단항 연산자를 붙이면 숫자로 바뀐다. 
let [n, m, k] = nums.split(' ').map(v => +v);
arr = arr.split(' ').map(v => +v);

function solution(n, m, k, arr) {
    arr.sort((a, b) => b - a);
    const first = arr[0];
    const second = arr[1];

    //가장 큰 수가 더해지는 횟수
    // ~~ (소수점 방지)
    let count = ~~(m / (k + 1)) * k;
    count += m % (k + 1);
    
    let result = 0;
    result += count * first;
    result += (m - count) * second;
    
    return result;
}

console.log(solution(n, m, k, arr));
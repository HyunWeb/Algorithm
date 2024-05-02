// 기본적인 풀이 방식 O(m)
const fs = require('fs');
let input = fs.readFileSync("./tc.txt").toString().trim().split('\n');

let [nums, arr] = input;
// +v : 문자 앞에 +인 단항 연산자를 붙이면 숫자로 바뀐다. 
let [n, m, k] = nums.split(' ').map(v => +v);
arr = arr.split(' ').map(v => +v);

function solution(n, m, k, arr) {
    // b - a 가 양수면 b가 앞으로 오는 내림차순
    // a - b 가 양수면 a가 뒤로 오는 오름차순
    arr.sort((a, b) => b - a);
    const first = arr[0];
    const second = arr[1]; 

    let result = 0;
    while(1){
        if(m === 0) break;

        result += first * k;
        m -= k;

        result += second;
        m--;
    }

    return result;
}

console.log(solution(n, m, k, arr));

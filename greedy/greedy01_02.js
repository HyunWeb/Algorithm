// 단순하게 풀기(for)

const fs = require('fs');
let input = fs.readFileSync("./tc.txt").toString().trim().split('\n');

let [nums, arr] = input; 
let [n, m, k] = nums.split(' ').map(v => +v);
// +v : 문자 앞에 +인 단항 연산자를 붙이면 숫자로 바뀐다. 
arr = arr.split(' ').map(v => +v);

// [5, 8, 3], [2, 4, 5, 4, 6]
function solution(n, m, k, arr){
    arr.sort((a, b) => b - a);
    const first = arr[0];
    const second = arr[1];

    let result = 0;
    // 더해야하는 수 만큼 반복문을 돌린다. 
    //0, 1, 2, 3, 4, 5, 6, 7
    for(let i = 0, tmp = 0; i < m; i++){
        // tmp가 최소 반복숫자 3이 될때까지 제일 큰 수를 더한다. 
        // 하나의 반복 수열이 다 더해지면 종료가 될 것 6,6,6,5
        if(tmp === k){
            result += second;
            tmp = 0;
        } else {
            result += first;
            tmp++;
        }
    }
    return result; 
}
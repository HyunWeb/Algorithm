// 위에서 아래로

const fs = require('fs');
let input = fs.readFileSync("../tc.txt").toString().trim().split('\n');

let [n, ...arr] = input;
arr = arr.map((v) => +v.replace('\r', ''));

function solution(n, arr) {
    // 내림차순 정렬을 띄어쓰기로 붙여 실행
    return arr.sort((a, b) => b - a).join(' ');
}

console.log(solution(n, arr));
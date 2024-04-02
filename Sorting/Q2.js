const fs = require('fs');
let input = fs.readFileSync('./tc.txt').toString().trim().split('\n');

let [n, ...arr] = input;
const students = arr.map((v) => v.replace('\r', '').split(' '));


/*
[
  ['홍길동', '95'],
  ['이순신', '77']
]
*/
function solution(n, students) {
    const sortedNames = students
    .sort((a, b) => a[1] - b[1])
    .map((student) => student[0]);

    //['이순신', '홍길동']
    // join으로 인한 배열 > 하나의 문자열 변환 
    return sortedNames.join(' ');
}

console.log(solution(n, students));
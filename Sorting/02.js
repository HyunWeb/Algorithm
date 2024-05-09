// 성적이 낮은 순서로 학생 출력하기 

const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, ...arr] = input; 
const student = arr.map((v) => v.replace('\r', '').split(' '));

function solution(n, students) {
    const sortedNames = students
    .sort((a, b) => a[1] - b[1])
    .map((student) => student[0]);

    return sortedNames.join(' ');
}

console.log(solution(n, students));
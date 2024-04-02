const fs = require('fs');

//['3','15','27','12']
let input = fs.readFileSync('./tc.txt').toString().trim().split('\n');

/*
n = '3'
arr = ['15', '27', '12']
*/
let [n, ...arr] = input;
arr = arr.map((v) => +v.replace('\r', ''));

function solution(n, arr){
    // 공백으로 구분하여 출력하기 위한 join
    return arr.sort((a, b) => b - a).join(' ');
}

console.log(solution(n, arr));
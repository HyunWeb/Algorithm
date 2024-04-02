//O(nm) = O(100*100)

/*
입력
    3 3
    3 1 2
    4 1 4
    2 2 2
*/

const fs = require('fs');
let input = fs.readFileSync("./tc.txt").toString().trim().split('/n');

let [nm, ...arr] = input;
let [n, m] = nm.split(' ').map(v => +v);
arr = arr.map(v => v.split(' '.map(v => +v)));

function solution(n, m, arr){
    let result = 0;
    for(const cur of arr) {
        let result = Math.max(result, Math.min(...cur))
    }
    return result;
}

console.log(solution(n, m, arr));

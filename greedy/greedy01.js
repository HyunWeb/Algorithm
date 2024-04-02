// 단순하게 풀기 (while) => O(m) => O(10,000)

const fs = require('fs');
let input = fs.readFileSync("./tc.txt").toString().trim().split('\n');

let [nums, arr] = input; 
let [n, m, k] = nums.split(' ').map(v => +v);
// +v : 문자 앞에 +인 단항 연산자를 붙이면 숫자로 바뀐다. 
arr = arr.split(' ').map(v => +v);


function solution(n, m, k, arr){
    // 내림차순으로 정렬, 가장 큰수가 [0]
    arr.sort((a, b) => b - a);

    const first = arr[0];
    const second = arr[1];

    // 결과: 배열의 가장 큰수끼리 더해서 나올 수 있는 가장 큰 값
    let result = 0;

    while(1){
        //m은 더해야 할 수다. 
        if(m === 0) break;

        //k는 같은수가 k만큼만 연속 반복될 수 있다는 뜻
        result += first * k;
        m -= k;

        result += second; 
        m--;
    }

    return result;
}

console.log(solution(n, m, k, arr));
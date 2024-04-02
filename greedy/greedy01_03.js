// 수학적 아이디어 활용 방식 (반복되는 순열) => O(1)

// 1. 가장 큰수는 최대한 큰수를 연속으로 더하고 
// 2. 연속하지 못하는 순번에선 바로 다음 큰 수를 끼워 더한다.
// 3. 배열을 내림차순으로 정렬해서 제일큰수와 그 다음수를 변수에 담는다. 
// 4. k번 이상은 연속해서 못 더하니 k+1 만큼을 반복되는 수열로 잡는다.
// 5. 수열이 총 몇번이나 들어갈지 나눠서 계산한다. 
// 6. 각 수열당 제일큰수가 반복될 횟수 k를 곱한다. 
// 7. 수열로 안나눠떨어지는 나머지 큰 수를 따로 더해준다. 
// 8. 만들어진 가장 큰수가 들어가야할 횟수를 제일 큰수에 곱해서 산출

const fs = require('fs');
let input = fs.readFileSync("./tc.txt").toString().trim().split('\n');

let [nums, arr] = input; 
let [n, m, k] = nums.split(' ').map(v => +v);
// +v : 문자 앞에 +인 단항 연산자를 붙이면 숫자로 바뀐다. 
arr = arr.split(' ').map(v => +v);

function solution(n, m, k, arr){
    arr.sort((a, b) => b - a);
    const first = arr[0];
    const second = arr[1];

    //가장 큰 수가 더해지는 횟수
    // 곱하기를 바꿔 생각하면 / 연속된 숫자 3개 * 총 2그룹/ 이 된다. 
    // ~~는 비트연산자다. 나누기의 소수 부분을 삭제하고 정수 부분을 얻는다. 
    let count = ~~(m / (k + 1)) * k;
    // 수열로 딱 맞아떨어지지 않는 나머지는 개별적으로 추가시킨다. 
    count += m % (k + 1);

    let result = 0;
    result += count * first;
    result += (m - count) * second;

    return result;
}
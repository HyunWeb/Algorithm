const fs = require('fs');
let input = fs.readFileSync('../tc/txt').toString().trim().split('\n');

let [nm, arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
arr = arr.split(' ').map((v) => +v);

let ans = 0;
const binarySearch = (arr, target, start, end) => {
    while (start <= end) {
        const mid = ~~((start + end) / 2);
        const sum = arr.map((v) => (v < mid ? 0 : v - mid)).reduce((a, b) => a + b);

        if (target <= sum) {
            start = mid + 1;
            // 최대한 덜 잘랐을 때가 정답이므로 여기서 result 기록한다. 
            ans = mid;
        } else {
            end = mid - 1;
        }
    }

    return ans;
}

function solution(n, m, arr) {
    return binarySearch(arr, m, 0, Math.max(...arr));
}

console.log(solution(n, m, arr));
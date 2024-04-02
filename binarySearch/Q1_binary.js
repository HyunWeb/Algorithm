// 0((n+m)logN)
const fs = require('fs');
const input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, arr, m, req] = input;
n = +n;
arr = arr.split(' ').map((v) => +v);
m = +m;
req = req.split(' ').map((v) => +v);

const binarySearch = (arr, target, start, end) => {
    // 오름차순으로 정렬
    const sorted = arr.sort((a, b) => a - b);

    if (start > end) return -1;

    const mid = ~~((start + end) / 2);
    if (target === sorted[mid]) return mid;
    else if (target < sorted[mid])
        return binarySearch(arr, target, start, mid - 1);
    else return binarySearch(arr, target, m + 1, end);
};

function solution(n, m, arr, req) {
    let ans = '';
    for (const target of req) {
        if (binarySearch(arr, target, 0, n - 1) !== -1) 
        // 찾을시 yes 문자열 대입
        ans += 'yes ';
        // 못찾을시 -1 반환
        else ans += 'no ';
    }
    return ans;
}

console.log(solution(n, m, arr, req));


const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, arr, m, req] = input;
n = +n;
arr = arr.split(' ').map((v) => +v);
m = +m;
req = req.split(' ').map((v) => +v);

// 이진 탐색
const binarySearch = (arr, target, start, end) => {
    const sorted = arr.sort((a, b) => a - b);

    if (start > end) return - 1; 

    const mid = ~~((start + end) / 2);
    if (target === sorted[mid]) return mid;
    else if (target < sorted[mid])
        return binarySearch(arr, target, start, mid - 1);
    else return binarySearch(arr, target, mid + 1, end);
};

// 이진 탐색 활용
function solution(n, m, arr, req) {
    let ans = '';
    for (const target of req) {
        if (binarySearch(arr, target, 0, n - 1) !== -1) ans += 'yes ';
        else ans += 'no ';
    }
    return ans;
}

console.log(solution(n, m, arr, req));

// 계수 정렬 활용
function solution2(n, m, arr, req) {
    let store = [...Array(Math.max(...arr) + 1).fill(false)];
    arr.forEach((v) => (store[v] = true));

    let ans = '';
    for (const target of req) {
        if (store.has(target)) ans += 'yes ';
        else ans += 'no '
    }
    return ans;
}

console.log(solution2(n, m, arr, req));

// 집합 이용
function solution3(n, m, arr, req) {
    let store = new Set(arr);

    let ans = '';
    for(const target of req) {
        if (store.has(target)) ans += 'yes ';
        else ans += 'no ';
    }
    return ans;
}

console.log(solution3(n, m, arr, req));
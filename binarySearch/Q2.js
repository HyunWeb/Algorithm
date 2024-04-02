/*
1. 떡의 개수와 목표 길이를 변수로 입력 받는다. 
2. 떡의 개별 높이를 배열로 입력 받는다. 
3. 시작값은 0으로 끝값은 배열의 숫자중 최대값이 된다. 
4. 시작값이 끝값보다 작은동안 반복문을 계속 돌린다. 
5. 중간값을 구해놓는다. 
6. 떡 개별 길이를 하나하나 불러와서 
7. 중간값 보다 클경우 남는 값을 토탈에 더한다. 
8. 토탈이 목표길이보다 적은 경우 
9.  중간값을 1 낮춘다. 
10. 그렇지 않다면 
11. 결과물에 중간값을 기록한다. (최대한 덜 잘랐을때가 정답이니 올리기 전에 기록해준다.)
12. 그리고 중간값을 1 올린다. 
*/
const fs = require('fs')
const input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nm, arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
arr = arr.split(' ').map((v) => +v);

let ans = 0;
const binarySearch = (arr, target, start, end) => {
    while (start <= end) {
        const mid = ~~((start + end) / 2);
        // 각 떡의 길이에 대해서 중간보다 짧다면 안잘릴테니 0
        // 중간보다 길다면 중간만큼 잘리고 남은 수로 다시 배열을 채운다.
        // 나머지 길이로만 이루어진 배열의 아이템들을 서로 더해서 하나로 만든다. 
        const sum = arr.map((v) => (v < mid ? 0 : v - mid)).reduce((a, b) => a + b);

        if (target <= sum) {
            // 나머지가 목표값 보다 클때
            start = mid + 1; 
            ans = mid;
        } else {
            // 나머지가 목표값 보다 작을때 
            end = mid - 1;
        }
    }

    return ans;
}

function solution(n, m, arr) {
    return binarySearch(arr, m, 0, Math.max(...arr));
}

console.log(solution(n, m, arr));


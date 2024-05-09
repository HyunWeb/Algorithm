// 계수 정렬
// 최대값과 최소값의 차이가 백만 이하일때 효과적이다. 
// 동일한 값이 반복해서 나오는 경우에 효과적이다. 
// O(N + K) 데이터 개수 + 최대값의 크기정도의 시간복잡도
// 매우 빠르게 동작한다

const arr = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];

// 모든 경우의 수에 해당하는 크기의 배열 생성 후 0으로 초기화
const count = [...Array(Math.max(...arr) + 1).fill(0)];

// 각 배열 원소의 등장 횟수를 카운트
arr.forEach((num) => count[num]++);

// 카운트 완료된 배열을 출력
let sorted = '';
for (let num = 0; num < count.length; num++)
    sorted += num.toString().repeat(count[num]);
console.log([...sorted]);
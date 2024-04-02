const arr = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];

// [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] >> 10개
const count = [...Array(Math.max(...arr) + 1).fill(0)];

// 해당하는 인덱스의 숫자를 1씩 카운트
arr.forEach((num) => count[num]++);

let sorted = '';
for (let num = 0; num < count.length; num++)
    // 각 인덱스 번호의 숫자를 문자열의 형태로 몇번 반복 출력할 것인지 설정
    sorted += num.toString().repeat(count[num]);
console.log([...sorted]);
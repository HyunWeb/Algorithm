const arr = [21, 4, 11, 38, 1, 5];

// 유니코드 기반으로 정렬된 배열 반환
const sortedUni = arr.sort();
console.log(sortedUni); //[ 1, 11, 21, 38, 4, 5 ]

// 오름차순으로 정렬하기 위한 함수 설정
// 함수 결과값이 0보다 작으면 a b 크면  b a 순으로 정렬
const sortedNum = arr.sort((a, b) => a - b);
console.log(sortedNum); //[ 1, 4, 5, 11, 21, 38 ]
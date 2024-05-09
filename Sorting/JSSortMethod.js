// 자바스크립트의 정렬 라이브러리

const arr = [21, 4, 11, 38, 1, 5];

// 유니코드 기반 정렬이므로 그냥 쓰면 안된다. 
const sortedUni = arr.sort();
console.log(sortedUni); // [1, 11, 21, 38, 4, 5]

// 함수의 결과가 양수면 더 큰 값인 a가 뒤로가서 오름차순이 된다. 
const sortedNum = arr.sort((a, b) => a - b);
console.log(sortedNum); //[1, 4, 5, 11, 21, 38]
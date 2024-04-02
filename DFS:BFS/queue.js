let queue = [];

// 삽입(5) - 삽입(2) - 삽입(3) - 삽입(7) - 삭제() - 삽입(1) - 삽입(4) - 삭제()
queue.push(5);
queue.push(2);
queue.push(3);
queue.push(7);
queue.shift();
queue.push(1);
queue.push(4);
queue.shift();

console.log(queue); // 먼저 들어온 순서대로 출력
console.log(queue.reverse()); // 나중에 들어온 원소부터 출력
//-------------------------------------

//만약 원본 배열은 유지시킨 채 역순의 배열을 따로 만들고 싶다면?
let reversedQueue = [];

for (let i = queue.length - 1; i >= 0; i--) {
    reversedQueue.push(queue[i]);
}

console.log(reversedQueue); // 나중에 들어온 원소부터 출력

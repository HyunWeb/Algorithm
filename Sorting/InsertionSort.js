// 삽입 정렬
// 리스트의 데이터를 오름차순으로 정렬한다. 
// 데이터가 거의 정렬이 되어 있는 상황에서는 매우 빠르게 동작한다. 

let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

// 두번째 부터 마지막 까지 순회
for (let i = 1; i < array.length; i++) {
    // 해당 i부터 0까지 순회
    for (let j = i; j > 0; j--) {
        // 앞의 값이 더 작은수면 stop.
        if(array[j - 1] < array[j]) break;
        // 아니면 서로 자리 교체
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
    }
}

console.log(array);
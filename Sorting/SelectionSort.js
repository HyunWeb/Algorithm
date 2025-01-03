// 선택정렬_특정한 리스트에서 가장 작은 데이터를 찾는 경우에 주로 사용한다.
/*
O(N^2)의 시간 복잡도를 가진다. 
데이터의 개수가 늘어가면 급격하게 비효율적으로 바뀐다. 
*/

let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 0; i < array.length; i++){
    let minIdx = i; 
    for(let j = i + 1; j < array.length; j++) {
        if (array[minIdx] > array[j]) {
            minIdx = j;
        }
    }
    [array[i], array[minIdx]] = [array[minIdx], array[i]];
}

console.log(array);
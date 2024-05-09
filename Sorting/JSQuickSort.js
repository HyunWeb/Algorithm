// 자바스크립트의 장점을 살린 퀵 정렬
/*
    기존 방법 > 하나씩 비교 and 교체하며 순차적으로 진행
    해당 방법 > 필터 메서드로 피벗보다 큰값 작은값을 한번에 배열로 모아서 정렬한다. 
*/
let arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
const n = arr.length;

const quickSort = (arr) => {
    if (arr.length <= 1) return arr;

    const p = arr[0]; // 피벗지정
    const tail = arr.slice(1); //피벗을 제외한 배열

    const leftArr = tail.filter((v) => v <= p);
    const rightArr = tail.filter((v) => v > p);

    return [...quickSort(leftArr), p, ...quickSort(rightArr)];
};

console.log(quickSort(arr, 0, n - 1));


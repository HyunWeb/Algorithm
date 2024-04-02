// 가장 전형적인 퀵 정렬 방법. 
// 피벗보다 큰값과 작은 값을 하나하나 찾아서 서로 교환하며 맞춰 나가는 방식. 

let array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
const n = arr.length;

const quickSort = (arr, start, end) => {
    if (start >= end) return;

    const p = start;
    let left = start + 1;
    let right = end;

    while (left <= right) {
        // 피벗보다 큰 데이터 찾을 때까지 탐색
        while (left <= end && arr[p] >= arr[left]) {
            left++;
        }
        // 피벗보다 작은 데이터를 찾을 때까지 탐색
        while (right > start && arr[p] <= arr[right]) {
            right --;
        }

        //swap
        if (left > right) {
            [arr[p], arr[right]] = [arr[right], arr[p]];
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
        }
    }

    quickSort(arr, start, right - 1);
    quickSort(arr, right + 1, end);
};

quickSort(arr, 0, n - 1);
console.log(arr);
// 퀵 정렬
// 평균적으로 O(Nlog2N)의 시간복잡도를 가진다. 
// 최악의 경우엔 O(N^2)가 된다. 
// 데이터의 개수가 많을수록 빠르게 동작한다. 
// 데이터가 정렬되어 있는 경우는 오히려 느리게 동작한다. 

let arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
const n = arr.length;

const quickSort = (arr, start, end) => {
    // 배열은 그대로지만 분할이 진행될수록 start와 end가 좁혀진다. 
    if (start >= end) return;

    const p = start; // 0
    let left = start + 1; // 1
    let right = end; // 9

    while (left <= right) {
        // 왼쪽 값의 인덱스는 끝값의 인덱스보단 작아야하고,
        // 왼쪽 값이 피벗보다 작다면 큰값이 나올때까지 인덱스를 올린다. 
        while (left <= end && arr[p] >= arr[left]) {
            left ++;
        }

        // 오른쪽 값의 인덱스는 첫값보다는 커야하고, 
        // 값이 피벗값 보다 크다면 작은 값이 나올때까지 인덱스를 줄인다. 
        while (right > start && arr[p] <= arr[right]) {
            right--;
        }

        // 둘이 교차되어서 왼쪽 인덱스가 오른쪽 보다 커졌다면
        if (left > right) {
            // 피벗과 보다 작은값인 오른쪽 값을 스왑
            [arr[p], arr[right]] = [arr[right], arr[p]];
        }else {
            // 교차 전 이라면 좌 우 값만 서로 스왑 
            [arr[left], arr[right]] = [arr[right], arr[left]];
        }
    }

    // 정렬 끝났으면 분할된 부분만으로 다시 정렬시작
    quickSort(arr, start, right - 1);
    quickSort(arr, right + 1, end);
}

quickSort(arr, 0, n - 1);
console.log(arr);
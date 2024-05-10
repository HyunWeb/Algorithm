// 이진 탐색(재귀함수로 구현한 버전)
// 정렬되어 있어야만 사용할 수 있는 알고리즘
// 탐색 범위를 절반씩 좁혀가며 데이터를 탐색한다. 
// 절반씩 줄여가며 데이터를 탐색 >> O(logN) 시간복잡도

const binarySearch = (arr, target, start, end) => {
    if (start > end) return -1; //원소가 존재하지 않는 경우

    // not 비트 두번으로 소수점 이하 버리기 강제
    const mid = ~~((start + end) / 2);
    if (target === arr[mid]) return mid
    else if (target < arr[mid]) return binarySearch(arr, target, start, mid - 1);
    else return binarySearch(arr, target, mid + 1, end);
};

const n = 10;
const target = 7;
const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const start = 0, end = n - 1;
console.log(binarySearch(arr2, target, start, end) + 1);


// 이진탐색(반복문으로 구현한 버전)
const binarySearch2 = (arr, target, start, end) => {
    while (start <= end) {
        const mid = ~~((start + end) / 2);
        if (target === arr[mid]) return mid;
        else if (target < arr[mid]) end = mid - 1;
        else start = mid + 1;
    }

    return -1;
}

const n2 = 10;
const target2 = 7;
const arr2 =[1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

const start2 = 0, end2 = n - 1;
console.log(binarySearch(arr, target, start, end) + 1)
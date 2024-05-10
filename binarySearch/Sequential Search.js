// 순차 탐색 
// 정렬되지 않은 리스트에서 데이터를 하나씩 확인해서 찾아야할때 
const sequentialSearch = (n, target, arr) => {
    for (let i = 0; i < n; i++){
        if (target === arr[i]) return i + 1;
    }
}

const n = 5;
const target = 'Dongbin'
const arr = ['Haneul', 'Jonggu', 'Taeil', 'Sangwook'];

console.log(sequentialSearch(n, target, arr));
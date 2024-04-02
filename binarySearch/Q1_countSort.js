// 계수 정렬을 활용한 방법
function solution(n, m, arr, req) {
    // 필요한 숫자만큼 배열을 만들어서 false로 채운다. 
    let store = [...Array(Math.max(...arr) + 1).fill(false)];
    // 각 번호에 해당하는 인덱스를 true로 바꿔둔다. 
    arr.forEach((v) => (store[v] = true));

    let ans = '';
    // 필요한 숫자만큼 변수에 넣어서 반복문을 돌린다. 
    for (const target of req) {
        // 만약 해당 번호의 인덱스가 true라면 번호가 있다는 것이다. 
        if (store[target]) ans += 'yes ';
        else ans += 'no ';
    }
    return ans;
}
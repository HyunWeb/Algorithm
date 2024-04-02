// Set 집합 자료형을 활용하는 방법

function solution(n, m, arr, req) {
    let store = new Set(arr);

    let ans = '';
    for (const target of req) {
        // 집합 자료형에 target 숫자가 있나? 검사하는 메서드
        if (store.has(target)) ans += 'yes ';
        else ans += "no ";
    }
    return ans;
}


console.log(solution(n, m, arr, req));
function solution(N) {
  const results = [];

  function backtrack(sum, selectedNums, start) {
    if (sum === 10) {
      results.push(selectedNums);
      return;
    }

    for (let i = start; i <= N; i++) {
      if (sum + i <= 10) {
        backtrack(sum + i, selectedNums.concat(i), i + 1);
      }
    }
  }

  // sum, selectedNums, start
  backtrack(0, [], 1);
  return results;
}
/*
시작은 합 0, 시작 숫자 1부터 탐색 시작
1부터 5까지 올라가며 현재 합에 추가했을때 10 이하인지 검사
이하면 
1. 합 결과에 숫자 더하기
2. 선택 배열에 해당 숫자 추가
3. 다음 숫자 부터 탐색 다시 시작
*/

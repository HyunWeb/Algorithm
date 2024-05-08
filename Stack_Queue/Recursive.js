//재귀함수를 활용한 팩토리얼 구현

//1. 반복문의 활용
const factorialIterative = (n) => {
    let result = 1;

    for(let i = 2; i <= n; i++){
        result *= i;
    }
    return result;
}

//2. 재귀적으로 활용
const factorialRecursive = (n) => {
    if(n < 2) return 1;
    return n * factorialRecursive(n - 1);
}

console.log(factorialIterative(5));
console.log(factorialRecursive(5));
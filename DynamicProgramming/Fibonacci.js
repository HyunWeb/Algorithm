// 피보나치 함수
// 동일한 함수가 반복적으로 호출된다. 
// O(2^n)
const fibo = (x) => {
    if (x === 1 || x === 2) return 1;
    return fibo(x - 1) + fibo(x - 2);
};
console.log(fibo(4));


// 피보나치 수열(재귀적)
// 한 번 구한 정보를 배열에 저장한다
// O(n)
let d = [...Array(100).fill(0)];

const fibo2 = (x) => {
    if (x === 1 || x === 2) return 1;

    if(d[x] != 0) return d[x];
    return (d[x] = fibo(x - 1) + fibo(x - 2));
};

console.log(fibo2(4));



// 호출되는 함수 확인
let d2 = [...Array(100).fill(0)];

const fibo3 = (x) => {
    console.log(`f(${x})`);
    if (x === 1 || x === 2) return 1;

    if (d[x] != 0) return d[x];
    return (d[x] = fibo(x - 1) + fibo(x - 2));
};

fibo3(6)



// 피보나치 수열 (반복적)
// 보업 업 방식으로 구현
// O(n)

const n = 99;
let d3 = [...Array(n + 1).fill(0)];

const fibo4 = (x) => {
    d[1] = d[2] = 1;

    for (let i = 3; i <= n; j++) {
        d[i] = d[i - 1] + d[i - 2];
    }
    return d[x];
};

console.log(fibo4(n));
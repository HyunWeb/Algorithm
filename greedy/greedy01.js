const COIN_TYPES = [500, 100, 50, 10];

let n = 1260;
let count = 0;

for(const coin of COIN_TYPES) {
    // ~~ 는 소수점 이하를 버려 정수만 남기는 비트 연산자다.
    count += ~~(n / coin);
    n %= coin;
}

console.log(count);
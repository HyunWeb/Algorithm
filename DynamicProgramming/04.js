// 효율적인 화폐 구성
// d[i]는 i원을 만들기 위한 최소한의 화폐 개수이며, d[i] = Infinity인 경우 
// i원을 만들 수 있는 화폐 구성이 없다는 의미이다. 

const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

const [nm, ...arr] = input;
const [n, m] = nm.split(' ').map((v) => +v);
const coins = arr.map((v) => +v);

const d = [...Array(m + 1).fill(Infinity)];

const dp = (n, m, coins) => {
    // 0은 동전없어도 이미 완성이므로 무한이 아닌 0을 대입시켜준다. 
    d[0] = 0; 
    // 해당 코인숫자와 동일한 배열 원소에는 혼자만으로 숫자가 완성이 되니까 1을 넣는다. 
    for (const coin of coins) d[coin] = 1;

    // 1부터 만들어야할 숫자 m까지 숫자를 점차 올린다. 
    for (let i = 1; i <= m; i++) {
        // 매 반복마다 화폐 단위를 하나씩 가져온다. 
        for (const coin of coins) {
            // 화폐 단위보다 작은 숫자는 만들수 없으므로 넘긴다. 
            if (i < coin) continue;
            // 해당 숫자를 만들기위해 필요한 화폐의 최소 갯수를 구한다. 
            /*
            새로운 화폐 단위를 고려대상으로 놓았을때
            해당 숫자를 만들기 위한 동전 갯수가 
            이전 화폐 단위가 좀 더 최솟값이었는지,
            새로운 화폐 단위로 인해서 더 최솟값을 만들수 있는 상황이 됐는지
            두 상황을 고려해서 둘 중 최솟값을 고른다. 
            */
            d[i] = Math.min(d[i], d[i - coin] + 1) ;
        }
    }

    return d[m];
}

function solution(n, m, coins) {
    const result = dp(n, m, coins);
    return result === Infinity ? -1 : result;
}
console.log(solution(n, m, coins));
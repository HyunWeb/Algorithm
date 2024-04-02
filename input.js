// 입력 값
/*
3
15
27
12
*/

// 모듈 사용을 위해서 받아온다. 
const fs = require('fs');

//['3','15','27','12']
let input = fs.readFileSync('./tc.txt').toString().trim().split('\n');

/*
n = '3'
arr = ['15', '27', '12']
*/
let [n, ...arr] = input;

// 윈도우의 경우 \n과 \r(캐리지 리턴)이 개행시 같이 적힌다. 그래서 \r을 ''로 지워주기 위한 replace
arr = arr.map((v) => +v.replace('\r', ''));
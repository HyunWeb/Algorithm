// 상하좌우
/*
공간의 크기 N = 5 * 5
5
R R R U D D
이동 방향
*/

const fs = require('fs');
let input = fs.readFileSync("../tc.txt").toString().trim().split('\n');

let [n, arr] = input; 
n = Number(n);
arr = arr.split(' ');

function solution(n, arr) {
    const DIR = {
        L: [0, -1],
        R: [0, 1],
        U: [-1, 0],
        D: [1, 0]
    }

    let point = [1, 1];
    for(const d of arr) {
        const [x, y] = DIR[d];

        // 임시로 이동할 결과를 대입시켜놓는다. 
        const nx = point[0] + x;
        const ny = point[1] + y;
        
        // 필드 밖으로 벗어나면 다음 움직임으로 넘어간다. 
        if(nx < 1 || nx > n || ny < 1 || ny > n)
            continue;
        
        // 필드 내라고 확인되면 이동을 위해 정식으로 대입한다. 
        point[0] = nx;
        point[1] = ny;
    }

    // 최종 이동 좌표 반환
    return `${point[0]} ${point[1]}`;
}

console.log(solution(n, arr));
// 3 4
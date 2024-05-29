// 커리큘럼
// 위상 정렬 알고리즘
// 인접 노드 탐색할 때, 강의를 수강하기까지 걸리는 시간 갱신
/*
5
10 -1
10 1 -1
4 1 -1
4 3 1 -1
3 3 -1
*/
class Queue {
    constructor() {
        this.items = [];
    }

    // 큐가 비었는지 확인
    empty() {
        return this.items.length === 0;
    }

    // 큐에 요소를 추가
    enqueue(element) {
        this.items.push(element);
    }

    // 큐에서 요소를 제거하고 반환
    dequeue() {
        if (this.empty()) {
            return null;
        }
        return this.items.shift();
    }
}

const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [n, ...arr] = input;
n = +n;
arr = arr.map((str) => str.split(' ').map((v) => +v));
/* 
arr = 
[
  [ 10, -1 ],
  [ 10, 1, -1 ],
  [ 4, 1, -1 ],
  [ 4, 3, 1, -1 ],
  [ 3, 3, -1 ]
]
*/

function solution(n, arr) {
    // ! 데이터 초기화
    // 노드 개수만큼의 0이 나열된 배열
    // 각 강의의 진입 차수
    let indegree = [...Array(n + 1).fill(0)];
    // 노드 개수만큼의 이중배열
    // 각 강의의 선행 관계
    let graph = Array.from(Array(n + 1), () => []);
    // 노드 개수만큼의 0이 나열된 배열
    // 각 강의의 수강 시간
    let times = [...Array(n + 1).fill(0)];

    //! 그래프 및 진입 차수 초기화
    //노드 개수만큼 반복
    for (let i = 0; i < arr.length; i++) {
        const [time, ...rest] = arr[i];
        /*  arr[i] = 
        [ 10, -1 ]
        [ 10, 1, -1 ]
        [ 4, 1, -1 ]
        [ 4, 3, 1, -1 ]
        [ 3, 3, -1 ]

        time, rest = 
        10 [ -1 ]
        10 [ 1, -1 ]
        4 [ 1, -1 ]
        4 [ 3, 1, -1 ]
        3 [ 3, -1 ]
        */
       
        // 무조건 -1로 배열이 끝나니까 선행노드는 -1을 제외시킨 -1개만큼이다. 
        for (let j = 0; j < rest.length - 1; j++) {
            // i가(노드가)1일때 가지는 rest의 배열 속의 원소[1, -1]를 활용해
            // j에 0을 대입시켜서  rest[0] = 1을 끄집어 낸다. 
            // graph[1]의 배열속에 push 한다.
            // push 되는 숫자는 (인덱스 + 1 = 노드 번호)이다. 
            // graph의 1번째 인덱스에 노드숫자 2를 대입하라
            graph[rest[j]].push(i + 1);
            /*
            선행을 원하는 노드 번호가 대입된다. 
            1번 노드를 선행해야 하는 노드 2, 3, 4번 노드 
            [ [], [], [], [], [], [] ]
            [ [], [ 2 ], [], [], [], [] ]
            [ [], [ 2, 3 ], [], [], [], [] ]
            [ [], [ 2, 3, 4 ], [], [ 4 ], [], [] ]
            [ [], [ 2, 3, 4 ], [], [ 4, 5 ], [], [] ]
            */
        }
        // i + 1는 노드 번호 i가 1인건 노드 번호 2를 의미하는 것
        // indegree 2번 노드는 1개의 선행 노드를 가진다.
        // indegree는 각 노드들이 가지는 선행 노드의 숫자다. 
        indegree[i + 1] = rest.length - 1;
        /*
        [ 0, 0, 0, 0, 0, 0 ]
        [ 0, 0, 1, 0, 0, 0 ]
        [ 0, 0, 1, 1, 0, 0 ]
        [ 0, 0, 1, 1, 2, 0 ]
        [ 0, 0, 1, 1, 2, 1 ]
        */

       // 2번 노드에 시간 10을 대입하라. 
        times[i + 1] = time;
        /*
        [ 0, 10, 0, 0, 0, 0 ]
        [ 0, 10, 10, 0, 0, 0 ]
        [ 0, 10, 10, 4, 0, 0 ]
        [ 0, 10, 10, 4, 4, 0 ]
        [ 0, 10, 10, 4, 4, 3 ]
        */
    }

    // !초기 큐 설정
    let result = [];

    const q = new Queue();
    // 모든 노드를 탐색해서 선행 노드가 없는 노드들을 추가 
    for (let i = 1; i <= n; i++) {
        // 해당 노드에 선행 노드가 존재하지 않으면
        if (indegree[i] === 0) {
            // 해당 노드를 큐에 추가 
            q.enqueue(i);
            // result 배열의 노드번째에 해당 노드 시간 추가
            result[i] = times[i];
        }
    }

    // !위상 정렬
    // 큐가 빌때까지 실행
    while (!q.empty()) {
        // 선행이 없는 큐를 꺼내서 cur에 추가 
        const cur = q.dequeue();
        // 선행 없는 해당 노드를 선행으로 가지는 다른 노드들을 탐색
        for (const node of graph[cur]) {
            // result 2번 인덱스에 대입하라 result 1번 현재 노드의 강의 시간 + 2번의 강의 시간의 합을
            // 2번 노드에 선행 노드와 자기자신의 강의 시간의 합을 대입하라
            result[node] = result[cur] + times[node];

            // 선행 노드의 개수를 하나 내린다. 
            indegree[node]--;
            // 선행 노드가 0개가 되었다면 큐에 해당 노드를 추가시킨다. 
            if (indegree[node] === 0) q.enqueue(node);
        }
    }

    // 최종 결과 출력
    for (let i = 1; i <= n; i++) {
        console.log(result[i]);
    }
}

solution(n, arr);
/*
10
20
14
18
17
*/
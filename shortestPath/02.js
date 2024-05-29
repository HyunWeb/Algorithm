class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    empty() {
        return this.heap.length === 0;
    }
    peek() {
        return this.heap[0];
    }
    push(data) {
        this.heap.push(data);

        let i = this.heap.length - 1;
        while (i > 0) {
            const parent = ~~((i - 1) / 2);
            if (this.heap[parent] <= this.heap[i]) break;
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
        }
    }
    pop(){
        if (this.empty()) return;
        const value = this.peek();

        [this.heap[0], this.heap[this.heap.length - 1]] = [
            this.heap[this.heap.length - 1],
            this.heap[0]
        ];

        this.heap.pop();
        this._heapify();
        return value;
    }
    _heapify() {
        const x = this.peek();
        const n = this.heap.length;
        let cur = 0; 

        while(2 * cur + 1 < n) {
            const leftChild = 2 * cur + 1;
            const rightChild = leftChild + 1;
            const smallChild = 
                rightChild < n && this.heap[rightChild] < this.heap[leftChild]
            ? rightChild
            : leftChild;

            if (x > this.heap[smallChild]) {
                [this.heap[cur], this.heap[smallChild]] = [
                    this.heap[smallChild],
                    this.heap[cur]
                ];
                cur = smallChild;
            } else {
                break;
            }
        }
    }
}
const fs = require('fs');
let input = fs.readFileSync('../tc.txt').toString().trim().split('\n');

let [nmc, ...arr] = input;
const [n, m, c] = nmc.split(' ').map((v) => +v);
arr = arr.map((str) => str.split(' ').map((v) => +v));

let d = [...Array(n + 1).fill(Infinity)];
function solution(n, m, c, arr) {
    let graph = Array.from(Array(n + 1), () => []);

    for (const value of arr) {
        const [u, v, dist] = value;
        graph[u].push([v, dist]);
    } 

    const pq = new PriorityQueue();
    pq.push([0, c]);
    d[c] = 0;

    while (!pq.empty()) {
        const [dist, cur] = pq.pop();

        if (d[cur] < dist) continue;

        for (const i of graph[cur]) {
            const node = i[0];
            const cost = dist + i[1];
            if (cost < d[node]) {
                pq.push([cost, node]);
                d[node] = cost;
            }
        }
    }
    // 인덱스 1부터 끝까지 배열을 복사해서 새로운 배열로 반환한다. 
    d = d.slice(1);
    // (v) => v && 는 v가 0이 아닐땐 truty로 암묵적 변환이 됨 즉 0이 아닌 조건
    const count = d.filter((v) => v && v !== Infinity).length;
    const max = Math.max(...d);

    return [count, max];
}

console.log(solution(n, m, c, arr));
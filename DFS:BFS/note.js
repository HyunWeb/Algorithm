class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue{
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0; 
    }

    isEmpty() {
        return this.size === 0; 
    }

    // 새로운 노드를 추가한다. 
    enqueue(data) {
        const newNode = new Node(data);
        if(this.isEmpty()) this.front = newNode;
        else this.rear.next = newNode;

        this.rear = newNode;
        this.size++;
    }

    dequeue() {
        if(this.isEmpty()) return;
        const data = this.front.data;
        this.front = this.front.next;
        this.size --;
        return data;
    }
}

const bfs = (graph, start, visited) => {
    const q = new Queue();
    q.enqueue(start);
    visited[start] = true;

    while (!q.isEmpty()){
        const v = q.dequeue();
        console.log(v);

        // 2. 탐색 노드의 인접 노드 확인
        for (const cur of graph[v]){
            if(!visited[cur]) {
                q.enqueue(cur);
                visited[cur] = true;
            }
        }
    }
}

const arrbfs = (graph, start, visited) => {
    const q = [];
    q.push(start);
    visited[start] = true;

    while(q.length !== 0) {
        const v = q.shift();
        console.log(v);

        for(const cur of graph[v]) {
            if(!visited[cur]) {
                q.push(cur);
                visited[cur] = true;
            }
        }
    }
}

let graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7],
]

let visited = [...Array(9).fill(false)];
bfs(graph, 1, visited);
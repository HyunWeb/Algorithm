// 연결 리스트로 구현한 큐
/* 
    배열로 큐를 구현한 경우 시간복잡도가 O(n)이다. 
    하지만 연결리스트 객체로 큐를 구현한 경우 O(1)의 시간에 해결할 수 있으므로 
    훨씬 효율적으로 작업할 수 있다. 
*/
class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

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
        this.size--;
        return data;
    }
}


const q = new Queue();
q.enqueue(5);
q.enqueue(2);
q.enqueue(3);
q.enqueue(7);
q.dequeue();
q.enqueue(1);
q.enqueue(4);
q.dequeue();

console.log(q);
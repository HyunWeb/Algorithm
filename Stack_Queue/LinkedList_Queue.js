// 연결 리스트로 구현한 큐
/* 
    배열로 큐를 구현한 경우 시간복잡도가 O(n)이다. 
    하지만 연결리스트 객체로 큐를 구현한 경우 O(1)의 시간에 해결할 수 있으므로 
    훨씬 효율적으로 작업할 수 있다. 
*/
class Node{
    constructor(data) {
        // 노드는 본인의 데이터값과 
        this.data = data;
        // 본인 다음에 누가 오는지 뒷차례 노드를 기억한다. 
        this.next = null;
    }
}

// 큐는 놀이공원 대기 줄과 같다. 
// 먼저 들어온게 제일 먼저 나간다. 
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
        // 비어있다면 >> 첫 노드는 제일먼저 나가야하므로 front로 저장. 
        if(this.isEmpty()) this.front = newNode;
        // 추가되는 두번째 노드 부터는 rear가장 뒤쪽의 next 다음으로 즉 마지막으로 지정된다. 
        else this.rear.next = newNode;
        // 현재 가장 마지막을 나타낸다. 
        this.rear = newNode;
        this.size++;
    }

    dequeue() {
        if(this.isEmpty()) return;
        // 첫번째를 data에 담아놓는다. 
        const data = this.front.data;
        // 노드는 뒷차례 노드를 가져와 처음 front로 다시 등록시킨다. 
        this.front = this.front.next;
        // 사이즈를 줄이고 저장해놨던 기존 첫번째 요소를 반환한다. 
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
class Node{
    consturctor(data) {
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
        if(this.isEmpry()) this.front = newNode;
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
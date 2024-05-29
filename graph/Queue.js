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
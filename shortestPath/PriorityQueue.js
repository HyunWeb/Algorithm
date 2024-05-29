// 우선순위 큐 구현 (최소 힙)
// 자바스크립트의 경우 우선순위 큐를 직접 구현해야 한다. 

class PriorityQueue {
    // 초기 상태 설정을 위한 생성자. 배열을 heap으로 할당
    constructor() {
        this.heap = [];
    }

    // 비어있는지 확인하는 메서드 
    // 길이가 0이면 true 반환
    empty() {
        return this.heap.length === 0;
    }

    // 우선순위가 가장 높은 요소(최소값)을 반환. 
    // 배열의 첫번째 요소 반환
    peek() {
        return this.heap[0];
    }

    // 새로운 데이터를 추가.
    // 데이터 push후 제자리를 찾을 때까지 부모 노드와 비교하여 위치를 조정
    push(data) {
        this.heap.push(data);

        let i = this.heap.length - 1;
        while (i > 0) {
            // 부모 노드를 산출하는 식
            const parent = ~~((i - 1) / 2);
            if (this.heap[parent] <= this.heap[i]) break;
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
        }
    }

    // 우선순위가 가장 높은 요소를 제거하고 반환 즉 첫 번째 요소를 제거 후 반환
    // 반환 후 heapify 연산으로 다시 힙의 성질을 유지
    pop() {
        if (this.empty()) return;
        //첫번째 원소를 value에 담아둔다. 
        const value = this.peek();

        // 배열 원소의 첫번째와 마지막의 위치를 바꾼다. 
        [this.heap[0], this.heap[this.heap.length - 1]] = [
            this.heap[this.heap.length - 1],
            this.heap[0],
        ];

        // 마지막으로 옮겨진 첫번째였던 원소를 지운다. 
        this.heap.pop();

        // 재 연산 시켜서 최소힙을 유지한다. 
        this._heapify();

        // 담아뒀던 첫번째 였던 원소 값을 출력한다. 
        // pop()으로 삭제했더라도 대입했던 값은 그대로 유지된다. 
        return value;
    }

    // 힙의 성질 유지를 위한 내부 메서드.
    // 주어진 노드를 기준으로 그 자식 노드들과 우선순위를 비교하여 노드의 위치를 조정
    _heapify() {
        const x = this.peek();
        const n = this.heap.length;
        let cur = 0;

        while (2 * cur + 1 < n) {
            // 인덱스를 구하는 식 2 * 부모 인덱스 + 1 or + 2
            const leftChild = 2 * cur + 1;
            const rightChild = leftChild + 1;
            const smallerChild = 
                // 노드의 최대값 고려 && 더 작은 값 도출
                rightChild < n && this.heap[rightChild] < this.heap[leftChild]
                ? rightChild
                : leftChild;

            // 루트 노드의 값이 더 큰 경우 swap
            if (x > this.heap[smallerChild]) {
                [this.heap[cur], this.heap[smallerChild]] = [
                    this.heap[smallerChild],
                    this.heap[cur],
                ];
                cur = smallerChild;
            } else {
                break;
            }
        }
    }
}

module.exports = PriorityQueue;
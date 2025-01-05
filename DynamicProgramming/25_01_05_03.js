class MinHeap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }
  push(item) {
    this.items.push(item);
    this.bubbleUp();
  }
  pop() {
    if (this.size() === 0) {
      return null;
    }
    const min = this.items[0];
    this.items[0] = this.items[this.size() - 1];
    this.items.pop();
    this.bubbleDown();
    return min;
  }

  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.items[parentIndex][0] <= this.items[index][0]) {
        break;
      }
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }
  bubbleDown() {
    let index = 0;
    while (index * 2 + 1 < this.size()) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;

      let smallerChild =
        rightChild < this.size() &&
        this.items[rightChild][0] < this.items[leftChild][0]
          ? rightChild
          : leftChild;
      if (this.items[index][0] <= this.items[smallerChild][0]) {
        break;
      }

      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }
}

function solution(graph, start) {
  // 무한대로 초기화
  const distance = {};
  for (const node in graph) {
    distance[node] = Infinity;
  }

  // 시작 노드 거리값 0으로 초기화
  distance[start] = 0;

  const queue = new MinHeap();
  queue.push([distance[start], start]);

  // 시작노드 경로 초기화
  const paths = { [start]: [start] };

  while (queue.size() > 0) {
    // 가장 거리값이 작은 노드 가져오기
    const [currentDistance, currentNode] = queue.pop();

    // 현재 저장된 거리가 큐값보다 작으면 이미 처리된것이므로 무시
    if (distance[currentNode] < currentDistance) {
      continue;
    }

    //현재 노드와 인접한 노드들의 거리 계산
    for (const adjacentNode in graph[currentNode]) {
      const weight = graph[currentNode][adjacentNode];
      const distance = currentDistance + weight;

      // 계산한 값이 기존 거리보다 짧으면 경로 업데이트
      if (distance < distance[adjacentNode]) {
        distance[adjacentNode] = distance; // 최소 비용 업데이트
        paths[adjacentNode] = [...paths[currentNode], adjacentNode];

        queue.push([distance, adjacentNode]);
      }
    }
  }

  // paths 배열을 노드 번호에 따라 오름차순 정렬
  const sortedPaths = {};
  Object.keys(paths)
    .sort()
    .forEach((node) => {
      sortedPaths[node] = paths[node];
    });

  return [distance, sortedPaths];
}

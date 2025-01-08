// 최소힙 구현
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
  const distance = {};
  for (const node in graph) {
    distance[node] = Infinity;
  }

  distance[start] = 0;

  const queue = new MinHeap();
  queue.push([distance[start], start]);

  const paths = { [start]: [start] };

  while (queue.size() > 0) {
    const [currentDistance, currentNode] = queue.pop();

    if (distance[currentNode] < currentDistance) {
      continue;
    }

    for (const adjacentNode in graph[currentNode]) {
      const weight = graph[currentNode][adjacentNode];
      const distance = currentDistance + weight;

      if (distance < distance[adjacentNode]) {
        distance[adjacentNode] = distance;
        paths[adjacentNode] = [...paths[currentNode], adjacentNode];

        queue.push([distance, adjacentNode]);
      }
    }
  }

  const sortedPaths = {};
  Object.keys(paths)
    .sort()
    .forEach((node) => (sortedPaths[node] = paths[node]));

  return [distance, sortedPaths];
}

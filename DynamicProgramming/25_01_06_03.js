// 최소힙 직접 구현한다.
class MinHeap {
  // 생성자로 배열을 생성
  constructor() {
    this.items = [];
  }
  size() {
    return this.items.length;
  }
  // 배열에 추가 이후 요소를 자기 자리로 올리기 위한 버블 업 정렬
  push(item) {
    this.items.push(item);
    this.bubbleUp();
  }
  pop() {
    if (this.size() === 0) {
      return null;
    }
    // 맨 앞 요소(최소값)를 담는다. (힙에서 최상위 값)
    const min = this.items[0];
    // 이제 필요없으니 맨 뒷 요소를 가져와서 덮어씌운다.
    this.items[0] = this.items[this.size() - 1];
    // 맨 앞에 덮어쓴 요소는 맨 뒤 요소이므로, 맨 뒤 요소를 제거한다.
    this.items.pop();
    // 덮어쓴 요소가 힙 특성을 유지하도록 버블다운을 수행한다.
    this.bubbleDown();

    // 처음에 담아뒀던 최소값을 반환하고 마무리
    return min;
  }
  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }

  bubbleUp() {
    // 마지막 요소의 인덱스 선택한다.
    let index = this.size() - 1;
    // 정렬할 요소가 하나 이상 존재한다면 반복
    while (index > 0) {
      // 부모 노드의 인덱스를 계산
      const parentIndex = Math.floor((index - 1) / 2);

      // 최소 힙이므로 부모가 값이 더 작을 시 교환을 멈춘다.
      if (this.items[parentIndex][0] <= this.items[index][0]) {
        break;
      }
      // 요소가 부모보다 값이 작으면 위치를 서로 바꾼다.
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }
  bubbleDown() {
    let index = 0;
    // 최상위 요소 기준 왼쪽 자식 요소의 인덱스값이 배열 범위 이내가 되는지 확인
    while (index * 2 + 1 < this.size()) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;

      // 왼쪽 오른쪽 자식중 더 작은 자식 노드를 고른다.
      let smallerChild =
        // 오른쪽 자식이 배열 범위 이내인지 그리고 왼쪽보다 작은지 검사
        rightChild < this.size() &&
        this.items[rightChild][0] < this.items[leftChild][0]
          ? rightChild
          : leftChild;

      // 현재 최상위 요소가 자식보다 더 작으면 멈춘다 (최소 힙의 특성)
      if (this.items[index][0] <= this.items[smallerChild][0]) {
        break;
      }

      // 아닐경우 자식요소와 서로 위치를 바꾼다.
      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }
}

function solution(graph, start) {
  // 처음엔 노드 거리 무한대로 초기화
  const distances = {};
  for (const node in graph) {
    distances[node] = Infinity;
  }

  // 시작 노드는 거리 0으로 초기화
  distances[start] = 0;

  const queue = new MinHeap();
  // 거리와 해당 노드 푸시
  queue.push([distances[start], start]);

  //시작 노드 경로 초기화
  const paths = { [start]: [start] };

  while (queue.size() > 0) {
    // 최소힙으로 최소거리값을 가져온다.
    const [currentDistance, currentNode] = queue.pop();

    // 현재 저장된 거리가 큐값의 거리보다 짧다면 그냥 넘어간다.
    if (distances[currentNode] < currentDistance) {
      continue;
    }

    // 큐에서 뽑은 노드에 인접한 여타 노드들을 순회한다.
    for (const adjacentNode in graph[currentNode]) {
      // 그래프의 현재 노드에서 인접노드까지의 길이를 추출
      const weight = graph[currentNode][adjacentNode];
      // 현재노드까지의 거리 + 인접노드까지의 거리를 계산
      const distance = currentDistance + weight;

      // 새로 계산한 값이 기존 거리보다 짧은지 판단
      if (distance < distances[adjacentNode]) {
        distance[adjacentNode] = distance;
        // 현재까지의 노드 + 인접 노드까지로 경로 갱신
        paths[adjacentNode] = [...paths[currentNode], adjacentNode];

        // 해당 인접 노드로 다시 푸시
        queue.push([distance, adjacentNode]);
      }
    }
  }

  const sortedPaths = {};
  Object.keys(paths)
    .sort()
    .forEach((node) => {
      sortedPaths[node] = paths[node];
    });

  return [distances, sortedPaths];
}

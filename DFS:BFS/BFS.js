const bfs = (graph, start, visited) => {
    // 1. 탐색 시작 노드 큐에 넣고 방문 처리 
   const q = new Queue();
   q.enqueue(start);
   visited[start] = true;

   //큐가 비어있으면 !true > false 전환시켜서 실행이 멈춘다. 
   while(!q.empty()){
    const v = q.dequeue();
    console.log(v);

        // 2. 탐색 노드의 인접 노드 확인
        for(const cur of graph[v]){
            if(!visited[cur]){
                q.enqueue(cur);
                visited[cur] = true;
            }
        }
    }
}

//--------------- 만약 큐 클래스가 아닌 배열로 구현한다면 -----------------

const arrbfs = (graph, start, visited) => {
    const q = [];
    q.push(start);
    visited[start] = true;
  
    while (q.length !== 0) {
      const v = q.shift();
      console.log(v);
      
      for(const cur of graph[v]){
        if(!visited[cur]){
          q.push(cur);
          visited[cur] = true;
        }
      }
    }
  }
  
// -----------------------------------------

let graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
]

// 9개의 요소(undefined)를 가진 빈배열이 생성 후 false로 채운다. 
let visited = [...Array(9).fill(false)];

bfs(graph, 1, visited);
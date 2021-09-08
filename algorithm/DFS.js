let graph = Array.from({ length: 8 }, () => []);
let visited = Array.from({ length: 8 }, () => false);

/**
 * 재귀 함수 이용
 */

function dfs(x) {
  if (visited[x]) return;
  // 방문 확인
  visited[x] = true;
  console.log(x);
  for (let i = 0; i < graph[x].length; i++) {
    let y = graph[x][i];
    dfs(y);
  }
}

graph[1].push(2);
graph[2].push(1);

graph[1].push(3);
graph[3].push(1);

graph[2].push(3);
graph[3].push(2);

graph[2].push(4);
graph[4].push(2);

graph[2].push(5);
graph[5].push(2);

graph[4].push(5);
graph[5].push(4);

graph[3].push(6);
graph[6].push(3);

graph[3].push(7);
graph[7].push(3);

graph[6].push(7);
graph[7].push(6);

dfs(1);

/**
 *
 * case 2
 * 스택 하나 , 큐 하나로 해결하기
 */

const graphConnect = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

// (graph, 시작 정점)
const dfsalgorithm = (graph, startNode) => {
  let needVisitStack = []; // 탐색을 해야 할 노드들
  let visitedQueue = []; // 탐색을 마친 노드들

  needVisitStack.push(startNode);

  // 탐색을 해야 할 노드가 남아 있다면
  while (needVisitStack.length !== 0) {
    const node = needVisitStack.pop();
    if (!visitedQueue.includes(node)) {
      visitedQueue.push(node);
      needVisitStack = [...needVisitStack, ...graph[node]];
    }
  }

  return visitedQueue;
};

console.log(dfsalgorithm(graphConnect, "A"));

/*
 * 그래프 표현하기 case 1 bfs(startNode)
 * 2021.08.20
 *
 */

// 변수 생성
// const graph = Array.from({ length: 8 }, () => []);
// const visited = Array.from({ length: 8 }, () => false);

// 그래프 생성
// graph[1].push(2);
// graph[2].push(1);

// graph[1].push(3);
// graph[3].push(1);

// graph[2].push(3);
// graph[3].push(2);

// graph[2].push(4);
// graph[4].push(2);

// graph[2].push(5);
// graph[5].push(2);

// graph[4].push(5);
// graph[5].push(4);

// graph[3].push(6);
// graph[6].push(3);

// graph[3].push(7);
// graph[7].push(3);

// graph[6].push(7);
// graph[7].push(6);

// bfs 구현
// function bfs(startNode) {
//   let queue = [];
//   queue.push(startNode);
//   visited[startNode] = true;

//   while (queue.length !== 0) {
//     let node = queue.shift();
//     console.log(node);

//     for (let i = 0; i < graph[node].length; i++) {
//       let child = graph[node][i];
//       if (!visited[child]) {
//         queue.push(child);
//         visited[child] = true;
//       }
//     }
//   }
// }

// bfs 실행
// bfs(1);

/**
 * BFS case 2
 * bfs(graph, startNode)
 *
 * 2021.08.22
 */

//그래프 생성
const graph = {
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

function bfs(graph, startNode) {
  let needVisited = []; // queue
  let visited = []; // check

  needVisited.push(startNode);

  while (needVisited.length !== 0) {
    let node = needVisited.shift();
    if (!visited.includes(node)) {
      visited.push(node);
      needVisited = [...needVisited, ...graph[node]];
    }
  }
  return visited;
}

// bfs 실행

console.log(bfs(graph, "A"));

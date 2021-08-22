// 그래프 표현하기

const graph = Array.from({ length: 8 }, () => []);
const check = Array.from({ length: 8 }, () => false);

function bfs(start) {
  // queue 생성
  const queue = [];

  // 맨 처음 노드 삽입
  queue.push(start);
  // 그래프 첫 노드 방문 체크
  check[start] = true;

  // queue의 길이가 0이 될 때 까지 반복
  while (queue.length !== 0) {
    // 큐에 들어간 노드 중 맨 처음 들어간 노드 빼내기
    const x = queue.shift();
    console.log(x);
    for (let i = 0; i < graph[x].length; i++) {
      let y = graph[x][i]; // 인접 정점
      if (!check[y]) {
        queue.push(y);
        check[y] = true;
      }
    }
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

bfs(1);

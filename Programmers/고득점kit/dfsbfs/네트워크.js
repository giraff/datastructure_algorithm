function solution(n, computers) {
  let visited = Array.from({ length: n }, () => false);

  function DFS(node) {
    // 탐색하는 노드의 값
    visited[node] = true;
    for (let idx = 0; idx < n; idx++) {
      // 노드의 번호.
      if (node !== idx) {
        let a = computers[node][idx]; // node(현재 노드)와 idx(다른 노드) 간의 연결 상태 a.
        // a == 1이면 연결되어있다. a == 0이면 연결되어있지 않다.
        if (a == 1 && !visited[idx]) {
          DFS(idx); // 연결되어있으면서, 한번도 방문하지 않았다면, DFS(idx): 재귀호출
        }
      }
    }
  }
  let answer = 0;
  // 각 모든 노드에 대해 반드시 한 번씩 방문하여 DFS를 한다.
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      // 단 이미 방문했다면 이미 count 내에 포함되어있다는 의미이므로 굳이 방문하지 않는다.

      DFS(i);
      answer++; // DFS가 종료된다면 count를 한 번 센다.
    }
  }
  return answer;
}

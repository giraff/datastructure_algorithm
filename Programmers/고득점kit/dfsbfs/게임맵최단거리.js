/**
 * 전형적인 BFS algorithm
 * @param {*} maps 2차원 배열
 * @param {*} x 시작점 x좌표
 * @param {*} y 시작점 y좌표
 * @param {*} visited 방문 처리 배열
 * @returns
 */

function bfs(maps, x, y, visited) {
  let n = maps.length; // 행 길이
  let m = maps[0].length; // 열 길이
  let dx = [-1, 1, 0, 0]; // 상하좌우 x 좌표
  let dy = [0, 0, -1, 1]; // 상하좌우 y 좌표

  let queue = [[x, y]]; // queue에 [x,y] 저장해놓고 시작
  visited[x][y] = true; // visited에 방문처리
  maps[x][y] = 0; // map 상 자체에 걸린 거리 표시

  while (queue.length) {
    // 1. queue의 배열이 빌 때 까지 무한반복
    let [x, y] = queue.shift(); // 2. queue 앞에서 하나 빼서 current => [x,y]
    for (let i = 0; i < 4; i++) {
      // 3. 상하 좌우로 nx, ny 셋팅
      let nx = x + dx[i];
      let ny = y + dy[i];
      // 4-(1)nx, ny이 범위내에 들어야 하고 (2) nx, ny가 아직 미방문된 영역이어야 하고 (3) nx, ny가 갈 수 있는 길이어야 함
      if (
        0 <= nx &&
        nx < n &&
        0 <= ny &&
        ny < m &&
        !visited[nx][ny] &&
        maps[nx][ny]
      ) {
        // 만약 nx, ny가 맨 우측 하단(도착점)이라면, [현재 x,y 지점에 저장된 거리 + 2] 를 리턴. (종료)
        if (nx == n - 1 && ny == m - 1) return maps[x][y] + 2;
        // 만약 nx, ny가 도착점이 아니라면,
        // 1. queue에 nx, ny 새롭게 저장 => 다음의 x, y가 될 것입니다.
        // 2. maps 상에 현재까지의 거리 저장 (maps[nx][ny] = maps[x][y] +1)
        // 3. nx, ny 방문처리!
        queue.push([nx, ny]);
        maps[nx][ny] = maps[x][y] + 1;
        visited[nx][ny] = true;
      }
      // 4-(4). nx, ny가 범위 밖이거나, 이미 방문했거나, 갈 수 없는 벽이라면, PASS . 바로 다음 queue에서 빼내기
    }
  }
  return -1; // 여기까지 와도 return 된게 없다면. 모든 경로를 이미 탐색했음에도 도착점에 갈 수 없다는 것으로 판단하고 -1 반환
}

function solution(maps) {
  // 항상 (1,1)에서 시작함.
  // 항상 도착점은 (n,m) 우측 하단
  // 1은 갈 수 있는 자리, 0은 갈 수 없는 자리
  // (n,m)까지 도달 못하는 맵이 있기도 함.
  let n = maps.length;
  let m = maps[0].length;
  let visited = Array.from({ length: n }, () =>
    Array.from({ length: m }, () => false)
  );

  // return -1 할 경우 먼저 쳐내기
  if (n == 1) {
    if (maps[0][m - 2] == 0) return -1;
  } else if (m == 1) {
    if (maps[n - 2][0] == 0) return -1;
  } else {
    if (
      maps[n - 2][m - 1] == 0 &&
      maps[n - 1][m - 2] == 0 &&
      maps[n - 2][m - 2] == 0
    )
      return -1;
  }

  return bfs(maps, 0, 0, visited);
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);

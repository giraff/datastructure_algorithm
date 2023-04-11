// 주어진 인접행렬에서 한 정점으로부터 다른 정점으로 이어지는 길이 존재하는지 반환하기

const result = getDirections(
  [
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [0, 1, 0, 0],
  ],
  0,
  3
);

console.log(result); // true;

// 인접행렬 길찾기
// matrix: n x n 크기의 인접행렬
// from : 시작 정점
// to : 도착할 다른 정점
// from에서 to까지 길이 존재하는지 여부 파악하는 코드
function getDirections(matrix, from, to) [
  // 방문했는지 여부에 대한 길을 하나 만든다.
  let path = new Array(matrix.length).fill(false);
  // path = [false, false, false, false]
  path[from] = true;
  // [true, false, false, false]
  
  let location = [from]; // [0] 길이는 1;
  // from은 처음에 시작 노드의 숫자 (예제는 0)

  while(location.length > 0) {
    // location의 길이가 0이 될 때까지 무한 반복하ㅡㄴ 코드

    // 현재 위치의 변수
    let now = location.shift(); // 감소식

    if(now == to) return true; // 도작하고자 하는 정점이 현재 위치라면 종료

    // 받은 matrix의 길이만큼 반복
    for(let i = 0; i < matrix.length; i++) {
      // 1. path[i] === false : 아직 방문 안한 노드이면서 이면, 
      // 2. matrix[now][i] == 1 : now => i번째 노드로 경로가 존재한다면
      // 2가지 조건이 성립하면 i번째 정점으로 이동한다 (방문처리 후 location에 push)

      if(path[i] === false && matrix[now][i] == 1) {
        path[i] = true;
        location.push(i);
      }
    }
  }

  // 이 단락까지 왔음에도 종료가 되지 않았다면, 경로가 없는 것이므로 false 반환
  return false;
  
]
// 간선의 종류에 따라 무방향 그래프와 방향 그래프로 구분된다

// 무방향 그래프의 간선은 간선은 통해 양방향으로 갈 수 있는 그래프를 말한다
// ex) (A, B) = (B, A)

// 방향 그래프는 간선에 방향성이 존재하는 그래프로 일방통행길 처럼 간선을 통하여 한 쪽 방향으로만 갈 수 있다
// <A, B> =/= <B, A)>

// 1. 인접 행렬 생성하기
// 방향이 있는 간선과 방향이 없는 간선들의 목록들을 받아 2차원 배열의 인접행렬을 반환
// undirected는 양방향
// directed는 단방향

let result = createMatrix([
  [0, 3, "directed"],
  [0, 2, "undirected"],
  [1, 3, "directed"],
  [2, 1, "directed"],
]);

console.log(result);

/**
 * [
 *  [0,0,1,1],
 *  [0,0,0,1],
 *  [1,1,0,0],
 *  [0,0,0,0]
 * ]
 */

const createMatrix(edges) {
  // 만들어야하는 배열 생성
  let matrix = [];
  let maxLength = 0; // edge 안 숫자만으로 가장 큰 수를 찾아야 한다.
  let lengths = []; // maxLength를 위해 필요

  for(let i = 0; i <edges.length; i++) {
    // 반복문으로 각 배열에 접근.
    lengths.push(...edges[i].slice(0,2)); // slice로 1번째 인덱스까지 lengths에 넣어준다.
    maxLength = Math.max(...lengths); // 넣어준 수에서 가장 큰 수 가져오기
    
    // matrix를 돌면 matrix 안에 maxLength 만큼 배열을 만들고 그만큼 0으로 채운다
    for(let i = 0; i <= maxLength; i++) {
      matrix.push(new Array(maxLength+1).fill(0));
    }

    //edges의 각 배열에 접근하여, 1을 넣어준다.
    for(let edge of edges) {
      matrix[edge[0]][edge[1]] = 1;

      // 무방향 간선인 경우, 반대로도 넣어준다
      if(edge[2] === 'undirected') {
        matrix[edge[1][edge[0]]] = 1;
      }
    }
  }
  return matrix;
}

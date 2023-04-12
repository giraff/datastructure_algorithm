/**
 * 15650
 * 자연수 N과 M이 주어졌을 때 아래 조건을 만족하는 길이 M인 수열을 모두 구하는 프로그램
 * - 1부터 N까지의 자연수 중에서 중복 없이 M개를 고른 수열
 * (1 <= M <= N <= 8)
 *
 * => 백트래킹으로 해결하기
 */

// const [n,m] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const [n, m] = `4 2`.toString().trim().split(" ");

let s = []; // 만드는 수열
let visited = Array.from({ length: n + 1 }, () => false); // 방문 처리 배열
let answer = []; // 모든 경우의 수를 담을 배열

// 백트래킹 - dfs 순회하면서 특정 조건을 만나면 우회.
function dfs() {
  console.log(answer);
  if (s.length == m) {
    // 수열의 길이가 m과 같으면 출력하고 반환
    answer.push(s.join(" "));
    return; // dfs 반복문환
  } else {
    // 수열의 길이가 m과 같지 않으면... 반복문 돌면서 dfs 재귀호출
    for (let i = 1; i <= n; i++) {
      if (visited[i]) continue; // 이미 등록했던 수이면 다음 수로 넘어간다.
      visited[i] = true;
      s.push(i);
      dfs();
      s.pop();
      visited[i] = false;
    }
  }
}

dfs();
console.log(answer.join("\n"));

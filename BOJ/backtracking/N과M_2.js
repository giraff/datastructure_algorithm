/**
 * 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
 * 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
 * 고른 수열은 오름차순이어야 한다.
 */

const [n, m] = `4 2`.toString().trim().split(" ");

let s = []; // m 길이를 가진 수열
let visited = Array.from({ length: n + 1 }, () => false); // 방문 처리
let answer = []; // 모든 경우의 수 저장

function dfs() {
  if (s.length === +m) {
    // s의 길이가 m과 같으면 answer에 저장하고 종료
    let tmp = s.slice(0).sort().join(" "); // 오름차순 정렬
    if (!answer.includes(tmp)) {
      // 이미 존재하는 수열이라면 저장하지 않는다.
      answer.push(tmp);
    }
    return;
  }

  for (let i = 1; i <= n; i++) {
    // 방문된 i라면 무시한다
    if (visited[i]) continue;
    visited[i] = true;
    s.push(i);
    dfs();
    s.pop();
    visited[i] = false;
  }
}

dfs();
console.log(answer.join("\n"));

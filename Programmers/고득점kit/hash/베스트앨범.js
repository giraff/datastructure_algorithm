// 스트리밍 사이트에서 '장르별'로 '가장 많이 재생된 노래'를 '두개'씩 모아 베스트 앨범으로 출시
// 노래는 고유 번호로 구분.
// 1 속한 노래가 많이 재생된 장르 먼저 '수록',
// 2. 장르 내에서 많이 재생된 노래를 먼저 '수록'
// 3장르 내에 재생 횟수가 같은 노래가 있다면,(1,2,도 아니라면) 고유번호가 낮은 노래

// 노래 장르 => genres, 노래별 재생횟수 => plays 노래의 고유 번호를 순서대로 return
// [0: classic - 500, 1: pop - 600, 2: classic - 150, 3: classic - 800, 4: pop - 2500]

// classic에 속한 노래들은 0,2,3 인데 합쳐서 1450, pop은 3100 => 4번 노래 먼저 수록
// pop 중에서 4 > 1이므로, 4,1
// classic 중에서는 3 > 0 > 2 이므로 3,0,2
// 따라서 4,1,3,0,2
// 그런데 장르별로 '2개씩' 모으는 것이기 때문에' 4,1,3,0 이다.
function solution(genres, plays) {
  let countMap = new Map();
  for (let i = 0; i < genres.length; i++) {
    if (countMap.get(genres[i])) {
      let newMap = countMap.get(genres[i]);

      countMap.set(genres[i], [
        ...newMap,
        {
          type: i,
          play: plays[i],
        },
      ]);
    } else {
      let newMap = new Array({
        type: i,
        play: plays[i],
      });
      countMap.set(genres[i], newMap);
    }
  }

  let answer = [];

  let arr = Array.from(countMap.entries());
  arr.sort((a, b) => {
    let asum = a[1].reduce((acc, val) => acc + val.play, 0);
    let bsum = b[1].reduce((acc, val) => acc + val.play, 0);
    return bsum - asum;
  });
  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i][1];
    tmp.sort((a, b) => {
      if (a.play < b.play) {
        return 1;
      } else if (a.play > b.play) {
        return -1;
      } else {
        return a.type - b.type;
      }
    });
    for (let j = 0; j < 2; j++) {
      if (tmp[j]) answer.push(tmp[j].type);
    }
  }
  return answer;
}

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);

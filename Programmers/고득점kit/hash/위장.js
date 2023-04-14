/**
 *
 * @param {*} clothes [의상의 이름, 의상의 종류]로 이루어진 배열
 * ex [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]
 * @returns  서로 다른 옷의 조합의 수를 return
 */

/**
 * 시간 초과가 난 알고리즘
 */
function solution(clothes) {
  let countMap = new Map();

  // Map (Hash) => 종류별 구분 및 갯수 세기
  for (let c of clothes) {
    const [clothName, clothType] = c;
    if (countMap.get(clothType)) {
      countMap.set(clothType, countMap.get(clothType) + 1);
    } else {
      countMap.set(clothType, 1);
    }
  }
  let sum = [];

  // recursive => 조합 생성
  // 1. 크기가 각각 1, 2, 3,... countMap.size인 조합을 완성해서 sum에 담는다.
  // 따라서 i== 1 이면 index = 1이 될 때 해당 재귀함수는 종료가 되면서 이때 sum에 1 크기의 조합 (배열 형태)을 저장한다.
  // i == 2 이면, index == 2 될때 재귀함수 종료, length 2인 조합이 sum에 저장됨
  // ex(1,2의 조합을 만든다. => [1], [2], [1,2])
  for (let i = 1; i <= countMap.size; i++) {
    let answer = [];

    function recursive(index) {
      if (index == i) {
        // `1 1`, `2 2` 와 같이 중복되는 수의 조합은 들어가지 않게 하기 위해 ([1,1] => [1]/ [2,2] => [2]) set으로 한번 감싼다음,
        // `1 2`와 `2 1`은 같은 조합으로 보는 것이다. 그래서 sort 하여 조건문에 통과
        let tmp = [...new Set(answer)].sort();
        // sum을 1차원 배열로 만들거라,[x, y] 형태가 아닌, `x y` 하나의 문자열에 띄어쓰기로 구분되는 값으로 sum에 담는다.
        if (!sum.includes(tmp.join(" "))) sum.push(tmp.join(" ")); // sum에 조합 저장
        return;
      }

      for (let [name, values] of countMap) {
        answer.push(name);
        recursive(index + 1);
        answer.pop();
      }
    }
    recursive(0);
  }

  // 만들어진 sum 조합 배열을 토대로
  let result = 0;
  // sum에 담긴 모든 조합을 방문하면서 누적합을 통해 총 가능한 서로 다른 옷의 조합의 수를 구한다.
  for (let i = 0; i < sum.length; i++) {
    let tmp = 1;
    // sum에 `1 2` 이런식으로 문자열에 띄어쓰기 구분으로 들어가서 split()을 통해 조합 하나하나를 접근할 수 있도록 배열 형태로 변환
    let tmpArr = sum[i].split(" ");
    for (let word of tmpArr) {
      // 경우의 수 구해서 tmp에 저장
      tmp *= countMap.get(word);
    }
    // result에 누적합한다
    result += tmp;
  }

  return result;
}

/**
 * 성공하는 코드
 * 단순하게 경우의 수로 접근한다.
 *
 * => 의상의 종류에 따른 의상의 가짓수를 Hash를 통해 [key, value] 쌍으로 저장한다.
 * 그 다음 각각의 의상을 '해당 의상을 안 입을 경우'도 포함하여 value + 1의 조합으로 모든 옷을 입을 조합의 수를 구한다.
 * 마지막으로, 아무것도 입지 않을 경우 1가지를 빼준다.
 */

function solution(clothes) {
  let countMap = new Map();
  let answer = 1;
  // Map (Hash) => 종류별 구분 및 갯수 세기
  for (let c of clothes) {
    const [clothName, clothType] = c;
    if (countMap.get(clothType)) {
      countMap.set(clothType, countMap.get(clothType) + 1);
    } else {
      countMap.set(clothType, 1);
    }
  }

  for (let [name, value] of countMap.entries()) {
    answer *= value + 1;
  }

  return --answer;
}

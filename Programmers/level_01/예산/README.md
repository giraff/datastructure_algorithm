## 경우의 수

정해진 예산에 최대 효율을 자랑하려고 한다.

- => '최소'로만 구성해야 한다.
- 값은 변형되지 않는다. 쪼개거나 하지 않는다.

## 풀이 1 sort() 정렬 후 누적합

1. d를 오름차순으로
2. i를 0부터 d.length - 1 까지의 합을 순차적으로 구하기
3. 순차 i값 까지의 합이 budget 보다 크면 index 출력
4. 끝까지 해도 sum <= budget 이라면 d.length 반환

## 풀이 2. reduce() 와 d.length를 이용한 풀이

```

//d.reduce()와 d.length를 이용한 풀이
function solution(d, budget) {
    d.sort((a, b) => a - b);

    while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

    return d.length;
}

```

## 공부 내용

- 경우의 수에 대한 이해를 확실하게 한 뒤, 어떤 메소드를 이용하여 출력할 지 결정. 가능한 알기 쉽게 단순하게 짜기

## 더 공부할 내용

- 배열의 메소드들을 쓸 일이 굉장히 많다. 다다익선

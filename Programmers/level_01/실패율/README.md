# 풀이1

1. 각 스테이지에 머무르는 회원 수를 카운트한다. (N만큼의 배열, 1차 for문)
2. 객체를 담는 배열. 객체의 구조는 {key, fail}

- key는 스테이지의 번호. fail은 각 스테이지의 실패율이다.
- 객체 배열의 각 fail은 (실패하는 회원 수 )/ 전체 회원 수

3. 객체 배열을 정렬한다. sort() 함수

- 내장 함수 function(a,b) 를 통해서 제일 먼저
- b.fail - a.fail (fail 내림차순)
- 이웃한 두 요소의 fail이 같으면 (b.fail === a.fail), a.key - b.key (key 오름차순)

```
    let answer = obj.sort(function(a,b) {
        if(b.fail !== a.fail) return b.fail - a.fail;
        else a.key - b.key;
    })
```

4. 그렇게 해서 정렬이 완료된 객체의 key 속성의 value들만 뽑아내기 (map 이용)

```
answer = answer.map((v, i) => v.key);
```

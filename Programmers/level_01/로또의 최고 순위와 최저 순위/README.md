# 풀이1

1. lottos와 win_nums 배열 간 동일한 수의 개수를 센다 -> same_nums

```javscript
    const same_nums = win_nums.filter(elem => lottos.includes(elem)).length;
```

2. lottos의 0 개수를 센다 -> zero_count

```javscript
    const zero_count = lottos.filter((elem) => elem === 0).length;
```

3. 최저 : same_nums, 최고 : same_nums + zero_count

4. 미리 [6,6,5,4,3,2,1] 등수 배열을 생성해놓고 맞춘 개수를 인덱스 값으로 해서 접근하면 바로 등수가 나올 수 있도록 설정한다.


## 새로 알게 된 내용

1. Arrays.filter() : 인자로 주어진 함수로 배열 내 모든 요소를 테스트해서 참인 요소 만으로 만들어진 배열을 반환한다.
2. Arrays.filter()의 시간 복잡도 : O(n)
3. Arrays.length 로 배열의 길이를 구할 수 있다.

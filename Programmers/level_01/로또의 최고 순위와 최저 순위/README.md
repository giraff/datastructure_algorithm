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

## 나의 풀이

1. min = n (가장 작은 자연수 x는 n을 뛰어넘을 수 없다)
2. x = n (n을 n으로 나누는 것 부터 시작하자)
3. x > 0 이 true인 동안 n 을 X 로 나눈 나머지가 1이 되고, min보다 작은 x가 나올 때 min = x (min 값을 x로 대치)
4. x가 0이 되어 while문을 빠져나오면 min 값을 반환한다.

## 또다른 풀이 1

```
function solution(n, x = 1) {
    while (x++) {
        if (n % x === 1) {
            return x;
        }
    }
}
```

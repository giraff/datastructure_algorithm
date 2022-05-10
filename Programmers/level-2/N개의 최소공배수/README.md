## 풀이 : 유클리드 호제법과 최대공배수 공식, 누적 계산 reduce
1. 두 수의 최소 공배수 = 두 수의 곱 / 두 수의 최대 공약수
2. 두 수의 최대 공약수 (자연수 A, B가 있다고 가정한다)
    1. A % B (A와 B의 모듈러 연산을 한다)의 값을 구한다 
    2. 모듈러 연산 결과가 0이라면 (나머지가 0이라면) B가 최대 공약수이다
    3. 모듈러 연산 결과가 0이 아니라면 (나머지가 0이 아니라면) A 에 B를 대치, B에 나머지값을 대치한다
    위의 1,2,3 방법을 종료될 때 까지 반복한다.

따라서 배열에 N개의 수가 주어진다면
arr[0]과 arr[1]의 최소공배수가 a1 이고
a1과 arr[2]의 최소공배수가 a2 이고
a2와 arr[3]의 최소공배수가 a3이고..
an-2 와 arr[n-1]의 최소 공배수가 우리가 구하고자 하는 최종 값이 된다.

```
let answer = 1
answer = answer * arr[0] / gcd(answer, arr[0]);
answer = answer * arr[1] / gcd(answer, arr[1]);
answer = answer * arr[2] / gcd(answer, arr[2]);
answer = answer * arr[3] / gcd(answer, arr[3]);
...
answer = answer * arr[n-1] / gcd(answer, arr[n-1]);

return answer;

```

위 코드는 reduce를 활용해서 다음과 같이 축약할 수 있다.

```
return arr.reduce((acc, cur) => acc * cur / gcd(acc, cur), 1);

```
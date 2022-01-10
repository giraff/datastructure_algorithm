# 풀이1

1. 미리 ['zero', 'one', ..., 'nine'] 배열을 생성

2. 문자열의 문자 하나씩 쪼개고 (split), 그 문자가 문자라면 (isNaN 이 true) 임시 배열 stack에 넣기

3. stack.join('')을 해서 만든 문자열이 table에 includes 한지 조사하고 true라면 findIndex를 통해 인덱스 값을 answer에 더한다.

4. 만약 문자 하나씩을 쪼개서 검사하는데 isNaN이 false이면 숫자라는 의미이므로 바로 answer에 더한다

## 새로 알게 된 내용

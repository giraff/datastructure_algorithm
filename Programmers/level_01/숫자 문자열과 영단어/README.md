# 풀이1

1. 미리 ['zero', 'one', ..., 'nine'] 배열을 생성

2. 문자열의 문자 하나씩 쪼개고 (split), 그 문자가 문자라면 (isNaN 이 true) 임시 배열 stack에 넣기

3. stack.join('')을 해서 만든 문자열이 table에 includes 한지 조사하고 true라면 findIndex를 통해 인덱스 값을 answer에 더한다.

4. 만약 문자 하나씩을 쪼개서 검사하는데 isNaN이 false이면 숫자라는 의미이므로 바로 answer에 더한다

## 새로 알게 된 내용

1. 숫자를 문자열로 만들기 : String(num), num.toString()
2. 문자열을 숫자로 만들기 : Number(str), parseInt(str)
3. 문자배열에서 문자열로 쪼개기: split
    1. 파라미터를 입력하지 않을 경우 : split() : 문자열 전체를 length 1인 배열에 담아서 리턴
    2. seperator = ' ' (단어별로 잘라서 배열에 담기) : 문자열을 (스페이스) 구분자로 잘라서 단어별로 배열에 담긴다.
    3. seperator = '' (글자별로 잘라서 배열에 담기) : seperator로 length 0인 문자열을 전달하면 문자열을 각각의 문자별로 잘라서 배열에 저장하여 리턴한다. (공백 포함)
    4. seperator = ',' (특정 구분자 사용) : 문자열을 특정 구분자(여기서는 ',')로 잘라서 배열에 담는다
5. 표준 내장 객체 isNaN 용법

```
x.isNaN() - X
isNaN(x)  - O
```

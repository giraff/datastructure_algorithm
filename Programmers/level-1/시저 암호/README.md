## 풀이 1

1. 문자열 s를 split('')로 배열을 만들어주고 map()을 사용한다
2. 배열 수만큼 반복하면서 value 값이
3. " "공백 (띄어쓰기) 라면 그대로 띄어쓰기 리턴
4. val을 대문자로 변환시킨 값에 n을 더한 값이 90을 넘어가면, Z를 넘어가는 값이기 때문에 다시 처음 A로 돌아가기 위해 ASCII 값에 n을 더한 값에 -26을 해준 값을 문자열로 변화시켜 리턴한다
5. 그렇지 않을때는 주어진 값의 아스키코드 값에 +n 한 값을 다시 문자열로 변화시켜 리턴한다

- val.charCodeAt() : 문자열 => 아스키코드
- String.fromCharCode(x) : 아스키코드(x) => 문자열

## 다른 사람 풀이 2 (아스키코드 없이 하는 것)

```
function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' ';
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}
```

## 다른 사람 풀이 3 (chars 용량 적고 그럴듯한 방법)

```
function solution(s, n) {
    var chars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY                          "
    return s.split('').map(e => chars[chars.indexOf(e)+n]).join('');
}
```

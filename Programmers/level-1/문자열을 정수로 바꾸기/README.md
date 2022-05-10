### 풀이 1 : 사칙연산이 되면서 문자가 자동으로 파싱이 된다.

```
function strToInt(str){
  return str/1
}

function strToInt(str){
  return  +str;
}
```

### Number 사용

```
function strToInt(str){
  var result = 0;
  result = Number(str);
  return result;
}
```

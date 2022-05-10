// 최대 공약수 구하는 공식
function gcd (num1, num2) {
    let a = num1, b = num2;
    while(true) {
        // 1. a % b 모듈러 연산을 한다.
        //(유클리드 호제법에서 모듈러 연산 할 때 작은 수 % 큰 수 할 걱정은 하지 않아도 된다
        // 그 경우에 자연스럽게 작은 수가 나머지로 반환되기 때문에 3번째 단계에 의해 나머지를 큰 수 위치로, 큰 수를 작은 있던 위치로 옮긴다)
        let c = a % b;
        // 2. 나머지가 0이라면 b가 최대 공약수이다
        if(!c) return b;
        // 3. 나머지가 0이 아니라면 a 에 b, b에 나머지를 대입한다
        else {
            a = b;
            b = c;
        }
        // 4. 무한반복
    }
}

function solution(arr) {
    return arr.reduce((acc, cur) => acc * cur / gcd(acc, cur), 1);
}
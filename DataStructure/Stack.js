/** Stack
 *
 *
 * LIFO 구조
 * 스택 Object가 자바스크립트에는 없으므로 직접 만들어야 함.
 * Array.prototype 스택과 비슷한 메소드들이 구현되어 있어 쉽게 응용이 가능하다.
 *
 * 기본적인 push/pop과 같은 경우 prototype에 관한 메소드를 사용하고, peek은 적절하게 배열 접근으로 구현하면 좋다.
 * push/pop 만으로 웹만한 알고리즘 문제 푸는데에는 지장 없다.
 * 쓰임새 : 괄호 매칭, 구간합
 */

const stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

stack[stack.length - 1];
stack.pop();
stack.pop();
stack.pop();

/**
 *  큐 구현
 *
 * - 데이터를 집어넣을 수 있는 선형 자료형
 * - 먼저 집어 넣은 데이터가 먼저 나온다. (FIFO)
 * - 데이터를 집어넣는 enqueue, 데이터를 추출하는 dequeue
 * 순서대로 처리해야하는 작업을 임시로 저장해두는 버퍼(buffer)에 많이 쓰임
 */

//1. 내장 메소드 이용 (push , shift)
const queue = [];

// enqueue
queue.push(1); // enqueue 1
queue.push(2); // enqueue 2
queue.push(3); // enqueue 3

// dequeue
console.log(queue.shift()); // Log : 1
console.log(queue.shift()); // Log : 2
console.log(queue.shift()); // Log : 3

//2. 메소드 이름 명명해서 구현하기
class Queue {
  constructor() {
    this._arr = [];
  }

  enqueue(item) {
    this._arr.push(item);
  }

  dequeue() {
    return this._arr.shift();
  }
}

// 클래스 객체 생성
const queueObj = new Queue();

queueObj.enqueue(1);
queueObj.enqueue(2);
queueObj.enqueue(3);

console.log(queueObj.dequeue()); // Log : 1
console.log(queueObj.dequeue()); // Log : 2
console.log(queueObj.dequeue()); // Log : 3

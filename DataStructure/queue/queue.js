import LinkedList from "../singly-linked-list/LinkedListAll";

export default class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  // queue는 linkedList 의 front가 head이고 back은 tail이다.
  peek() {
    // queue의 peek은 queue의 front element를 반환하는 것이면 삭제는 이루어지지 않는다
    if (this.isEmpty()) {
      return null;
    }

    return this.linkedList.head.value;
  }

  enqueue(value) {
    this.linkedList.append(value);
  }

  dequeue() {
    const removeHead = this.linkedList.deleteHead();
    return removeHead ? removeHead.value : null;
  }

  toString() {
    return this.linkedList.toString();
  }
}

function Test() {
  let queue = new Queue();

  console.log(queue.isEmpty()); // true
  console.log(queue.peek()); // null
  console.log(queue.toString()); // []

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  console.log(queue.isEmpty()); // false
  console.log(queue.peek()); // 1
  console.log(queue.toString()); // ["1","2","3"]

  // FIFO
  console.log(queue.dequeue(), ":빼기"); // 1
  console.log(queue.dequeue(), ":빼기"); // 2
  console.log(queue.dequeue(), ":빼기"); // 3

  console.log(queue.isEmpty()); // true
  console.log(queue.peek()); // null
  console.log(queue.toString()); // []
}

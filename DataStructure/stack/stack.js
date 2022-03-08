import LinkedList from "../singly-linked-list/LinkedListAll";

export default class Stack {
  constructor() {
    this.linkedList = new LinkedList();
  }

  // isEmpty()
  isEmpty() {
    return !this.linkedList.head;
  }
  // peek()
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.linkedList.head.value;
  }
  // push(value) : stack의 top (linkedList의 head) 위치에 새 노드 추가
  push(value) {
    this.linkedList.prepend(value);
  }
  // pop() : stack 의 top (linkedList의 head)을 반환하고 제거
  pop() {
    const removedHead = this.linkedList.deleteHead();
    return removedHead ? removedHead.value : null;
  }
  // toArray()
  toArray() {
    return this.linkedList
      .toNodeArray()
      .map((linkedListNode) => linkedListNode.value);
  }

  toString() {
    return this.linkedList.toString();
  }
}

function test() {
  let stack = new Stack();
  console.log(stack.isEmpty()); // true
  console.log(stack.peek()); // null
  console.log(stack.toString()); // []
  console.log(stack.toArray()); // []

  stack.push(1);
  stack.push(2);
  stack.push(3);
  stack.push(4);

  console.log(stack.isEmpty()); // false
  console.log(stack.peek()); // 4
  console.log(stack.toString()); // ["4","3","2","1"]
  console.log(stack.toArray()); // [4,3,2,1]

  console.log(stack.pop(), ": 빼기");
  console.log(stack.pop(), ": 빼기");
  console.log(stack.pop(), ": 빼기");
  console.log(stack.toString()); // ["3","2","1"]
}

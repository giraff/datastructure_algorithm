class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }

  pop() {
    if (this.index <= 0) return null;
    let deleted = this.arr[--this.index];
    return deleted;
  }

  push(value) {
    this.arr[this.index++] = value;
    return this;
  }

  isEmpty() {
    return this.index > 0 ? false : true;
  }

  peek() {
    if (this.index <= 0) return null;
    return this.arr[this.index - 1];
  }

  printStack() {
    if (this.index <= 0) return "";
    return this.arr.splice(0, this.index).join(" ");
  }
}

function testStack() {
  let stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(`isEmpty?`, stack.isEmpty());
  console.log(`delete: `, stack.pop());
  console.log(`delete: `, stack.pop());
  console.log(`delete: `, stack.pop());
  console.log(`isEmpty?`, stack.isEmpty());
  console.log(stack.printStack());
  stack.push(4);
  stack.push(5);
  stack.push(6);
  console.log(`peek:`, stack.peek());
  console.log(`isEmpty?`, stack.isEmpty());
  console.log(stack.printStack());

  return;
}

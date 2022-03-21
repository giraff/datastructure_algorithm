class Queue {
  constructor() {
    this.data = [];
  }

  isEmpty() {
    return this.data.length <= 0 ? true : false;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.data[0];
  }

  enqueue(value) {
    this.data.push(value);
    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.data.shift();
  }

  toString() {
    return this.data.join(" ");
  }
}

function testQueue() {
  let queue = new Queue();
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  console.log(queue.toString());
  console.log(`dequeue`, queue.dequeue());
  console.log(`dequeue`, queue.dequeue());
  console.log(`dequeue`, queue.dequeue());
  console.log(`dequeue`, queue.dequeue());
  queue.enqueue(3);
  queue.enqueue(4);
  queue.enqueue(5);
  console.log(`peek`, queue.peek());
  console.log(`dequeue`, queue.dequeue());
  console.log(`peek`, queue.peek());
  console.log(`dequeue`, queue.dequeue());
  console.log(`peek`, queue.peek());
  console.log(`dequeue`, queue.dequeue());
  console.log(`peek`, queue.peek());
}

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

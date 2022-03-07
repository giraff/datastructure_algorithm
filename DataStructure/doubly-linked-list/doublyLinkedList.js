class DoublyLinkedListNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }

  toString() {
    return `${this.value}`;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   *
   * @param {*} value
   * @return {DoublyLinkedList}
   *
   */
  prepend(value) {
    const new_node = new DoublyLinkedListNode(value, this.head);

    if (this.head) {
      this.head.prev = new_node;
    }
    this.head = new_node;

    if (!this.tail) {
      this.tail = new_node;
    }
  }

  append() {}
  delete() {}
  find() {}
  deleteTail() {}
  deleteHead() {}
  toArray() {}
  fromArray() {}
  toString() {}
  reverse() {}
}

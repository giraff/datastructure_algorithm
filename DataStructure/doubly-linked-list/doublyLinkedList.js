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

  append() {
    const new_node = new DoublyLinkedListNode(value);

    if (!this.head) {
      this.head = new_node;
      this.tail = new_node;
    }

    this.tail.next = new_node;
    new_node.prev = this.tail;
    this.tail = new_node;
  }
  delete(value) {
    // 빈 리스트의 경우 null 반환
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;
    let deletedNode = null;

    while (currentNode) {
      if (currentNode.value === value) {
        deletedNode = currentNode;

        if (deletedNode === this.head) {
          this.head = deletedNode.next;

          if (this.head) {
            this.head.prev = null;
          }

          if (deletedNode === this.tail) {
            this.tail = null;
          }
        } else if (deletedNode === this.tail) {
          this.tail = deletedNode.prev;
          this.tail.next = null;
        } else {
          const prevNode = deletedNode.prev;
          const nextNode = deletedNode.next;

          prevNode.next = nextNode;
          nextNode.prev = prevNode;
        }
      }
      currentNode = currentNode.next;
    }

    return deletedNode;
  }

  /*** traverse 하면서 value 값을 가진 노드 찾기 */
  find(value) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;

    while (currentNode) {
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }
  /***
   * @return {DoublyLinkedListNode}
   */
  deleteTail() {
    // 1. tail이 null 값.삭제할 게 없음
    if (!this.tail) {
      return null;
    }
    let deletedTail = null;
    // 2. 링크드 리스트에 노드가 단 한개 (this.head === this.tail)
    if (this.head === this.tail) {
      deletedTail = this.tail;
      this.head = null;
      this.tail = null;
      return deletedTail;
    }
    // 3. 링크드 리스트에 노드가 n개 (n>1),
    deletedTail = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;

    return deleteTail;
  }
  /***
   * @return {DoublyLinkedListNode}
   */
  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
      this.head.prev = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deletedHead;
  }
  toValueArray() {
    let values = [];

    let currentNode = this.head;
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return values;
  }
  toNodeArray() {
    let nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }
  /***
   * @params (*[])
   * @return {DoublyLinkedList}
   */
  fromArray(values) {
    values.forEach((elem) => this.append(elem));

    return this;
  }
  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      nextNode = currNode.next;
      prevNode = currNode.prev;

      currNode.next = prevNode;
      currNode.prev = nextNode;

      prevNode = currNode;
      currNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}

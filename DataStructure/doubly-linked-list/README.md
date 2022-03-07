# DoublyLinkedList

- toString()
- prepend() {}
- append() {}
- delete() {}
- find() {}
- deleteTail() {}
- deleteHead() {}
- toArray() {}
- fromArray() {}
- toString() {}
- reverse() {}

### DoublyLinkedListNode

```javascript
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
```

### DoublyLinked List

```javascript
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   *
   * @param {*} value
   * @return {DoublyLinkedList}
   */
  prepend(value) {
    // 1. 새 노드 생성
    const new_node = new DoublyLinkedListNode(value, this.head);

    // 2. 이미 head 존재하면
    if (this.head) {
      // head가 가리키는 노드의 prev에 새 노드 설정
      this.head.prev = new_node;
    }

    // head 에 새 노드 설정
    this.head = new_node;

    // tail이 없으면 tail에 새 노드 설정
    if (!this.tail) {
      this.tail = new_node;
    }

    return this;
  }

  append() {
    // 1. 새 노드 생성
    const new_node = new DoublyLinkedListNode(value);

    // 2. head가 존재하지 않으면 빈 링크드 리스트
    if (!this.head) {
      // head와 tail에 새 노드 설정
      this.head = new_node;
      this.tail = new_node;
    }

    // 3. tail이 가리키는 노드의 next에 새 노드 설정.
    this.tail.next = new_node;
    // 4. 새 노드 prev로 tail이 가리키는 노드 설정
    new_node.prev = this.tail;
    // 5. tail이 가리키는 노드로 새 노드 설정
    this.tail = new_node;
  }

  /**
   * @param {*} value
   * @return {DoublyLinkedListNode}
   */
  delete(value) {
    // 1. head가 존재하지 않으면 return null
    if (!this.head) {
      return null;
    }

    // 2. deleteNode, currentNode 변수 선언
    let deletedNode = null;
    let currentNode = this.head;
    // 3. currentNode가 존재하는 동안 loop
    while (currentNode) {
      // 3-1. currentNode.value가 value와 동일 => currentNode가 삭제할 노드이다.
      if (currentNode.value === value) {
        deletedNode = currentNode;

        if (deletedNode === this.head) {
          // deleteNode가 head가 가리키는 노드와 동일하다면 (deleteHead)
          this.head = deletedNode.next;

          if (this.head) {
            this.head.prev = null;
          }
          if (deletedNode === this.tail) {
            this.tail = null;
          }
        } else if (deletedNode === this.tail) {
          // deleteNode가 tail이 가리키는 노드와 동일하다면 (deleteTail)
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
    // 3-3. deleteNode와 tail이 만약 같으면 tail을 null로 설정
    // 4. deletedNode와 tail 와 같으면
    // 4-1. deletedNode.prev

    return deletedNode;
  }
  find() {}
  deleteTail() {}
  deleteHead() {}
  toArray() {}
  fromArray() {}
  toString() {}
  reverse() {}
}
```

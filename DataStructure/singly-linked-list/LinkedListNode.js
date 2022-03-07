// Linked List 의 구현
// 노드 - 객체로 구현

export default class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
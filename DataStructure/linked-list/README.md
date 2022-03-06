# Linked List

## LinkedListNode

```
class LinkedListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}
```

## LinkedList

노드로 이루어진 링크드리스트는 다음과 같이 구현한다.

```
class LinkedList {
    constructor() {
        this.head = null,
        this.tail = null,
    }
}
```

## 필요한 메소드

### printNodes(node: LinkedListNode)

    - LinkedListNode 에 연계된 노드들을 모두 출력한다.

### addAtHead(value)

    - prepend와 같음
    1. 새 노드 newNode 생성
    2. newNode의 next에 head가 가리키는 노드 설정
    3. head가 가리키는 노드를 newNode 설정

### addBack(value)

    - append 와 같음
    1. 새 노드 newNode 생성
    2. tail을 이용하여 링크드 리스트 끝에 newNode 붙이기
    - tail 이용하지 않는 경우
    1. 새 노드 newNode 생성
    2. 노드 간을 순회하며 링크드 리스트의 마지막 노드 찾아 순환
    3. 링크드 리스트의 마지막 노드 next로 newNode 설정

### findNode(value)

    - value 값을 가진 노드를 순회하며 찾아 반환
    - head === null 이거나 못찾으면 null 반환
    - insert와 delete의 기본 함수

### insertAfter(node: LinkedListNode, value)

    - argument로 넘어온 node의 다음 노드로 value 가진 노드 삽입
    1. 새 노드 생성
    2. 새 노드의 next에 node의 next 저장
        - 새 노드가 node 가 가리키는 다음 노드를 똑같이 가리키도록 한다.
    3. node의 next에 새 노드 설정
        - node가 다음 노드로 newNode를 가리키도록 한다.
    4. 만약 tail이 node를 가리키고 있었다면?
        - node가 링크드 리스트 마지막 노드였다는 의미이므로
        - tail이 newNode를 가리키도록 한다.

### deleteAfter(prev_node: LinkedListNode)

    - prev_node를 받는다고 가정할 때, prev_node 다음 노드를 삭제
    - prev_node.next가 null이 아닐 때 prev_node.next 값으로
    prev_node.next.next 설정

### insert(value, rawIndex)

### delete(value)

    - value 를 가진 노드를 순회하며 찾아낸 다음 제거
    - 제거한 노드를 return

### deleteTail

### deleteHead

### fromArray

### toArray

### toString

### reverse

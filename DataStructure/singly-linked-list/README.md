# Linked List

- LinkedListNode
- LinkedList
- printNodes
  - iterative
  - recursive
- addAtHead
- addBack
- addAfter
- insert
- find
- deleteHead
- deleteTail
- deleteAfter
- delete
- fromArray
- toArray
  - toNodeArray
  - toValueArray
- reverse

## Time Complexity

| Access    | Search    | Insertion | Deletion  |
| :-------: | :-------: | :-------: | :-------: |
| O(n)      | O(n)      | O(1)      | O(n)      |


## LinkedListNode

```javascript
class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
```

## LinkedList

노드로 이루어진 링크드리스트는 다음과 같이 구현한다.

```javascript
class LinkedList {
    constructor() {
        this.head = null,
        this.tail = null,
    }
}
```

## 필요한 메소드

### printNodes(node: LinkedListNode)

#### 1. iterative

```javascript
function printNode(ListNode) {
  let current_node = ListNode;
  while (current_node !== null) {
    console.log(current_node.value);
    current_node = current_node.next;
  }
}
```

#### 2. recursive

```javascript
function printNodeWithRecursive(ListNode) {
  console.log(ListNode.value);
  while (ListNode.next !== null) {
    printNode(ListNode.next);
  }
}
```

- LinkedListNode 에 연계된 노드들을 모두 출력한다.

### addAtHead(value)

```javascript
addAtHead(value) { // O(1)
    // 1. 새 노드 생성
    let new_node = new LinkedListNode(value);
    // 2. 생성한 새 노드의 next에 head가 가리키는 노드 저장
    new_node.next = this.head;
    // 3. head가 가리키는 노드로 새 노드 설정
    this.head = new_node;

    // 4. 만약 tail이 가리키는 노드가 없다면 (빈 배열이었다면)
    if(this.tail === null) {
        this.tail = new_node;
    }

    return this;
}
```

- prepend와 같음

1. 새 노드 newNode 생성
2. newNode의 next에 head가 가리키는 노드 설정
3. head가 가리키는 노드를 newNode 설정

### addBack(value)

```javascript
addBack(value) {   // O(1)
  	// 1. 새 노드 생성
    let new_node = new LinkedListNode(value);

    // 2. head가 가리키는 노드가 없다면? (빈 배열이었다면)
    if(this.head === null) {
    	// head, tail이 가리키는 노드로 new_node 설정
      this.head = new_node;
      this.tail = new_node;

      return this;
    }

    // 3. 이미 존재하는 노드들이 있다면?
   	this.tail.next = new_node;
    this.tail = new_node;

    return this;
  }
```

- append 와 같음

1. 새 노드 newNode 생성
2. tail을 이용하여 링크드 리스트 끝에 newNode 붙이기

- tail 이용하지 않는 경우

1. 새 노드 newNode 생성
2. 노드 간을 순회하며 링크드 리스트의 마지막 노드 찾아 순환
3. 링크드 리스트의 마지막 노드 next로 newNode 설정

### find(value)

```javascript
find(value) {
  	// 1. 빈 배열이면 찾을 수 없기에 null 반환
  	if(this.head === null) {
    	return null;
    }

  	let current_node = this.head;

    while(current_node !== null) {
        if(current_node.value === value) {
       		return current_node;
        }
        current_node = current_node.next;
    }

    return null;
}
```

- value 값을 가진 노드를 순회하며 찾아 반환
- head === null 이거나 못찾으면 null 반환
- insert와 delete의 기본 함수

### addAfter(node: LinkedListNode, value)

```javascript
addAfter(node, value) {
    if(node === null) {
        return null;
    }
    let new_node = new LinkedListNode(value);

    new_node.next = node.next;
    node.next = new_node;

    return this;
}

```

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

```javascript
deleteAfter(prev_node) {
    let delete_node = null;
    if(prev_node.next !== null) {
        delete_node = prev_node.next;
        prev_node.next = prev_node.next.next;
        return delete_node;
    }
}
```

- prev_node를 받는다고 가정할 때, prev_node 다음 노드를 삭제
- prev_node.next가 null이 아닐 때 prev_node.next 값으로
  prev_node.next.next 설정

### insert(value, rawIndex)

```javascript

insert(value, rawIndex) {
    // rawIndex arguments 검증
    const index = rawIndex < 0 ? 0 : rawIndex;

    // 1. index 가 0일때
    if(index === 0) {
        // 1. 헤드가 가리키는 위치에 삽입하기
        this.addAtHead(value);
    } else {
        //2. index가 0이 아닐때
        let count = 1;
        let current_node = this.head;
        const new_node = new LinkedListNode(value);
        while(current_node) {
            if(count === index) break;
            current_node = current_node.next;
            count++;
        }
        // 3. current_node 다음에 새 노드 삽입하기
        if(current_node) {
            // 3-1. current_node 노드가 존재하면
            new_node.next = current_node.next;
            current_node.next = new_node;
        } else{
            // 3-2. current_node 노드가 존재하지 않으면
            // rawIndex가 링크드 리스트의 범위를 벗어나므로 Tail이
            // 존재하면 Tail 다음에 삽입
        if (this.tail) {
            // 링크드 리스트의 맨 끝에 추가
            this.tail.next = new_node;
            this.tail = new_node;
        } else {
            // this.tail === null :: 알고보니 빈 배열..
            this.head = new_node;
            this.tail = new_node;
        }
        }
    }
}
```

### delete(value)

```javascript
delete(value) {
    // 1. 빈 링크드 리스트의 경우 null 반환
    if(this.head === null) {
        return null;
    }

    let delete_node = null;

    // 링크드 리스트의 헤드가 가리키는 값이 value라면?
    // head를 지우기
    while(this.head && this.head.value === value) {
        delete_node = this.head;
        this.head = this.head.next;
    }

    let current_node = this.head;

    if(current_node !== null) {
        while(current_node.next !== null) {
        if(current_node.next.value === value) {
            delete_node = current_node.next;
            current_node.next = current_node.next.next;
        } else {
            current_node = current_node.next;
        }
        }
    }

    // 만약 head와 current_node를 거쳐 current_node는 value가
    // 아닌 값이다.
    // 이때 tail이 가리키는 노드의 값이 value라면 .
    // 위 if(current_node!==null) 이부분을 거쳐 이미 지워졌을
    // 것이므로
    // current_node는 마지막 남을 때까지 value가 아닌 다른 값을 가진
    // 노드이기때문에
    // current_node를 this.tail로 지정한다..
    if(this.tail.value === value) {
        this.tail = current_node;
    }

}
```

- value 를 가진 노드를 순회하며 찾아낸 다음 제거
- 제거한 노드를 return

### deleteTail

```javascript
// deleteTail
deleteTail() {
    const deletedTail = this.tail;
    // 1. 비어있거나 딱 하나의 노드만 담긴 링크드 리스트의 경우
    if(this.head === this.tail) {
        this.head = null;
        this.tail = null;

        return deletedTail;
    }
    // 2. head가 가리키는 값을 current에 저장하고 traverse
    let current_node = this.head;
    while(current_node.next !== null) {
        if(current_node.next.next === null) {
            // current_node.next가 마지막 노드
            current_node.next = null;
        } else {
            current_node = current_node.next;
        }
    }

    // 3. 제거하고 나서 리스트의 마지막 노드를 tail에 저장
    this.tail = current_node;

    // 4. tail 참조하고 있던 deleteTail 반환
    return deletedTail;
}
```

### deleteHead

```javascript
deleteHead() {
// 1. 빈 링크드 리스트이면 null 반환
    if(this.head === null) {
        return null;
    }

    let deleted_head = this.head;

    if(this.head.next !== null) {
        this.head = this.head.next;
    } else {
        this.head = null;
        this.tail = null;
    }

    return deleted_head;

}
```

### fromArray

```javascript
fromArray(values) {
    values.forEach((value) => this.addBack(value));

    return this;
}
```

- array of values that need to be converted to linked list

### toArray

```javascript
toValueArray() {
      const nodes = [];

      let currentNode = this.head;
      while (currentNode) {
        nodes.push(currentNode.value);
        currentNode = currentNode.next;
      }

      return nodes;
}

toNodeArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
        nodes.push(currentNode);
        currentNode = currentNode.next;
    }

    return nodes;
}

```

### reverse

```javascript
reverse() {
    let cur_node = this.head;
    let prev_node = null;
    let next_node = null;

    while(cur_node) {
        next_node = cur_node.next;

        cur_node.next = prev_node;

        prev_node = cur_node;
        cur_node = next_node;
    }

    // reset head and tail.
    this.tail = this.head;
    this.head = prev_node;

    return this;
}
```

- Reverse a linked list.

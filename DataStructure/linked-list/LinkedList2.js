// array find  - O(N)
// array Random Access - O(1)
// linkedList find - O(N)
// linkedList node insert - O(1)
// linkedList node delete - O(1)

// doubly linked list
// singly linked list

// Array - sortion, tow * partition
// Linked list : node 삽입 삭제 노드를 반대로 바꾸는 방법
// 모든 기초 동작들을 거의 암기 수준으로 완벽하게 알아야 한다
// tree, graph의 기초 동작이 되기때문이다.

class LinkedListNode {
	constructor(value, next=null) {
  // node에는 값을 저장하는 공간과 다음 노드를 가리키는 공간 2 가지로 정의된다.
  	this.value = value;
    this.next = next;
  }
}

// 링크드 리스트 만들기
let head_node = new LinkedListNode(1);
head_node.next = new LinkedListNode(2);
head_node.next.next = new LinkedListNode(3);
head_node.next.next.next = new LinkedListNode(4);

// [traverse]
// 1. iterative
function printNode(ListNode) {
	let current_node = ListNode;
  while (current_node !== null) {
  	console.log(current_node.value);
    current_node = current_node.next;
  }
}

// 2. recursive
function printNodeWithRecursive(ListNode) {
	console.log(ListNode.value);
  while (ListNode.next !== null) {
  	printNode(ListNode.next);
  }
}


class LinkedList {
	constructor() {
  	this.head = null;
    this.tail = null;
  }
  
  // 링크드 리스트 맨 앞에 노드 삽입
  // prepend
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
  
  // 링크드 리스트 맨 뒤에 노드 삽입
  // append
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
  
  addBackWithoutTail(value) { // O(N)
  	let new_node = new LinkedListNode(value);
    let current_node = this.head;
    // head가 빈 값인 빈 링크드 리스트일 때는 통하지 않는다 
    if(this.head === null) {
    	this.head = new_node;
      
      return this;
    }
    while(current_node.next !== null) {
    	current_node = current_node.next;
    }
    
    // while문 벗어났다는 것은 current_node가 마지막 노드라는 뜻
    current_node.next = new_node;
    return this;
  }

	// find(value) - O(N)
  // 우리가 찾고 있는 value가 나올때까지 traverse
  // 찾고 있던 value라면 return node
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
  
  // addAfter(node, value) - O(1)
  // 새 노드 생성
  // argument가 가리키고 있던 노드의 next에 연결
	addAfter(node, value) {
  	if(node === null) {
    	return null;
    }
    let new_node = new LinkedListNode(value);
    
    new_node.next = node.next;
    node.next = new_node;
    
    return this;
  }
  

	// deleteAfter(prev_node) - O(1)
  // 넘어온 node 다음 노드를 지워주는 함수
  deleteAfter(prev_node) {
  	let delete_node = null;
  	if(prev_node.next !== null) {
    	delete_node = prev_node.next;
    	prev_node.next = prev_node.next.next;
      return delete_node;
    }
  }
  // 링크드 리스트에 아무것도없는 케이스 꼭 챙기기

	insert(value, rawIndex) {
  console.log(rawIndex,'::rawIndex');
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
      	// rawIndex가 링크드 리스트의 범위를 벗어나므로 Tail이 존재하면 Tail 다음에 삽입
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
  // delete
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

    // 만약 head와 current_node를 거쳐 current_node는 value가 아닌 값이다.
    // 이때 tail이 가리키는 노드의 값이 value라면 .
    // 위 if(current_node!==null) 이부분을 거쳐 이미 지워졌을 것이므로
    // current_node는 마지막 남을 때까지 value가 아닌 다른 값을 가진 노드이기때문에
    // current_node를 this.tail로 지정한다..
    if(this.tail.value === value) {
      this.tail = current_node;
    }

  }
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
    // deleteHead
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
    
    // fromArray
    // array of values that need to be converted to linked list
    fromArray(values) {
    	values.forEach((value) => this.addBack(value));
      
      return this;
    }
    
    // toArray
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
    // reverse
    // Reverse a linked list.
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
}


let slist = new LinkedList();
slist.addAtHead(1);
slist.addAtHead(2);
slist.addBack(3);
slist.addBack(4);
slist.addAfter(slist.find(2), 5);
slist.deleteAfter(slist.find(2));
slist.reverse();// 거꾸로 돌리기
slist.delete(2);
slist.delete(1);
slist.deleteTail();
slist.deleteHead();
slist.insert(1);
slist.insert(3);
slist.insert(5);
slist.delete(3);
let Test = new LinkedList();
printNode(Test.fromArray([7,9]).head);

sArray = slist.toValueArray(); // 값만 뽑아낸 배열 반환
printNode(slist.head);

console.log(sArray);



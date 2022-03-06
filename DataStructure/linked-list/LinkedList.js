const LinkedListNode = require("./LinkedListNode");
// import Comparator from '../utils/comparator/Comparator';
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addAtHead(value) {
        // prepend
        // 1. 새 노드 생성
        const newNode = new LinkedListNode(value, null);
        // 2. newNode의 next에 head가 가리키는 노드 설정
        newNode.next = this.head;
        // 3. head가 가리키는 노드로 newNode 설정
        this.head = newNode;

        if(!this.tail) {
            // tail이 null이면
            this.tail = newNode;
            // tail이 가리키는 노드로 newNode 설정
        }
        return this;
    }

    addBack(value) {
        // append
        // 1. 새노드 생성
        const newNode = new LinkedListNode(value, null);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;

            return this;
        }

        // this.head가 빈 값이 아니라면
        this.tail.next = newNode;
        this.tail = newNode;
        // 링크드 리스트의 끝에 새 노드 붙이기
        return this;
    }



    // tail 없이 작성하기
    append(value) {
        // 1. 새 노드 생성
        const newNode = new LinkedListNode(value, null);

        // 2. cnt_node로 head가 가리키는 노드 설정
        let cnt_node = this.head;

        while(cnt_node.next !== null) {
            cnt_node = cnt_node.next;
        }

        // cnt_node.next가 null일때 반복문 빠져나옴
        cnt_node.next = newNode;
        this.tail = newNode;

        return this;
    }

    // insert, delete 의 기본이 되는 함수
    // value 값을 가진 노드를 찾아 반환
    findNodes(value) {
        // 0. head === null: 빈 링크드 리스트이므로 null 리턴
        if(!this.head) return null;

        // 1. cnt_node로 리스트의 head 참조
        let cnt_node = this.head;
        while(cnt_node) {
            // 2. cnt_node가 null 이 아닌 동안 value가 같은 노드가 낭면 그 노드 리턴
            if(value !== undefined && cnt_node.value === value) return cnt_node;
            cnt_node = cnt_node.next
        }

        // 3. 못 찾으면 null 반환
        return null;
    }

    // node 바로 다음에 value 값 가진 새 노드 생성해서 삽입
    insertAfter(node, value) {
        const newNode = new LinkedListNode(value, null);
        newNode.next = node.next;
        node.next = newNode;
        if(this.tail === node) {
            this.tail = newNode;
        }

        return this;
    }

    // prev_node 다음 노드를 제거
    deleteAfter(prev_node) {
        if(prev_node.next !== null) {
            prev_node.next = prev_node.next.next;
        }
    }

    insert(value, rawIndex) {

    }

    delete(value) {
        
    }

}

// node:: LinkedListNode
// 링크드 리스트 출력
function printNodes(node) {
    let crnt_node = node;
    let answer = [];
    while(crnt_node !== null) {
        answer.push(crnt_node.value);
        crnt_node = crnt_node.next
    }

    console.log(answer.join(' '));
    console.log(this.head,'::head');
    console.log(this.tail,'::tail');
}

function initTest() {
    let head_node = new LinkedListNode(1);
    head_node.next = new LinkedListNode(2);
    head_node.next.next = new LinkedListNode(3);
    head_node.next.next.next = new LinkedListNode(4);

    printNodes(head_node);
}

initTest();

function Node(data) {
  this.data = data;
  this.next = null;     
}

function LinkedList () {
    this._length = 0;
    this._head = null;
}

LinkedList.prototype.append = function (data) {
    const node = new Node(data) 
    let curr;

    if(this._head === null) {
        //빈배열일 때
        this._head = node;
    } else {
        // 빈 배열이 아닐 때
        curr = this._head;

        while(curr.next !== null) {
            curr = curr.next;
        }
        // while 문 탈출할 때 리스트의 마지막 원소 = curr
        curr.next = node;
    }
    this._length++;
}

// 원하는 위치에 삽입
LinkedList.prototype.insert = function(pos, data) {
    if(pos >= 0 && pos <= this._length) {
        let node = new Node(data);
        let curr = this._head;
        let index = 0;
        let prev;

        if(pos === 0) {
            // head. 시작 노드가 된다
            node.next = curr;
            this._head = node;
        } else {
            // 첫 헤드에 삽입이 아닌 경우
            while(index++ <pos) {
                // 각 노드를 순차적으로보면서 prev, curr을 형성
                prev = curr;
                curr = curr.next;
            }
            // index가 pos 값에 도착하면 prev와 curr 사이에 삽입.
            node.next = curr;
            prev.next = node;
        }
        this._length++;
        return true;
    } else {
        return false;
    }
}

LinkedList.prototype.toString = function () {
    var curr = this._head, result = []

    while(curr) {
        result.push(curr.data);
        curr = curr.next;
    }
    return result.join(',');
}

LinkedList.prototype.isEmpty = function () {
    return this._length === 0;
}

LinkedList.prototype.size = function () {
    return this._length;
}


const list = new LinkedList();
console.log(list.toString());
console.log(list.isEmpty());
// list.append(10);
// list.append(15);
// list.append(20);
list.insert(0,10);
list.insert(1,20);
list.insert(2,30);
console.log(list.isEmpty());
console.log(list.toString());
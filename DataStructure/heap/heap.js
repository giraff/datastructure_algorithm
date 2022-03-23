class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 인덱스를 구하는 메소드
  getLeftChildIdx(parentIdx) {
    return parentIdx * 2 + 1;
  }
  getRightChildIdx(parentIdx) {
    return parentIdx * 2 + 2;
  }
  getParentIdx(childIdx) {
    return math.floor((childIdx - 1) / 2);
  }
  // 있는지 없는지 여부
  hasLeftChild(parentIdx) {
    return this.getLeftChildIdx(parentIdx) < this.heap.length;
  }
  hasRightChild(parentIdx) {
    return this.getRightChildIdx(parentIdx) < this.heap.length;
  }
  hasParent(childIdx) {
    return this.getParentIdx(childIdx) >= 0;
  }
  // 값을 구하는 메소드
  leftChild(parentIdx) {
    return this.heap[this.getLeftChildIdx(parentIdx)];
  }
  rightChild(parentIdx) {
    return this.heap[this.getRightChildIdx(parentIdx)];
  }
  parent(childIdx) {
    return this.heap[this.getParentIdx(childIdx)];
  }
  // 최상위 노드(root)를 구하는 peek 메소드
  peek() {
    if (this.heap.length === 0) return null;
    return this.heap[0];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    let lastInsertedNode = this.heap[index];

    while (index > 0) {
      const parentIndex = this.getParentIdx(index);
      if (this.heap[parentIndex] > lastInsertedNode) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }

    // break 를 만나서 자신의 자리를 찾은 상황.
    // 마지막 정착된 곳이 가장 나중에 들어온 노드가 들어갈 자리다.
    this.heap[index] = lastInsertedNode;
  }

  remove() {
    const count = this.heap.length;
    if (count <= 0) return undefined;

    const rootNode = this.heap[0];
    if (count === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
    }

    return rootNode;
  }

  heapifyDown() {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];

    while (this.getLeftChildIdx(index) < count) {
      const leftChildIndex = this.getLeftChildIdx(index);
      const rightChildIndex = this.getRightChildIdx(index);

      const smallerChild =
        rightChildIndex < count &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[smallerChild] <= rootNode) {
        this.heap[index] = this.heap[smallerChild];
        index = smallerChild;
      } else break;
    }
    this.heap[index] = rootNode;
  }

  toString() {
    return this.heap.join(" ");
  }
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // 인덱스를 구하는 메소드
  getLeftChildIdx(parentIdx) {
    return parentIdx * 2 + 1;
  }
  getRightChildIdx(parentIdx) {
    return parentIdx * 2 + 2;
  }
  getParentIdx(childIdx) {
    return math.floor((childIdx - 1) / 2);
  }
  // 있는지 없는지 여부
  hasLeftChild(parentIdx) {
    return this.getLeftChildIdx(parentIdx) < this.heap.length;
  }
  hasRightChild(parentIdx) {
    return this.getRightChildIdx(parentIdx) < this.heap.length;
  }
  hasParent(childIdx) {
    return this.getParentIdx(childIdx) >= 0;
  }
  // 값을 구하는 메소드
  leftChild(parentIdx) {
    return this.heap[this.getLeftChildIdx(parentIdx)];
  }
  rightChild(parentIdx) {
    return this.heap[this.getRightChildIdx(parentIdx)];
  }
  parent(childIdx) {
    return this.heap[this.getParentIdx(childIdx)];
  }
  // 최상위 노드(root)를 구하는 peek 메소드
  peek() {
    if (this.heap.length === 0) return null;
    return this.heap[0];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    let lastInsertedNode = this.heap[index];

    while (index > 0) {
      const parentIndex = this.getParentIdx(index);
      if (this.heap[parentIndex] < lastInsertedNode) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }

    // break 를 만나서 자신의 자리를 찾은 상황.
    // 마지막 정착된 곳이 가장 나중에 들어온 노드가 들어갈 자리다.
    this.heap[index] = lastInsertedNode;
  }

  remove() {
    const count = this.heap.length;
    if (count <= 0) return undefined;

    const rootNode = this.heap[0];
    if (count === 1) this.heap = [];
    else {
      this.heap[0] = this.heap.pop();
      this.heapifyDown();
    }

    return rootNode;
  }

  heapifyDown() {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];

    while (this.getLeftChildIdx(index) < count) {
      const leftChildIndex = this.getLeftChildIdx(index);
      const rightChildIndex = this.getRightChildIdx(index);

      const biggerChild =
        rightChildIndex < count &&
        this.heap[rightChildIndex] > this.heap[leftChildIndex]
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[biggerChild] >= rootNode) {
        this.heap[index] = this.heap[biggerChild];
        index = biggerChild;
      } else break;
    }
    this.heap[index] = rootNode;
  }

  toString() {
    return this.heap.join(" ");
  }
}

class PriorityQueue extends MinHeap {
  constructor() {
    super();
  }

  enqueue(value) {
    this.insert(value);
  }
  dequeue() {
    return this.remove();
  }
  isEmpty() {
    return this.heap.length <= 0;
  }
}

function testHeap() {
  let heap = new MinHeap();
  let maxHeap = new MaxHeap();

  heap.insert(1);
  heap.insert(2);
  heap.insert(3);
  heap.insert(17);
  heap.insert(19);
  heap.insert(36);
  heap.insert(7);
  heap.insert(25);
  heap.insert(100);

  maxHeap.insert(100);
  maxHeap.insert(19);
  maxHeap.insert(36);
  maxHeap.insert(3);
  maxHeap.insert(25);
  maxHeap.insert(1);
  maxHeap.insert(2);
  maxHeap.insert(7);
  maxHeap.insert(17);
  console.log(heap.toString());
  console.log(maxHeap.toString());
}

function testPriorityQueue() {
  let pq = new PriorityQueue();
  console.log(`priority에 insert: 3`, pq.enqueue(3));
  console.log(`priority에 insert: 5`, pq.enqueue(5));
  console.log(`priority에 insert: 1`, pq.enqueue(8));
  console.log(`priority에 insert: 2`, pq.enqueue(2));
  console.log(`priority에 insert: 7`, pq.enqueue(7));
  console.log(`비었습니까?`, pq.isEmpty());
  console.log(`pq에서 할일 꺼내기`, pq.dequeue());
  console.log(`pq에서 할일 꺼내기`, pq.dequeue());
  console.log(`pq에서 할일 꺼내기`, pq.dequeue());
  console.log(`pq에서 할일 꺼내기`, pq.dequeue());
  console.log(`pq에서 할일 꺼내기`, pq.dequeue());

  console.log(`비었습니까?`, pq.isEmpty());
}

function initTest() {
  testHeap();
  testPriorityQueue();
}

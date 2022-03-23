# 힙 Heap

- 일종의 **완전 이진 트리**
- 힙 속성을 만족하는 트리 기반 데이터 구조
- 힙은 *최소힙*과 *최대힙*으로 구분할 수 있다.
- 주로 배열 (Array) 을 이용해서 힙 구조 구현

### 최소힙

![MinHeap](https://upload.wikimedia.org/wikipedia/commons/6/69/Min-heap.png)

- `P`가 `C`의 상위 노드일 때 `P`의 키(값)은 `C`의 키(값)보다 작거나 같다
- rootNode에 최소값이 위치한다

### 최대힙

![Heap](https://upload.wikimedia.org/wikipedia/commons/3/38/Max-Heap.svg)

- `P`가 `C`의 상위 노드일 때 `P`의 키(값)은 `C`의 키(값)보다 크거나 같다
- root node에 최대값이 위치한다

### 힙의 시간 복잡도

- 삽입 : O(logN)
- 삭제 : O(logN)
- peek : O(1)

### 부모와 자식간의 관계

- 알고리즘 문제에서 배열의 첫 번째 값은 비워두는 경우가 종종 있다. (인덱스 0인데 '1'번째 원소라고 하는게 인지부조화)
- 만약 배열의 첫원소를 사용하지 않는다면?

```
left child = 부모 index * 2
right child = 부모 index * 2 + 1
부모 index = Math.floor(자식의 인덱스 / 2)
```

- 그냥 첫번째 원소부터 이용한다고 가정하면

```
left child = 부모 index * 2 + 1
right child = 부모 index * 2 + 2
부모 index = Math.floor(자식의 인덱스 - 1 / 2)
```

### 힙은 왜 필요할까?

주로 최대 / 최소 값을 O(1)의 시간복잡도로 얻어내기 위해 사용한다.

### 힙의 활용

1. MinHeap 의 특성을 이용하여 우선순위 큐 구현
2. OS에서 우선순위 기반의 일들을 스케줄링 하기 위함
3. 다익스트라 알고리즘에서 최소 비용 기반으로 그래프를 탐색한다.

### 구현

| 대표적인 메소드

1. insert(key, value)
2. remove()
3. heapifyUp()
4. heapifyDown()

### 기본 골격

```javascript
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 인덱스를 구하는 메소드
  getLeftChildIdx(parentIdx) {return parentIdx * 2 + 1;}
  getRightChildIdx(parentIdx) {return parentIdx * 2 + 2;}
  getParentIdx(childIdx) {return math.floor((childIdx - 1) / 2);}
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
  leftChild(parentIdx) {return
    this.heap[this.getLeftChildIdx(parentIdx)]
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
```

### 삽입 insert

```javascript
class Heap {
    ...
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
}
```

### heapifyUp

최근 삽입한 노드가 제자리를 찾아 갈 수 있도록 아래로부터 위로 끌어올려야 한다.

```javascript
class MinHeap {
  ...
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
}
```

- 변수 index는 계속해서 방금 들어온 노드의 위치를 탐색하기 위해서 변하는 값이다.
- lastInsertedNode : 최근에 삽입된 노드의 정보를 기억해놓는다
- index가 root node가 되기 전 본인의 자리를 찾아가도록 while 문을 반환한다
- 현재 탐색하고 있는 노드의 부모 노드 값이 최근 삽입된 노드보다 크다면 탐색 중인 노드를 대체한다 (우선순위가 낮으니까)
- 부모 노드의 key가 방금 삽입된 노드와 키 값이 작거나 같다면 자신의 위치를 찾은 것이므로 break;
- 최종 index가 방금 삽입된 노드의 위치가 된다.

```javascript
class MaxHeap {
  ...
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
}

```

### remove 삭제

```javascript
class Heap {
    ...
    remove() {
      const count = this.heap.length;
      if(count <= 0) return undefined;

      const rootNode = this.heap[0];
      if(count === 1) this.heap = [];
      else {
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
      }

      return rootNode;
    }
}
```

1. 최상위 노드를 꺼낸다
2. 이때 배열 안에 요소가 2개 이상 남아있다면 끝에 있는 노드를 최상위 부모로 만든다.
3. MinHeap의 형태를 갖추도록 조정한다.

### heapifyDown

위에서 아래로 끌어 내려야 하기 때문에 함수 이름은 heapifyDown

### 최소힙의 경우

```javascript
class MinHeap {
  ...
  heapifyDown() {
    let index = 0;
    let count = this.heap.length;
    let rootNode = this.heap[index];

    while(this.getLeftChildIndex(index) < count) {
      let leftChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);

      // 자식 노드 중 더 작은 노드를 찾아서 부모 노드보다 값이 작다면 부모 노드의 값과 변환
      const smaller = rightChildIndex < count && this.heap[rightChildIndex] < this.heap[leftChildIndex] ? rightChildIndex : leftChildIndex;

      if(this.heap[smaller] < rootNode) {
        this.heap[index] = this.heap[smaller];
        index = smaller;
      } else break;
    }
    this.heap[index] = rootNode;
  }
}
```

### 최대힙의 경우

```javascript
class MinHeap {
  ...
  heapifyDown() {
    let index = 0;
    let count = this.heap.length;
    let rootNode = this.heap[index];

    while(this.getLeftChildIndex(index) < count) {
      let leftChildIndex = this.getLeftChildIndex(index);
      let rightChildIndex = this.getRightChildIndex(index);

      // 자식 노드 중 더 작은 노드를 찾아서 부모 노드보다 값이 작다면 부모 노드의 값과 변환
      const smaller = rightChildIndex < count && this.heap[rightChildIndex] < this.heap[leftChildIndex] ? rightChildIndex : leftChildIndex;

      if(this.heap[smaller] < rootNode) {
        this.heap[index] = this.heap[smaller];
        index = smaller;
      } else break;
    }
    this.heap[index] = rootNode;
  }
}
```

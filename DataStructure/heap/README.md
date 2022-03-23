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

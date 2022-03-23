import LinkedList from "../singly-linked-list/LinkedListAll";

// Hash Table size directly affects on the number of collisions.
// the bigger the hash table size the less collisions you'll get.
// For demonstrating purposes hash table size is small to show how collisions are being handled
const defaultHashTableSize = 32;

export default class HashTable {
  /***
   * @param {number} hashTableSize
   */
  // 특정 사이즈를 가진 hash table을 생성하고 각 bucket(배열의 요소)를 빈 링크드 리스트로 채운다.
  constructor(hashTableSize = defaultHashTableSize) {
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());
    // keys 들을 단순하게 모아둔 객체이다. 빠르게 탐색할 때 사용한다.
    this.keys = {};
  }

  // hash 함수 : 문자열(key)을 인풋으로 받고, 해쉬값을 출력하는 함수이다.
  hash(key) {
    //console.log(Array.from("string"));
    // (6) ['s', 't', 'r', 'i', 'n', 'g'] string을 string array로 변환하고 (Array.from(key))
    // 각각의 요소를 순회하면서 누적 계산을 한다 (Array.from(key).reduce((hashAcc, keySymbol) => hashAcc + keySymbol.charCodeAt(0), 0);
    // 각각의 문자의 유니코드 수를 누적합 한 값이 곧 hash 변수에 설정된다.
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
      0
    );
    // hash 값을 buckets(hash table 배열)의 길이로 나눈 나머지 값을 반환한다.
    return hash % this.buckets.length;
  }

  // 해시 테이블을 이용해 저장한 값value을 수정할 때 사용 (setter),key로 value에 접근한다.
  // set(key, value)
  /***
   * @param {string} key
   * @param {*} value
   */
  set(key, value) {
    // 1. keyHash <- key의 해시값
    const keyHash = this.hash(key);
    // 2. keys 객체에 key : 해쉬값 형식으로 저장
    this.keys[key] = keyHash;
    // 3. key에 해당하는 배열 인덱스로 접근하여 링크드 리스트 반환하여 변수 bucketLinkedList에 저장
    const bucketLinkedList = this.buckets[keyHash];
    // 4. 링크드 리스트 bucketLinkedList 로 key에 해당하는 노드 찾기
    const node = bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });

    if (!node) {
      bucketLinkedList.append({ key, value });
    } else {
      node.value.value = value;
    }
  }

  // delete
  delete(key) {
    // 1. keyHash: key에 대한 해시값 해시 함수 통해 구하기
    const keyHash = this.hash(key);
    // 2. keys 오브젝트에서 key에 해당하는 {} key value 삭제
    delete this.keys[key];
    // 3. 배열 중 keyHash를 인덱스로 가진 요소에 연계된 링크드 리스트를 반환받아 저장
    const bucketLinkedList = this.buckets[keyHash];
    // 4. node 반환 <= bucketLinkedList에서 key에 해당하는 노드 반환
    const node = bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });

    if (node) {
      // node가 존재하면 bucketLinkedList에서 제거하기
      return bucketLinkedList.delete(node.value);
    }

    return null;
  }
  // get
  get(key) {
    // 1. 해당 buckets에 key의 hash값을 인덱스로 가지는 요소의 링크드 리스트 받기
    const bucketLinkedList = this.buckets[this.hash(key)];

    // 2. bucketLinkedList에서 key에 해당하는 노드 반환
    const node = bucketLinkedList.find({
      callback: (nodeValue) => nodeValue.key === key,
    });

    return node ? node.value.value : undefined;
  }

  // has
  has(key) {
    return Object.hasOwnProperty.call(this.keys, key);
  }
  // getKeys
  getKeys() {
    return Object.keys(this.keys);
  }
  // getValues
  getValues() {
    return this.buckets.reduce((values, bucket) => {
      const bucketValues = bucket
        .toArray()
        .map((linkedListNode) => linkedListNode.value.value);
      return values.concat(bucketValues);
    }, []);
  }
}

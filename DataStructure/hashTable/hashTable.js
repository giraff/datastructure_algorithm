import LinkedList from "../singly-linked-list/LinkedListAll";

const defaultHashTableSize = 32;

export default class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());
    this.keys = {};
  }

  // hash
  hash(key) {
    //console.log(Array.from("string"));
    // (6) ['s', 't', 'r', 'i', 'n', 'g'] string을 string array로

    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
      0
    );
    // 1. 무작위 값 생성

    return hash % this.buckets.length;
  }
  // set(key, value)
  set(key, value) {
    // 1. keyHash: key에 대한 해시값 해시 함수 통해 구하기
    const keyHash = this.hash(key);
    // 2. keys 객체에 key : value 형식으로 저장
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

  // getValues
}

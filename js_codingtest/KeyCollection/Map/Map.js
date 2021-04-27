let myMap = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
])

// new Map([iterable])
// 요소가 키-값 쌍인 Array 혹은 다른 순회 가능한 객체 (ex. [[1,'one'], [2,'two']]).

// Map객체는 키 값 쌍을 저장하며 각 쌍의 삽입 순서도 기억하는 콜렉션
// 키 동일성은 sameValueZero 알고리즘에 기반

console.log(myMap);

// 모든 Map 인스턴스는 Map.prototype을 상속
// ex. 위의 myMap은 인스턴스의 프로토타입을 만드는 new Map() 함수로 인해 생성된 Map 인스턴스로써 
// Map.prototype이 가진 method와 property를 그대로 가짐.

// map.prototype.contrucor
// 인스턴스의 프로토타입을 만드는 함수를 반화함 

//1. map.prototype.size
// Map 객체의 요소 갯수 (key/value pair 수)를 반환
console.log(myMap.size, ':size'); // 3

//2. map.prototype.clear()
//Map 객체의 모든 요소 제거
myMap.clear();

console.log(myMap.size, ':size'); // 0

//3. map.prototype.set(key, val) : Map 객체에서 주어진 key를 가진 요소를 추가하고 key의 요소가 이미 있다면 val 대체
myMap.set('bar', 'foo');

// set()은 체이닝 가능
myMap.set(1, 'foobar')
     .set(2, 'baz')
     .set(3, 'zoo');

//4. map.prototype.get(key) : 주어진 key에서 지정한 요소의 val을 반환
console.log(myMap.get(1), ':get'); //foobar :get
//  요소가 없다면, undefined 반환

//5. map.prototype.entries() 객체 안 모든 요소들을 [key, val] 형태의 array로 집어넣은 순서대로 가지고 있는 iterator 객체를 반환
console.log(myMap.entries(),':entries'); // [['bar','foo'], [1,'foobar'], [2,'baz'], [3, 'zoo']]


// 6. map.prototype.has(key); 주어진 key에 대한 key/val pair 존재 여부에 따라 boolean 값 반환
console.log(myMap.has('bar'), 'has bar?');
console.log(myMap.has('baz'), 'has baz?');

//7. map.pprototype.keys() : 존재하는 KEY들을 집어넣은 순서대로 가지고 있는 iterator 객체반환
console.log(myMap.keys(),':keys'); //MapIterator {"bar", 1, 2, 3}

//8. map.prototype.values() : 존재하는 모든 value들을 순서대로 가지고 있는 iterator 객체 반환
console.log(myMap.values(),':values'); //MapIterator {"foo", "foobar", "baz", "zoo"}

//9. map.prototype.delete(key): 주어진 key와 해당되는 val을 제거하고 제거하기 전, map.prototype.has(key)가 반환했던 값을 반환.
// 그 후는 map.prototype.has(key)는 false 반환
console.log(myMap.delete('bar')); // true, bar 라는 키는 존재했었으므로 true 반환, 그 후 key-val pair삭제

console.log(myMap.has('bar')); // false, bar 삭제 후

//10. Map 순회하기 (for-of / forEach)
// 10-1. for-of
for(let [key, value] of myMap) {
    console.log(key+'='+value);
}

for(let [key, val] of myMap.entries()) {
    console.log(key+'='+val); //위 코드와 동일
}


for(let key of myMap.keys()) {
    console.log(key, ':only key');
}

for(let value of myMap.values()) {
    console.log(value,':only val')
}

// 10-2 forEach로 순회
myMap.forEach((val, key) => {
    console.log(key + '=' + val)
})

//11. Array와 Map 간 관게
let kvArray = [['key1', 'val1'],['key2','val2']];

console.log(kvArray, ':kvArray');

let testMap = new Map(kvArray); // Array to Map 

testMap.get('key1'); //returns val1

console.log(Array.from(testMap), ':Map to Array'); // Array.from() : Map to Array
// kvArray와 동일하게 표시

console.log([...testMap], 'spread syntax');

console.log(Array.from(testMap.keys())); // ["key1","key2"] : Map.keys() to Array


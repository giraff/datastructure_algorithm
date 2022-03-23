# Array

- 데이터들이 연속적으로 이어져서 랜덤 액세스를 지원하는 데이터 구조
- index Approach가 코테 문제의 핵심
- BackTracking 이나 DP를 제외한 Array 기본 문제는 Sorting과 관련되어 있다.

## TOPIC

### Sorting 정렬 문제

1. 시간 복잡도

   - O(NlogN)
   - 보통 언어나 라이브러리에서 제공하는 Sorting의 시간 복잡도는 O(NlogN)

2. stable : 정렬을 했을 때 중복된 값들의 순서가 변하지 않는다. (기존 인풋 배열의 순서, 일관성을 지킨다)
   ex) 버블 정렬, 머지 정렬, 삽입정렬
3. unstable : 정렬을 했을 때 기존 인풋 배열의 순서를 지켜주지 않는다.
   ex) 선택 정렬, 힙 정렬, 퀵 정렬,

### search 검색 문제

1. O(N)의 시간 복잡도가 걸린다. (배열)
2. Binary Search(이진 검색) : O(logN)의 시간 복잡도 발생
3. 2D, N-D => graph에서 따로 다룬다.

### [Hard] BackTracking

### [Hard] Dynamic Programming

# 풀이

- map으로 이웃한 두 원소 비교
- s0 < s1 이면 s0을 min, s1을 max 배열에
- s1 < s0 이면 s1을 min, s0을 max 배열에 추가
- 각 배열 max, min에서 가장 최댓값 뽑아내기

## 내 생각

- 1차 배열로 줄세우기 (내림차순)
- 맨 처음 원소 빼내기
- sizes의 length - 1 만큼 원소 지우기
- 남은 배열의 첫 번째 원소 빼내기
- 빼낸 두 원소 곱하기

- 시간 오래 걸리고 안 맞는 경우있어서 실패

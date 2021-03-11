package Programmers.나누어떨어지는숫자배열;

import java.util.ArrayList;

public class Solution {
  public int[] solution(int[] arr, int divisor) {
    ArrayList<Integer> list = new ArrayList<>();

    // 나누어 떨어지는 값 가지기
    for (int data : arr) {
      if (data % divisor == 0) {
        list.add(data);
      }
    }
    // 오름차순으로 나열
    if (list.size() == 0) {
      list.add(-1);
    } else {
      for (int i = 0; i < list.size(); i++) {
        for (int j = 1; j < list.size() - i; j++) {
          if (list.get(j - 1) >= list.get(j)) {
            int tmp = list.get(j - 1);
            list.set(j - 1, list.get(j));
            list.set(j, tmp);
          }
        }
      }
    }
    // list 배열로 변환
    int[] answer = new int[list.size()];
    for (int i = 0; i < list.size(); i++) {
      answer[i] = list.get(i);
    }

    return answer;
  }

  public static void main(String[] args) {
    Solution dv = new Solution();

    int[] res1 = dv.solution(new int[] { 5, 9, 7, 10 }, 5);
    int[] res2 = dv.solution(new int[] { 2, 36, 1, 3 }, 1);
    int[] res3 = dv.solution(new int[] { 3, 2, 6 }, 10);

    for (int data : res1) {
      System.out.print(data + ",");
    }
    System.out.println("");
    for (int data : res2) {
      System.out.print(data + ",");
    }
    System.out.println("");
    for (int data : res3) {
      System.out.print(data + ",");
    }
  }
}

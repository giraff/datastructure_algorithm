package level_01.같은숫자는싫어;

import java.util.ArrayList;

public class Solution {
  public int[] solution(int[] arr) {

    // LIST 선언
    ArrayList<Integer> list = new ArrayList<>();

    // 연속적으로 나타나는 숫자 제거

    int prev = arr[0];
    list.add(prev);
    for (int idx = 1; idx < arr.length; idx++) {
      if (prev != arr[idx]) {
        list.add(arr[idx]);
      }
      prev = arr[idx];
    }

    // LIST의 원소들 배열로 전달

    int len = list.size();
    int[] answer = new int[len];
    for (int i = 0; i < len; i++) {
      answer[i] = list.get(i);
    }

    return answer;
  }

  public static void main(String[] args) {
    Solution ne = new Solution();

    int[] ans1 = ne.solution(new int[] { 1, 1, 3, 3, 0, 1, 1 });
    int[] ans2 = ne.solution(new int[] { 4, 4, 4, 3, 3 });

    System.out.print("[");
    for (int data : ans1) {
      System.out.print(data + ",");
    }
    System.out.print("]");
    System.out.println("");
    System.out.print("[");
    for (int data : ans2) {
      System.out.print(data + ",");
    }
    System.out.print("]");
  }
}

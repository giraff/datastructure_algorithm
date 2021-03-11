package Programmers.모의고사;

import java.util.ArrayList;

public class Solution {
  public int[] solution(int[] answers) {
    // 찍는 방식의 패턴
    int[] supo1 = { 1, 2, 3, 4, 5 };
    int[] supo2 = { 2, 1, 2, 3, 2, 4, 2, 5 };
    int[] supo3 = { 3, 3, 1, 1, 2, 2, 4, 4, 5, 5 };
    // 점수판
    int[] count = { 0, 0, 0 };
    // 비교
    for (int idx = 0; idx < answers.length; idx++) {
      count[0] = answers[idx] == supo1[idx % supo1.length] ? count[0] + 1 : count[0];
      count[1] = answers[idx] == supo2[idx % supo2.length] ? count[1] + 1 : count[1];
      count[2] = answers[idx] == supo3[idx % supo3.length] ? count[2] + 1 : count[2];
    }

    // 최대 정답 개수 체크
    int max_cnt = 0;

    for (int i = 0; i < count.length; i++) {
      if (max_cnt < count[i]) {
        max_cnt = count[i];
      }
    }

    // 가장 높은 점수 받은 사람 찾기
    ArrayList<Integer> max_persons = new ArrayList<>();
    for (int i = 0; i < count.length; i++) {
      if (count[i] == max_cnt) {
        max_persons.add(i + 1);
      }
    }

    // ArrayList의 원소 배열로 가져오기
    int[] answer = new int[max_persons.size()];
    for (int i = 0; i < max_persons.size(); i++) {
      answer[i] = max_persons.get(i);
    }

    return answer;
  }

  public static void main(String[] args) {
    System.out.println("Hello");

    int[] ans1 = { 1, 2, 3, 4, 5 };
    int[] ans2 = { 1, 3, 2, 4, 2 };
    Solution ex = new Solution();

    int[] res1 = ex.solution(ans1);
    int[] res2 = ex.solution(ans2);

    for (int data : res1) {
      System.out.print(data + ",");
    }
    System.out.println("");
    for (int data : res2) {
      System.out.print(data + ",");
    }
  }

}

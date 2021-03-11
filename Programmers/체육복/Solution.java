package Programmers.체육복;

public class Solution {
  public int solution(int n, int[] lost, int[] reserve) {
    int answer = 0;

    // 체육복 개수 체크
    int[] all = new int[n];
    for (int i = 0; i < all.length; i++)
      all[i] = 1;
    for (int reservedata : reserve)
      all[reservedata - 1] += 1;
    for (int lostdata : lost)
      all[lostdata - 1] -= 1;

    // 체육복 나눠주기
    for (int i = 1; i < all.length; i++) {
      if (all[i - 1] == 2 && all[i] == 0) {
        all[i - 1] -= 1;
        all[i] += 1;
      } else if (all[i - 1] == 0 && all[i] == 2) {
        all[i - 1] += 1;
        all[i] -= 1;
      }
    }
    // 체육 수업 듣는 학생 수 체크
    for (int data : all) {
      if (data != 0) {
        answer += 1;
      }
    }

    return answer;
  }

  public static void main(String[] args) {

    Solution g = new Solution();

    int res1 = g.solution(5, new int[] { 2, 4 }, new int[] { 1, 3, 5 });
    int res2 = g.solution(5, new int[] { 2, 4 }, new int[] { 3 });
    int res3 = g.solution(3, new int[] { 3 }, new int[] { 1 });

    System.out.println(res1 + "," + res2 + "," + res3);

  }
}

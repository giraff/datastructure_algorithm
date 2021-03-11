package Programmers.두정수사이의합;

public class Solution {
  public long solution(int a, int b) {
    long answer = 0;

    if (a <= b) {
      for (int cnt = a; cnt <= b; cnt++) {
        answer += cnt;
      }
    } else {
      for (int cnt = b; cnt <= a; cnt++) {
        answer += cnt;
      }
    }
    return answer;
  }

  public static void main(String[] args) {
    Solution stt = new Solution();
    System.out.println(stt.solution(3, 5));
    System.out.println(stt.solution(3, 3));
    System.out.println(stt.solution(5, 3));
  }
}

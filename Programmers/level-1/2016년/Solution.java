class Solution {
  public String solution(int a, int b) {
    String[] dayOfWeek = { "THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED" };
    int[] month = { 0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30 };
    int day = 0;
    for (int i = 0; i < a; i++) {
      day += month[i];
    }
    String answer = dayOfWeek[(day + b) % 7];

    return answer;
  }

  public static void main(String[] args) {
    Solution sol = new Solution();

    System.out.print(sol.solution(5, 24));
  }
}
package Programmers.문자열내py개수;

public class Solution {
  boolean solution(String s) {
    boolean answer = true;
    int p_count = 0;
    int y_count = 0;

    for (int i = 0; i < s.length(); i++) {
      int j = s.charAt(i) == 'p' || s.charAt(i) == 'P' ? 1 : (s.charAt(i) == 'y' || s.charAt(i) == 'Y') ? 2 : 0;
      if (j == 1) {
        p_count++;
      } else if (j == 2) {
        y_count++;
      }
    }

    if (p_count != y_count) {
      answer = false;
    }
    return answer;
    // s = s.toUpperCase();
    // s.chars().forEach(System.out::println);
    // return s.chars().filter(e -> 'P' == e).count() == s.chars().filter(e -> 'Y'
    // == e).count();

  }

  public static void main(String[] args) {
    Solution py = new Solution();
    System.out.println(py.solution("pPoooyY"));
    System.out.println(py.solution("Pyy"));
  }

}

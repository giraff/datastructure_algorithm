package Programmers.가운데글자가져오기;

public class Solution {
  public String solution(String s) {

    int len = s.length();

    if (len != 0 && len % 2 == 0) {
      return s.substring((len / 2 - 1), (len / 2 + 1));
    } else {
      return Character.toString(s.charAt(len / 2));
    }
  }

  public static void main(String[] args) {
    Solution md = new Solution();

    System.out.println(md.solution("abcde"));
    System.out.println(md.solution("qwer"));
  }

}

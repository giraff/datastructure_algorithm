package level_01.신규아이디추천;

public class Solution {

  public String solution(String new_id) {
    String tmp = "";
    String answer = "";

    // 1단계
    for (int i = 0; i < new_id.length(); i++) {
      char save = new_id.charAt(i);
      if (save >= 65 && save <= 90) { // 대문자
        tmp += (char) (save + 32);
      } else {
        tmp += (char) save;
      }
    }

    // 2단계
    answer = tmp;
    tmp = "";

    for (int i = 0; i < answer.length(); i++) {
      char save = answer.charAt(i);
      if ((save >= 97 && save <= 122) || (save >= 48 && save <= 57) || (save == 45) || (save == 95) || (save == 46)) {
        tmp += (char) save;
      }
    }
    // 3단계
    answer = tmp;

    while (answer.indexOf("..") != -1) {
      answer = answer.replace("..", ".");
    }

    // 4단계
    StringBuffer str = new StringBuffer(answer);

    if (str.length() == 0) { // 빈 문자열의 길이는 0
      answer = str.toString();
    } else {
      if (str.charAt(0) == '.') {
        str = str.deleteCharAt(0);
      }
      if (str.length() != 0 && str.charAt(str.length() - 1) == '.') {
        str = str.deleteCharAt(str.length() - 1);
      }
      answer = str.toString();
    }

    // 5단계
    answer = answer.equals("") ? "a" : answer;

    // 6단계
    if (answer.length() >= 16) {
      StringBuffer temp = new StringBuffer(answer.substring(0, 15));
      if (temp.charAt(temp.length() - 1) == '.') {
        temp = temp.deleteCharAt(temp.length() - 1);
      }
      answer = temp.toString();
    }

    // 7단계
    if (answer.length() > 0 && answer.length() <= 2) {
      while (answer.length() < 3) {
        char last_char = answer.charAt(answer.length() - 1);
        answer += last_char;
      }
    }

    return answer;
  }

  public static void main(String[] args) {
    String id1 = "...!@BaT#*..y.abcdefghijklm";
    String id2 = "z-+.^.";
    String id3 = "=.=";
    String id4 = "123_.def";
    String id5 = "abcdefghijklmn.p";

    Solution id = new Solution();
    System.out.println(id.solution(id1));
    System.out.println(id.solution(id2));
    System.out.println(id.solution(id3));
    System.out.println(id.solution(id4));
    System.out.println(id.solution(id5));

  }

}

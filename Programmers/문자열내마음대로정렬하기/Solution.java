
package Programmers.문자열내마음대로정렬하기;

import java.util.*;

public class Solution {
  public String[] solution(String[] strings, int n) {

    Arrays.sort(strings, new Comparator<String>() {
      @Override
      public int compare(String o1, String o2) {
        if (o1.charAt(n) > o2.charAt(n)) {
          return 1;
        } else if (o1.charAt(n) == o2.charAt(n)) {
          return o1.compareTo(o2);
        } else {
          return -1;
        }
      }
    });

    return strings;
  }

  public static void main(String[] args) {
    Solution st = new Solution();

    String[] ans1 = st.solution(new String[] { "sun", "bed", "car" }, 1);
    String[] ans2 = st.solution(new String[] { "abce", "abcd", "cdx" }, 2);

    for (String data : ans1) {
      System.out.print(data + " ");
    }

    System.out.println(" ");

    for (String data : ans2) {
      System.out.print(data + " ");
    }
  }
}
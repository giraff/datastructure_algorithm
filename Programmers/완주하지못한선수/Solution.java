package Programmers.완주하지못한선수;

import java.util.*;

public class Solution {
  public String solution(String[] participant, String[] completion) {
    Map<String, Integer> hm = new HashMap<>();
    for (String a : participant)
      hm.put(a, hm.getOrDefault(a, 0) + 1);
    for (String a : completion)
      hm.put(a, hm.getOrDefault(a, 0) - 1);
    for (String a : hm.keySet()) {
      if (hm.get(a) != 0)
        return a;
    }
    return null;
  }

  public static void main(String[] args) {
    Solution sol = new Solution();

    System.out.println(sol.solution(new String[] { "leo", "kiki", "eden" }, new String[] { "eden", "kiki" }));
    System.out.println(sol.solution(new String[] { "marina", "josipa", "nikola", "vinko", "filipa" },
        new String[] { "marina", "josipa", "nikola", "filipa" }));
    System.out.println(
        sol.solution(new String[] { "mislav", "stanko", "ana", "mislav" }, new String[] { "stanko", "ana", "mislav" }));

  }
}

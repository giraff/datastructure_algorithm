package level_01.폰켓몬;

import java.util.*;

public class Solution {
  public int solution(int[] nums) {
    int take = nums.length / 2;
    Map<Integer, Integer> hm = new HashMap<>();

    for (int a : nums) {
      hm.put(a, hm.getOrDefault(a, 0) + 1);
    }
    int len = hm.keySet().size();

    int answer = take <= len ? take : len;
    return answer;

  }

  public static void main(String[] args) {
    Solution p = new Solution();

    System.out.println(p.solution(new int[] { 3, 1, 2, 3 }));

    System.out.println(p.solution(new int[] { 3, 3, 3, 2, 2, 4 }));
    System.out.println(p.solution(new int[] { 3, 3, 3, 2, 2, 2 }));

  }

}


package level_01.K번째수;

import java.util.Arrays;

public class Solution {
  public int[] solution(int[] array, int[][] commands) {
    int[] arr1;
    int[] answer = new int[commands.length];

    for (int i = 0; i < commands.length; i++) {
      arr1 = Arrays.copyOfRange(array, commands[i][0] - 1, commands[i][1]);
      Arrays.sort(arr1);
      answer[i] = arr1[commands[i][2] - 1];
    }
    // 사고흐름
    // arr1 = Arrays.copyOfRange(array, commands[0][0] - 1, commands[0][1]);
    // Arrays.sort(arr1);
    // result[0] = arr1[commands[0][2] - 1];
    // System.out.println(result[0]);

    // for (int i = 0; i < arr1.length; i++) {
    // System.out.print(arr1[i] + ",");
    // }
    // System.out.println("");
    // arr1 = Arrays.copyOfRange(array, commands[1][0] - 1, commands[1][1]);
    // Arrays.sort(arr1);
    // result[1] = arr1[commands[1][2] - 1];
    // System.out.println(result[1]);
    // for (int i = 0; i < arr1.length; i++) {
    // System.out.print(arr1[i] + ",");
    // }
    // System.out.println("");
    // arr1 = Arrays.copyOfRange(array, commands[2][0] - 1, commands[2][1]);
    // for (int i = 0; i < arr1.length; i++) {
    // System.out.print(arr1[i] + ",");
    // }
    return answer;
  }

  public static void main(String[] args) {
    int[] array = { 1, 5, 2, 6, 3, 7, 4 };
    int[][] cmds = { { 2, 5, 3 }, { 4, 4, 1 }, { 1, 7, 3 } };
    Solution n = new Solution();
    int[] result = n.solution(array, cmds);
    for (int data : result) {
      System.out.println(data);
    }
  }

}

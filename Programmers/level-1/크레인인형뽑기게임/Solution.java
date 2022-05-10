package level_01.크레인인형뽑기게임;

public class Solution {
  public int solution(int[][] board, int[] moves) {
    int[] stackArr = new int[moves.length];
    int[][] tmp = board;
    int top = 0;
    int count = 0;
    int height = tmp[0].length;

    for (int idx = 0; idx < moves.length; idx++) {

      int i = 0;
      while (tmp[i][(moves[idx] - 1)] == 0) {
        i++;
        if (i == height) {
          i = -1;
          break;
        }
      }

      if (i == -1) {
        continue;
      }

      if (stackArr[0] != 0) {
        if (stackArr[top - 1] != tmp[i][moves[idx] - 1]) {
          stackArr[top] = tmp[i][(moves[idx] - 1)];
          top++;

        } else {
          top--;
          count = count + 1;
        }
      } else {
        stackArr[0] = tmp[i][(moves[idx] - 1)];
        top = 1;
      }

      tmp[i][(moves[idx] - 1)] = 0;
    }

    int answer = count * 2;
    return answer;
  }

  public static void main(String[] args) {
    int[] move = { 1, 5, 3, 5, 1, 2, 1, 4 };
    int[][] array = { { 0, 0, 0, 0, 0 }, { 0, 0, 1, 0, 3 }, { 0, 2, 5, 0, 1 }, { 4, 2, 4, 4, 2 }, { 3, 5, 1, 3, 1 } };

    Solution da = new Solution();
    System.out.println(da.solution(array, move));
  }
}

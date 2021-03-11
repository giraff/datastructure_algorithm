package Programmers.두개뽑아서더하기;

import java.util.ArrayList;

public class Solution {
  public int[] solution(int[] numbers) {

    ArrayList<Integer> list = new ArrayList<>();
    int tmp_length = 0;

    for (int i = 0; i < numbers.length; i++) {
      tmp_length = tmp_length + i;
    }

    int[] tmp = new int[tmp_length];
    int count = 0;

    for (int i = 0; i < numbers.length; i++) {
      for (int j = i + 1; j < numbers.length; j++) {
        tmp[count] = numbers[i] + numbers[j];
        count++;
      }
    }

    for (int i = 0; i < tmp.length; i++) {
      for (int j = 1; j < tmp.length - i; j++) {
        if (tmp[j - 1] > tmp[j]) {
          int save = tmp[j - 1];
          tmp[j - 1] = tmp[j];
          tmp[j] = save;
        }
      }
    }

    for (int elem : tmp) {
      if (!list.contains(elem)) {
        list.add(elem);
      }
    }

    int[] answer = new int[list.size()];
    int idx = 0;
    for (int item : list) {
      answer[idx] = item;
      idx++;
    }

    return answer;

  }

  public static void main(String[] args) {
    Solution sum = new Solution();
    // int[] numbers = { 5, 0, 2, 7 };
    // int[] numbers2 = { 2, 1, 3, 4, 1 };
    int[] numbers3 = { 1, 2, 3, 4, 5, 6 };
    int[] result = sum.solution(numbers3);
    for (int data : result) {
      System.out.print(data + ",");
    }
  }
}
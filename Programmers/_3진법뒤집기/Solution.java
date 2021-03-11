package Programmers._3진법뒤집기;

public class Solution {
  public int solution(int n) {
    int answer = 0;
    long place_value = 1;
    long ternary_system = 0;
    // 3 진법으로 표현
    while (n > 0) {
      ternary_system += (n % 3) * place_value;
      place_value *= 10;
      n /= 3;
    }
    // 앞 뒤 뒤집기
    String str = Long.toString(ternary_system);
    String reverse_str = new StringBuffer(str).reverse().toString();

    // 10진법으로 표현

    int reverse = Integer.parseInt(reverse_str);
    int length = (int) (Math.log10(reverse) + 1);
    int digits = 1;
    int num = 0;

    for (int i = 0; i < length; i++) {
      num = reverse % 10;
      answer += num * digits;
      reverse /= 10;
      digits *= 3;
    }

    return answer;
  }

  public static void main(String[] args) {
    Solution t = new Solution();
    System.out.println(t.solution(45));

    System.out.println(t.solution(125));

  }
}

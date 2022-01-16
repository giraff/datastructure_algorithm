function solution(sizes) {
  sizes.map(([s0, s1]) => {
    if (s0 < s1) {
      max.push(s1);
      min.push(s0);
    } else {
      max.push(s0);
      min.push(s1);
    }
  });

  return Math.max(...max) * Math.max(...min);
}

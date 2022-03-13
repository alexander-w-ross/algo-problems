function climbingStaircase(n, memo = {}) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (memo[n]) return memo[n];
  memo[n] = climbingStaircase(n - 1, memo) + climbingStaircase(n - 2, memo);
  return memo[n];
}
console.log(climbingStaircase(45));

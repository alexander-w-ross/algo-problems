# Climbing Stairs

[](https://leetcode.com/problems/climbing-stairs/submissions/)

## Problem

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

**Example 1:**

```
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

```

**Example 2:**

```
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

```

**Constraints:**

- `1 <= n <= 45`

## Successful code

```js
/**
 * @param {number} n
 * @return {number}
 */
function climbingStaircase(n, memo = {}) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (memo[n]) return memo[n];
  memo[n] = climbingStaircase(n - 1, memo) + climbingStaircase(n - 2, memo);
  return memo[n];
}
```

### Time/Space Complexity

**Time**: `O(n)` ( `O(2^n)` without memoization)
**Space**: `O(n)`

### Steps

1. Take care of base cases `1` and `2`
2. Check if `n` is in the `memo`, if so return that value
3. Call `climbingStaircase` each time for allowed steps, in this case `n-1`, `n-2`

Time Complexity

- [Good Explainer Video](https://www.youtube.com/watch?v=Y0lT9Fck7qI)

- [Good Explanation of time complexity](https://stackoverflow.com/a/64051679)

- if you start at `N` or `N-1` there will always only be 1 way of getting to `N`. So for example if `N=5` (given you can only take one or two steps)

| N (=5) | ways to get to N |
| ------ | ---------------- |
| 5      | 1                |
| 4      | 1                |
| 3      | 2                |
| 2      | 3                |
| 1      | 5                |
| 0      | 8                |

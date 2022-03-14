# Counting bits

## Problem

Given an integer `n`, return *an array* `ans` *of length* `n + 1` *such that for each* `i` **(`0 <= i <= n`)*,* `ans[i]` \*is the **number of**_ `1`_**'s\** in the binary representation of* `i`.

**Example 1:**

```
Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10
```

**Example 2:**

```
Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101

```

**Constraints:**

- `0 <= n <= 105`

## Successful code

```js
/**
 * @param {number} n
 * @return {number[]}
 */

// optimal solution O(n)
var countBits = function (n) {
  let arr = [0];
  for (let i = 1; i <= n; i++) {
    const half = i >> 1;
    const isOdd = i & 1;
    arr[i] = arr[half] + isOdd;
    console.log(`i: ${i}, half: ${half}, odd: ${isOdd}, ${arr[i]}`);
  }
  return arr;
};
```

## Complexity

**Time**: `O(n)`
**Space**: `O(n)` (`O(1)` not including array to return)

## Steps - Optimal solution

1. set `arr[0]` and `arr[1]` to `0` and `1` respectively.
2. Want to build up array. Start for loop at `i=2`
3. calculate if current `i` is odd or even using `& 1` (this will either be all `0` if even or `1` at the end of odd.).
4. Cut number in half by right shifting.
5. Set `arr[i]` to the addition of array at the half index and isOdd

## Comments

- When you cut the number in half by right shifting by 1, two numbers can point to the same number.

  - ex. `12 -> 1100`, `13 -> 1101`, both point to `6 -> 0110`

  Right shifting will either get rid of a one or zero depending if its odd or even, so you compensate that by figuring if its odd.

- If you have a number like `14` that points to `7` after right shifting, there will be a zero at the end, so right shifting will get rid of that zero and make it even with `7`

  - ex, `14 -> 1110`, `7 -> 0111`

  because 14 is even, there's no value to add.

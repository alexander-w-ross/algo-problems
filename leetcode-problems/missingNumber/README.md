# Missing Number

[Missing Number - LeetCode](https://leetcode.com/problems/missing-number/)

### Problem

Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return *the only number in the range that is missing from the array.*

**Example 1:**

```
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
```

### Time/Space Complexity

**Time**: `O(n)`
**Space**: `O(1)`

### Successful Code

```js
/**
 * @param {number[]} nums
 * @return {number}
 */

// bit manipulation O(n)
var missingNumber = function (nums) {
  let a = 0;
  for (let i = 0; i < nums.length; i++) {
    a ^= i;
    a ^= nums[i];
  }
  return (a ^= nums.length);
};

// using sum of first n numbers
var missingNumber = function (nums) {
  let n = nums.length;
  let totalSum = (n * (n + 1)) / 2;
  let sumFromArray = nums.reduce((prev, curr) => prev + curr);
  return totalSum - sumFromArray;
};
```

### Steps

1. Initialize a variable `a` as zero
2. Map through the values of `nums` and use `XOR` to encode the index and each value in `nums`.
3. Use `XOR` to encode length of array.

**Explanation**
Using the index, the array should in theory have all of those numbers. Using `XOR` will cancel out all the values in the array that match an index and thus leave you with the remaining missing numbers.

- setting `a^=index` will always ensure that a gets every single value that should be in the array (Note: that's why you have to do `a^=arr.length` at the end so that you encode that number as well (for loop won’t reach final length index)).
- Then performing `XOR` on the actual element in the array will zero-out or cancel that value from `a`. Leaving you with the missing number because it can’t be cancelled out.
- If you had a full array with no missing numbers, the final result would always be `0`

### Comments

- Use sum formula - only one number is missing so it will be unique
- Spent a long time trying to use a hashmap because the previous problem used one. I think it would probably need a space complexity of `O(n)` because worst case is you need to keep track of all the values you’ve seen.
- Once I got off hashmap, it was fairly natural to try the sum of the numbers. Put way too many if checks in my code. The more concise version does the same thing, just need to be more concise.

# Find all missing numbers

[Find All Numbers Disappeared in an Array - LeetCode](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)

## Problem

Given an array `nums` of `n` integers where `nums[i]` is in the range `[1, n]`, return *an array of all the integers in the range* `[1, n]` *that do not appear in* `nums`.

**Example 1:**

```
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

```

**Example 2:**

```
Input: nums = [1,1]
Output: [2]
```

### Time/Space Complexity

**Time**: `O(n)`
**Space**: `O(n)`

## Successful Code

```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Time complexity O(n)
// Space complexity O(n)
function missingNumbers(nums) {
  const set = new Set(nums);
  for (let i = 1; i <= nums.length; i++) {
    if (set.has(i)) set.delete(i);
    else {
      set.add(i);
    }
  }
  return [...set];
}
```

### Steps

1. Turn nums into a `Set` so you can do constant time look ups.
2. For each index, check if `Set` has that value, if so delete it from array
3. Else, add it to the array.

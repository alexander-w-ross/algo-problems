# Return single non-repeating number

[Single Number - LeetCode](https://leetcode.com/problems/single-number/)

## Problem

Given a **non-empty** array of integers `nums`, every element appears *twice* except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

**Example 1:**

```
Input: nums = [2,2,1]
Output: 1
```

**Example 2:**

```
Input: nums = [4,1,2,1,2]
Output: 4
```

**Example 3:**

```
Input: nums = [1]
Output: 1
```

## Solution/Code

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonRepeatingNumber = function (nums) {
  return nums.reduce((prev, curr) => prev ^ curr);
};
```

### Time/Space Complexity

**Time**: `O(n)`
**Space**: `O(1)`

### Steps

1. Use reduce and `XOR` to move through array and cancelling out all the same numbers

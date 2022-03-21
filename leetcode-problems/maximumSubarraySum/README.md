# Maximum subarray

[Maximum Subarray - LeetCode](https://leetcode.com/problems/maximum-subarray/)

## Problem

Given an integer array `nums`, find the contiguous subarray (containing at least one number) which has the largest sum and return *its sum*.

A **subarray** is a **contiguous** part of an array.

**Example 1:**

```
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

```

**Example 2:**

```
Input: nums = [1]
Output: 1

```

**Example 3:**

```
Input: nums = [5,4,-1,7,8]
Output: 23
```

## Successful code

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];
  let maxSoFar = nums[0];
  let negMax = nums[0];
  let maxAtThisPoint = 0;
  for (let i = 0; i < nums.length; i++) {
    if (maxAtThisPoint + nums[i] >= 0) {
      maxAtThisPoint += nums[i];
      if (maxSoFar < maxAtThisPoint) {
        maxSoFar = maxAtThisPoint;
      }
    } else {
      maxAtThisPoint = 0;
      if (nums[i] < 0 && negMax < nums[i]) {
        negMax = nums[i];
      }
    }
  }
  return maxSoFar > negMax ? maxSoFar : negMax;
};
```

## Complexity

**Time**: `O(n)`
**Space**: `O(1)`

## Steps

You have 3 values,

- `maxSoFar` - the highest value you see
- `maxAtThisPoint` - the highest value in a continuous run of numbers
- `negMax`- highest value if all values are negative

For each loop:

1. If `maxAtThisPoint + nums[i] >= 0` update `maxAtThisPoint` to that value and if its bigger than the `maxSoFar` then update that as well.
2. If `maxAtThisPoint + nums[i] < 0` that means that it would be better to take the next number in the array. If at any point `maxAtThisPoint` is less than 0, that means that any number you add to it will always be less than the actual number. In that case, reset back to zero and start logging a new subarray
3. Since `maxAtThisPoint` deals with all positive numbers, `negMax` will grab the highest negative number and return that if all numbers are negative

## Comments

- Remember that anytime `maxAtThisPoint` goes below zero, then reset it to zero.
- Keep track of negative values in case array is completely negative numbers.

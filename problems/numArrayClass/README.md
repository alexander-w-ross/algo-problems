# Range Sum Query - Immutable

[Range Sum Query - Immutable - LeetCode](https://leetcode.com/problems/range-sum-query-immutable/)

## Problem

Given an integer array `nums`, handle multiple queries of the following type:

1. Calculate the **sum** of the elements of `nums` between indices `left` and `right` **inclusive** where `left <= right`.

Implement the `NumArray` class:

- `NumArray(int[] nums)` Initializes the object with the integer array `nums`.
- `int sumRange(int left, int right)` Returns the **sum** of the elements of `nums` between indices `left` and `right` **inclusive** (i.e. `nums[left] + nums[left + 1] + ... + nums[right]`).

**Example 1:**

```
Input
["NumArray", "sumRange", "sumRange", "sumRange"]
[[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]
Output
[null, 1, -1, -3]

Explanation
NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

```

**Constraints:**

- `1 <= nums.length <= 104`
- `105 <= nums[i] <= 105`
- `0 <= left <= right < nums.length`
- At most `104` calls will be made to `sumRange`.

## Successful Code

```js
/**
 * @param {number[]} nums
 */

class NumArray {
  constructor(nums) {
    this.nums = nums;
  }
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  if (this.nums.length === 0) return 0;
  else if (left > right) throw new Error("left must be less than right");
  else if (left < 0 || right < 0)
    throw new Error("left and right must be positive");
  else if (right > this.nums.length)
    throw new Error("right must be less than length");
  else if (left === right) return this.nums[left];
  let sum = 0;
  for (let i = left; i <= right; i++) {
    sum += this.nums[i];
  }
  return sum;
};
```

## Complexity

**Time**: `O(n)`
**Space**: `O(1)`

## Steps

1. Create `NumArray` class.
2. Use `prototype` to extend the `NumArray` class.
3. Set up error cases
4. Using `left`, `right`, sum over those indices in array.

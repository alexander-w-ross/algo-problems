# Binary Search Sorted List

[Binary Search - LeetCode](https://leetcode.com/problems/binary-search/)

# Problem

Given an array of integers `nums` which is sorted in ascending order, and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwise, return `-1`.

You must write an algorithm with `O(log n)` runtime complexity.

**Example 1:**

```
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

```

**Example 2:**

```
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

```

**Constraints:**

- `1 <= nums.length <= 104`
- `104 < nums[i], target < 104`
- All the integers in `nums` are **unique**.
- `nums` is sorted in ascending order.

## Successful code

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let firstIndex = 0;
  let lastIndex = nums.length - 1;
  if (target < nums[0] || target > nums[lastIndex]) return -1;
  while (firstIndex <= lastIndex) {
    let midpoint = parseInt((firstIndex + lastIndex) / 2);
    if (target !== nums[midpoint] && firstIndex === lastIndex) return -1;
    else if (target === nums[midpoint]) return midpoint;
    else if (target < nums[midpoint]) {
      lastIndex = midpoint - 1;
    } else {
      firstIndex = midpoint + 1;
    }
  }
};
```

## Complexity

**Time**: `O(logn)`
**Space**: `O(1)`

## Steps - Iterative

1. Intialize `firstIndex` and `lastIndex` to either end of the list.
2. Immediately check if `target` is outside the list then return `-1`.
3. Enter while loop that runs until `firstIndex` and `lastIndex` equal eachother
4. Split the array in half
   - If `target` is less than the value, then it will be in the left hand side of the array. Keep `firstIndex` where it was from the last interation and move `lastIndex` to the `midpoint - 1`.
   - If `target` is greater than the value, then it will be in the right hand side of the array. Keep `lastIndex` where it was from the last interation and move `firstIndex` to the `midpoint + 1`.
5. Continue doing this until you either find the value or if `firstIndex` and `lastIndex` are equal and you still haven't found it, then return `-1`.

## Comments

- Tried doing the recursion method, this way seems cleaner when you're returning the **index** and not just checking if the value exists or not. Its harder to keep track of the `index` in the parent array because everytime the function gets called on a new, shorter array, it will find the value and return the `index` of that smaller array.
  [Helpful site explaining time/space complexity](https://www.geeksforgeeks.org/complexity-analysis-of-binary-search/)

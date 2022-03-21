# Peak Index in a Mountain Array

[Peak Index in a Mountain Array - LeetCode](https://leetcode.com/problems/peak-index-in-a-mountain-array/)

# Problem

Let's call an array `arr` a **mountain** if the following properties hold:

- `arr.length >= 3`
- There exists some `i` with `0 < i < arr.length - 1` such that:
  - `arr[0] < arr[1] < ... arr[i-1] < arr[i]`
  - `arr[i] > arr[i+1] > ... > arr[arr.length - 1]`

Given an integer array `arr` that is **guaranteed** to be a mountain, return any `i` such that `arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1]`.

**Example 1:**

```
Input: arr = [0,1,0]
Output: 1

```

**Example 2:**

```
Input: arr = [0,2,1,0]
Output: 1

```

**Example 3:**

```
Input: arr = [0,10,5,2]
Output: 1

```

**Constraints:**

- `3 <= arr.length <= 104`
- `0 <= arr[i] <= 106`
- `arr` is **guaranteed** to be a mountain array

## Successful Code

```js
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  let midpoint;
  while (left < right) {
    midpoint = Math.floor((left + right) / 2);
    if (arr[midpoint] > arr[midpoint - 1] && arr[midpoint] > arr[midpoint + 1])
      return midpoint;
    else if (arr[midpoint] > arr[midpoint - 1]) left = midpoint;
    else if (arr[midpoint] < arr[midpoint - 1]) right = midpoint;
  }
  return midpoint;
};
```

## Complexity

**Time**: `O(logn)`
**Space**: `O(1)`

## Steps

1. Initalize `right` and `left` to the end of the array and start of array respectively.
2. If value at current `midpoint` is greater than either value on either side, return `midpoint`.
3. If value at midpoint is greater than the value to the left of it, move `left` index to midpoint value.
4. If value at midpoint is less than the value to the left of it, move `right` index to midpoint value.
5. Return midpoint index

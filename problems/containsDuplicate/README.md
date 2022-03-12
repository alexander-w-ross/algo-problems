# Contains Duplicate

[Contains Duplicate - LeetCode](https://leetcode.com/problems/contains-duplicate/)

### Problem

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example

```jsx
Input: nums[(1, 2, 3, 1)];
Output: true;
```

### Successful Code

```jsx
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// using set
var containsDuplicate = function (nums) {
  const t = new Set(nums);
  return t.size === nums.length ? false : true;
};

// using Map
var containsDuplicate = function (nums) {
  const hash = new Map();
  for (let val of nums) {
    if (hash.has(val)) return true;
    hash.set(val, 1);
  }
  return false;
};

// using Object
var containsDuplicate = function (nums) {
  const hash = new Object();
  for (const [i, val] of nums.entries()) {
    if (!!hash[val]) return true;
    else if (i === nums.length - 1) return false;
    hash[val] = String(val);
  }
};
```

### Steps

1. Initialize new `Set` with `nums`.
2. This will automatically remove all duplicates
3. Compare original length of `nums` to new `Set(nums)` length.

### Tricks/Issues

**Comments**

- Use a set - that will remove all duplicates for you and then compare size.
- Originally tried just setting `hash[val] = “”` and then checking if a key exists. This won't work because each new key/value in hashmap is referentially a different value (under the hood). So instead I just set the key to val and cast val as a string to make the comparison.
- Casting val as a string was needed because checking the truthiness of val will be false for the number 0. So to get around that I cast it as a string and then made the comparison.
- `hash[val] = <anything>` anything could be any value that won't be coerced to false in the if statement.

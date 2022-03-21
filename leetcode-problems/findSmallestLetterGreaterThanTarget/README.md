# Find Smallest Letter Greater Than Target

[Find Smallest Letter Greater Than Target - LeetCode](https://leetcode.com/problems/find-smallest-letter-greater-than-target/)

# Problem

Given a characters array `letters` that is sorted in **non-decreasing** order and a character `target`, return *the smallest character in the array that is larger than* `target`.

**Note** that the letters wrap around.

- For example, if `target == 'z'` and `letters == ['a', 'b']`, the answer is `'a'`.

**Example 1:**

```
Input: letters = ["c","f","j"], target = "a"
Output: "c"

```

**Example 2:**

```
Input: letters = ["c","f","j"], target = "c"
Output: "f"

```

**Example 3:**

```
Input: letters = ["c","f","j"], target = "d"
Output: "f"

```

**Constraints:**

- `2 <= letters.length <= 104`
- `letters[i]` is a lowercase English letter.
- `letters` is sorted in **non-decreasing** order.
- `letters` contains at least two different characters.
- `target` is a lowercase English letter.

### Time/Space Complexity

**Iterative**
**Time**: `O(n)`
**Space**: `O(1)`

**Recursive**
**Time**: `O(logn)`
**Space**: `O(1)`

### Successful Code

```js
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
// iterative
var nextGreatestLetter = function (letters, target) {
  let lastIndex = letters.length - 1;
  if (target < letters[0] || target >= letters[lastIndex] || target === "z")
    return letters[0];
  for (let i = 0; i <= lastIndex; i++) {
    let curr = letters[i];
    let next = letters[i + 1];
    if (target >= curr && target < next) return next;
  }
};
// recursive
var nextGreatestLetter = function (letters, target) {
  if (letters.length === 1) {
    return letters[0];
  }

  let left = 0;
  let right = letters.length;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  if (left === letters.length) {
    return letters[0];
  } else {
    return letters[left];
  }
};
```

### Steps - Iterative

1. Return the first element **if**:
   - `target` is less than the first element, **or**
   - `target` is equal to or greater than the last element, **or**
   - `target` is equal to `z`, because it will always be the first element in array.
2. Map through each element in array, if `target` is greater than `curr` value but less than `next`, return the next value.

### Steps - Recursive

1. Initalize `left` and `right` to the ends of the array
2. Find the `midpoint` between the current `left` and `right`.
3. If `target` is bigger than the value at the midpoint, move the `left` index to the `midpoint + 1`
4. If `target` is less than the value at the midpoint, move the `right` index to the `midpoint - 1`
5. Once `left === right`, exit while loop.
6. If `left` is equal to the end of the array, then return the first element (because it loops around)
7. Else return the value at that point.

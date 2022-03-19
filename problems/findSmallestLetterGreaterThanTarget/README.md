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

**Time**: `O(n)`
**Space**: `O(1)`

### Successful Code

```js
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
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
```

### Steps

1. Return the first element **if**:
   - `target` is less than the first element, **or**
   - `target` is equal to or greater than the last element, **or**
   - `target` is equal to `z`, because it will always be the first element in array.
2. Map through each element in array, if `target` is greater than `curr` value but less than `next`, return the next value.

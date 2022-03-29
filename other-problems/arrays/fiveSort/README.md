# Five Sort

# Problem

Write a function, *fiveSort*, that takes in an array of numbers as an argument. The function should rearrange elements of the array such that all 5s appear at the end. Your function should perform this operation **in-place** by mutating the original array. The function should return the array.

Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.

### test_00

```
fiveSort([12, 5, 1, 5, 12, 7]);
// -> [12, 7, 1, 12, 5, 5]

```

### test_01

```
fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]);
// -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5]

```

### test_02

```
fiveSort([5, 5, 5, 1, 1, 1, 4]);
// -> [4, 1, 1, 1, 5, 5, 5]

```

### test_03

```
fiveSort([5, 5, 6, 5, 5, 5, 5]);
// -> [6, 5, 5, 5, 5, 5, 5]

```

### test_04

```
fiveSort([5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5]);
// -> [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5]

```

## Successful Code

```js
/**
 *
 * @param {number[]} nums
 * @returns number[]
 */

const fiveSort = (nums) => {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    if (nums[end] === 5) end--;
    else if (nums[start] === 5) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
    } else start++;
  }
  return nums;
};
```

## Complexity

**Time**: `O(n)`
**Space**: `O(1)`

## Steps

1. Have variables that start at each end of the array.
2. Run `while` loop while `start < end`.
3. Never want `end` to be pointing at a `5`, so if its current val is `5`, increment `end` down by one.
4. If the `end` isn't pointing at a `5` and `start` is pointing at a `5`, swap places in array, increment up by one.
5. If `start` is not pointing at a `5`, increment up by 1.

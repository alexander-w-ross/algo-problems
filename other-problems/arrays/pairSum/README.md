# Pair Sum

# Problem

Write a function, *pairSum*, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair that sums to the target.

### test_00:

```
pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]

```

### test_01:

```
pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]

```

### test_02:

```
pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]

```

### test_03:

```
pairSum([1, 6, 7, 2], 13); // -> [1, 2]

```

### test_04:

```
pairSum([9, 9], 18); // -> [0, 1]

```

### test_05:

```
pairSum([6, 4, 2, 8 ], 12); // -> [1, 3]

```

## Successful Code

```js
/**
 *
 * @param {number[]} numbers
 * @param {number} targetSum
 * @returns {[number, number]}
 */
const pairSum = (numbers, targetSum) => {
  let hash = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    const complement = targetSum - currentNumber;
    if (hash.has(complement)) return [hash.get(complement), i];
    if (!hash.has(currentNumber)) hash.set(currentNumber, i);
  }
};
```

## Complexity

**Time**: `O(n)`
**Space**: `O(n)`

## Steps

1. Create hash map.
2. Iterate through `numbers` array. Calculate the _complement_ at each iteration.
3. If _complement_ exists in hashmap, return both indices.
4. Add current number and index to hashmap if it doesn't exist.

## Comments

- Trick to this problem is calculating the _complement_ and then checking if that exists in hashmap.

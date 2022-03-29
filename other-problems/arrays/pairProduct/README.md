# Pair Product

# Problem

Write a function, *pairProduct*, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair whose product is the target.

### test_00:

```
pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]

```

### test_01:

```
pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]

```

### test_02:

```
pairProduct([4, 7, 9, 2, 5, 1], 5); // -> [4, 5]

```

### test_03:

```
pairProduct([4, 7, 9, 2, 5, 1], 35); // -> [1, 4]

```

### test_04:

```
pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]

```

### test_05:

```
pairProduct([4, 6, 8, 2], 16); // -> [2, 3]

```

## Successful Code

```js
/**
 *
 * @param {number[]} numbers
 * @param {number} targetProduct
 * @returns [nubmer, number]
 */

const pairProduct = (numbers, targetProduct) => {
  let hash = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    const division = targetProduct / currentNumber;
    if (hash.has(division)) return [hash.get(division), i];
    hash.set(currentNumber, i);
  }
};
```

## Complexity

**Time**: `O(n)`
**Space**: `O(n)`

## Steps

1. Create hash map.
2. Iterate through `numbers` array. Calculate the _divison_ at each iteration.
3. If _divison_ exists in hashmap, return both indices.
4. Add current number and index to hashmap if it doesn't exist.

## Comments

- Trick to this problem is calculating the _divison_ and then checking if that exists in hashmap.

# Intersection

# Problem

Write a function, *intersection*, that takes in two arrays, *a*,_b_, as arguments. The function should return a new array containing elements that are in both of the two arrays.

You may assume that each input array does not contain duplicate elements.

### test_00:

```
intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]

```

### test_01:

```
intersection([2,4,6], [4,2]) // -> [2,4]

```

### test_02:

```
intersection([4,2,1], [1,2,4,6]) // -> [1,2,4]

```

### test_03:

```
intersection([0,1,2], [10,11]) // -> []

```

### test_04:

```
const a = [];
const b = [];
for (let i = 0; i < 50000; i += 1) {
  a.push(i);
  b.push(i);
}
intersection(a, b) // -> [0,1,2,3,..., 49999]

```

## Successful Code

```js
/**
 *
 * @param {number[]} a
 * @param {number[]} b
 * @returns number[]
 */
const intersection = (a, b) => {
  let hash = new Map();
  let output = [];
  for (let i = 0; i < a.length; i++) {
    hash.set(a[i], null);
  }
  for (let i = 0; i < b.length; i++) {
    if (hash.has(b[i])) output.push(b[i]);
  }
  console.log(output);
  return output;
};
```

## Complexity

**Time**: `O(n+m)`
**Space**: `O(min(n, m))`

## Steps

1. Create hash map.
2. Iterate through `a` array. Add each value to hashmap.
3. Iterate through `b` array. If value exists in hashmap, push to `output`

## Comments

- Trick to this problem is calculating the _complement_ and then checking if that exists in hashmap.

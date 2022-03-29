# Most Frequent Char

# Problem

Write a function, *mostFrequentChar*, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

You can assume that the input string is non-empty.

### test_00:

```
mostFrequentChar('bookeeper'); // -> 'e'

```

### test_01:

```
mostFrequentChar('david'); // -> 'd'

```

### test_02:

```
mostFrequentChar('abby'); // -> 'b'

```

### test_03:

```
mostFrequentChar('mississippi'); // -> 'i'

```

### test_04:

```
mostFrequentChar('potato'); // -> 'o'

```

### test_05:

```
mostFrequentChar('eleventennine'); // -> 'e'

```

### test_06:

```
mostFrequentChar("riverbed"); // -> 'r'

```

## Successful Code

```js
/**
 *
 * @param {string} s
 * @returns string
 */

const mostFrequentChar = (s) => {
  let hash = new Map();
  let letter;
  let maxSeen = -Infinity;
  for (let i = 0; i < s.length; i++) {
    let val = hash.get(s[i]);
    if (!!val) {
      hash.set(s[i], { num: val.num + 1, index: val.index });
    } else hash.set(s[i], { num: 1, index: i });
    if (!!val && val.num > maxSeen) {
      maxSeen = val.num;
      letter = s[i];
    } else if (
      !!val &&
      val.num === maxSeen &&
      val.index < hash.get(letter).index
    )
      letter = s[i];
  }
  if (hash.get(letter).num === 1) return s[0];
  return letter;
};
```

## Complexity

**Time**: `O(n)`
**Space**: `O(n)`

## Steps

1. Intialize variables. `Letter` is the letter that has been seen the most amount of times. `maxSeen` is biggest amount of times the max letter has been seen.
2. If you've seen the letter already, increase the amount of times you've seen it.
3. Else, add it to the hashmap.
4. If you've seen the charater and its `num` val is greater than `maxSeen`, make that character equal to `letter`.
5. If you've seen the letter before and the number of times you've seen it is equal to `maxSeen`, take the value with the lower index.
6. At the very end, if the current `letter` value (which is the highest repeating letter) has an `num` value of `1`, then return the first char in the string because all characters are non-repeating.

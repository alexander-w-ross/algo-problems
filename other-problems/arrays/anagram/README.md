# Anagrams

# Problem

Write a function, *anagrams*, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.

### test_00:

```
anagrams('restful', 'fluster'); // -> true

```

### test_01:

```
anagrams('cats', 'tocs'); // -> false

```

### test_02:

```
anagrams('monkeyswrite', 'newyorktimes'); // -> true

```

### test_03:

```
anagrams('paper', 'reapa'); // -> false

```

### test_04:

```
anagrams('elbow', 'below'); // -> true

```

### test_05:

```
anagrams('tax', 'taxi'); // -> false

```

### test_06:

```
anagrams('taxi', 'tax'); // -> false

```

### test_07:

```
anagrams('night', 'thing'); // -> true

```

### test_08:

```
anagrams('abbc', 'aabc'); // -> false

```

## Successful Code

```js
/**
 *
 * @param {string} s1
 * @param {string} s2
 * @returns boolean
 */

const anagrams = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  const listOfPrimes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101,
  ]; // 26 letters in alphabet
  let s1Value = 1;
  let s2Value = 1;
  let hash = new Map();

  for (let i = 0; i < s1.length; i++) {
    if (!hash.has(s1[i])) hash.set(s1[i], listOfPrimes[i]);
    s1Value *= hash.get(s1[i]);
  }
  for (let i = 0; i < s2.length; i++) {
    if (hash.has(s2[i])) s2Value *= hash.get(s2[i]);
    else return false;
  }
  return s1Value === s2Value ? true : false;
};
```

## Complexity

- `n` and `m` are length of `s1` and `s2`.
  **Time**: `O(n+m)`
  **Space**: `O(n)`

## Steps

1. Initialize first 26 primes for numbers of letters.
2. Map through `s1`. If letter hasn't been seen, add it to hashmap, else multiply `s1Value` by that letters associated prime.
3. Map through `s2`. If letter is not seen, return `false`. Multiply `s2Value` by given prime associated with that letter.
4. If `s1Value` === `s2Value` return `true` else `false`.

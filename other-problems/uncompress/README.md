# Uncompress

## Problem

Write a function, *uncompress*, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

```
<number><char>

for example, '2c' or '3a'.

```

The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.

### test_00:

```
uncompress("2c3a1t"); // -> 'ccaaat'

```

### test_01:

```
uncompress("4s2b"); // -> 'ssssbb'

```

### test_02:

```
uncompress("2p1o5p"); // -> 'ppoppppp'

```

### test_03:

```
uncompress("3n12e2z"); // -> 'nnneeeeeeeeeeeezz'

```

### test_04:

```
uncompress("127y"); // ->'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'

```

## Successful Code

```js
/**
 *
 * @param {string} s
 * @return {string}
 */

const uncompress = (s) => {
  // let output = "";
  let output = [];
  let numbers = "0123456789";
  let [i, j] = [0, 0];
  while (j < s.length) {
    if (numbers.includes(s[j])) {
      j += 1;
    } else {
      const currentNumber = Number(s.slice(i, j));
      for (let count = 0; count < currentNumber; count++) {
        // output += ""
        output.push(s[j]);
      }
      j += 1;
      i = j;
    }
  }
  //return output
  return output.join("");
};
```

## Complexity

If `n = number of numbers in the string` and `m = the biggest number in the string` then
**Time**: `O(n*m)`
**Space**: `O(n*m)`

## Steps

1. Initalize variables, make a `numbers` string which you can compare each `char` in the string to.
2. If you find a number, increment `j` until you reach a letter.
3. Once you hit a letter, because `i` hasn't been incremented, its pointing to the start index of the number and `j` is pointing to the last index of the number plus one. Set `currentNumber` to `slice(i,j)`.
4. Use a `for loop` to append the letter to `output` `currentNumber` of times.
5. Increment `j` to the next character, and set `i=j`.

### Comments

Because strings are immutable in Javascript, each time I do `output += s[j]`, thats creating a copy of the string which is `O(n)` time. Instead of you push to the `s[j]` to the array, and then join once while loop is over, its not incurring anymore runtime.

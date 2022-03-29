# Compress

# Problem

Write a function, *compress*, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

```
'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'

```

You can assume that the input only contains alphabetic characters.

### test_00:

```
compress('ccaaatsss'); // -> '2c3at3s'

```

### test_01:

```
compress('ssssbbz'); // -> '4s2bz'

```

### test_02:

```
compress('ppoppppp'); // -> '2po5p'

```

### test_03:

```
compress('nnneeeeeeeeeeeezz'); // -> '3n12e2z'

```

### test_04:

```
compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');
// -> '127y'

```

## Successful Code

```js
/**
 *
 * @param {string} s
 * @returns string
 */

const compress = (s) => {
  let output = [];
  let j = 0;
  let i = 0;
  while (j < s.length) {
    let counter = 0;
    const tmpChar = s[j];
    while (s[i] === tmpChar) {
      counter += 1;
      i++;
    }
    output.push(counter === 1 ? tmpChar : String(counter) + tmpChar);
    counter = 0;
    j = i;
  }
  return output.join("");
};
```

## Complexity

**Time**: `O(n)`
**Space**: `O(n)`

## Steps

1. Initalize variables. `counter` is counting the amount of times its seen `tmpChar`.
2. `j` is the _anchor_ pointer. `i` will run until it stops seeing `tmpChar` and `counter` will increase by one each time.
3. Once you hit a new letter, push to `output` array.
4. Before moving to next letter, increase `j` (to move to next letter) and reset `counter` to 0.

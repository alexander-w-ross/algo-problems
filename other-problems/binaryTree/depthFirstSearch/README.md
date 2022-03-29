# Depth first search

# Problem

Write a function, *depthFirstValues*, that takes in the root of a binary tree. The function should return an array containing all values of the tree in depth-first order.

_Hey. This is our first binary tree problem, so you should be liberal with watching the Approach and Walkthrough. Be productive, not stubborn. -AZ_

### test_00:

```
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

depthFirstValues(a);
//    -> ['a', 'b', 'd', 'e', 'c', 'f']

```

### test_01:

```
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
const g = new Node('g');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g

depthFirstValues(a);
//    -> ['a', 'b', 'd', 'e', 'g', 'c', 'f']

```

### test_02:

```
const a = new Node('a');
//      a
depthFirstValues(a);
//    -> ['a']

```

### test_03:

```
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

a.right = b;
b.left = c;
c.right = d;
d.right = e;

//      a
//       \
//        b
//       /
//      c
//       \
//        d
//         \
//          e

depthFirstValues(a);
//    -> ['a', 'b', 'c', 'd', 'e']

```

### test_04:

```
depthFirstValues(null);
//    -> []

```

## Successful Code

```js
const depthFirstValues = (root) => {
  // iterative
  if (!root) return [];
  let output = [];
  let stack = [];

  stack.push(root);
  while (stack.length > 0) {
    const current = stack.pop();

    output.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return output;

  //   recursive
  //   if (!root) return [];
  //   const leftValues = depthFirstValues(root.left);
  //   const rightValues = depthFirstValues(root.right);
  //   return [root.val, ...leftValues, ...rightValues];
};
```

## Complexity

(both iterative and recursive)
**Time**: `O(n)`
**Space**: `O(n)`

## Steps - Iterative

1. Initialize `output` array and `stack` array. Initially push `root` to `stack`.
2. While the length of `stack > 0`, pop off end of array, save value to `output` array and add its children to `stack`.
3. return `output`.

## Steps - Recursive

1. Recursively call all the **left** children and save it to a `leftValues`. Similar for **right**.
2. Spread the `root.val`, `leftValues` and `rightValues` into array.

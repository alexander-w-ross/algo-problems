# tree includes

# Problem

Write a function, *treeIncludes*, that takes in the root of a binary tree and a target value. The function should return a boolean indicating whether or not the value is contained in the tree.

### test_00:

```
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

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

treeIncludes(a, "e"); // -> true

```

### test_01:

```
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

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

treeIncludes(a, "a"); // -> true

```

### test_02:

```
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

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

treeIncludes(a, "n"); // -> false

```

### test_03:

```
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

treeIncludes(a, "f"); // -> true

```

### test_04:

```
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");
const g = new Node("g");
const h = new Node("h");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /       \
//   g         h

treeIncludes(a, "p"); // -> false

```

### test_05:

```
treeIncludes(null, "b"); // -> false

```

## Successful Code

```js
const treeIncludes = (root, target) => {
  //   iterative  - depth
  if (!root) return false;

  let stack = [root];
  while (stack.length > 0) {
    const curr = stack.pop();
    if (curr.val === target) return true;

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return false;

  //   iterative - breadth
  if (!root) return false;

  let queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr.val === target) return true;

    if (curr.right) queue.push(curr.right);
    if (curr.left) queue.push(curr.left);
  }
  return false;
};
```

## Complexity

(both iterative and recursive)
**Time**: `O(n)`
**Space**: `O(n)`

## Steps - Iterative - depth

1. Initialize `stack` array. Initially push `root` to `stack`.
2. While the length of `stack > 0`, pop off end of array, check if `curr.val===target`, add its children to `stack`.

## Steps - Iterative - breadth

1. Initialize `queue` array. Initially push `root` to `queue`.
2. While the length of `queue > 0`, shift off start of array, check if `curr.val===target`, add its children to `queue`.

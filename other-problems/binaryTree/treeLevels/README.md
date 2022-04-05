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
const treeLevels = (root) => {
  if (!root) return [];

  const stack = [{ node: root, level: 0 }];
  const levels = [];
  while (stack.length > 0) {
    const curr = stack.pop();
    if (levels[curr.level]) levels[curr.level].push(curr.node.val);
    else levels[curr.level] = [curr.node.val];

    if (curr.node.right)
      stack.push({ node: curr.node.right, level: curr.level + 1 });
    if (curr.node.left)
      stack.push({ node: curr.node.left, level: curr.level + 1 });
  }
  return levels;
};
```

## Complexity

**Time**: `O(n)`
**Space**: `O(n)`

## Steps - Iterative - depth

1. Initialize `levels` array. Intialize `stack` array, except store and object instead of just the node. Store `node` and `level` keys. Initalize `node` to `root` and `level` to `0`.
2. When you _pop_ the `curr` value off, if there exists an inner array at the index in `levels` of the `curr.level` value, then push to that array at that index. Otherwise create an inner array with the value of that node inside.
3. When adding children to the stack, add the level as the `curr.level+1` to assign them to the next level.

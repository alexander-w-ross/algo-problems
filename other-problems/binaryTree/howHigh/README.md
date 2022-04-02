# How high

# Problem

Write a function, *howHigh*, that takes in the root of a binary tree. The function should return a number representing the height of the tree.

The height of a binary tree is defined as the maximal number of edges from the root node to any leaf node.

If the tree is empty, return -1.

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

howHigh(a); // -> 2

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
e.left = g

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
//    /
//   g

howHigh(a); // -> 3

```

### test_02:

```
const a = new Node('a');
const c = new Node('c');

a.right = c;

//      a
//       \
//        c

howHigh(a); // -> 1

```

### test_03:

```
const a = new Node('a');

//      a

howHigh(a); // -> 0

```

### test_04:

```
howHigh(null); // -> -1

```

## Successful Code

```js
const treeSum = (root) => {
  // iterative - depth
  if (!root) return 0;
  let sum = 0;
  let stack = [root];
  while (stack.length > 0) {
    const curr = stack.pop();
    sum += curr.val;

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return sum;

  //   iterative - breadth
  if (!root) return 0;
  let sum = 0;
  let queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();
    sum += curr.val;

    if (curr.right) queue.push(curr.right);
    if (curr.left) queue.push(curr.left);
  }
  return sum;

  // recursive
  if (!root) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right);
};
```

## Complexity

(both iterative and recursive)
**Time**: `O(n)`
**Space**: `O(n)`

## Steps - Recursive

1. Because the base case (`null` node) returns `-1`, we check that right off the bat.
2. Add 1 to each node, and choose the max between each child node as you bubble up the tree.
   - Each null node on a leaf will pass up a -1, so you choose the max bewtween that and add 1.
   - Then you might get a scenario where that 0 goes to a parent node from the left and there might be a -1 coming from the right, in that case you add 1 and choose the max between -1 and 0, so that will give you a height of 1 at that node.

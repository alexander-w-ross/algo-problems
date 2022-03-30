# Min Value

# Problem

Write a function, *treeMinValue*, that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree.

You may assume that the input tree is non-empty.

### test_00:

```
const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

treeMinValue(a); // -> -2

```

### test_01:

```
const a = new Node(5);
const b = new Node(11);
const c = new Node(3);
const d = new Node(4);
const e = new Node(14);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//       5
//    /    \
//   11     3
//  / \      \
// 4   14     12

treeMinValue(a); // -> 3

```

### test_02:

```
const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(-4);
const f = new Node(-13);
const g = new Node(-2);
const h = new Node(-2);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//        -1
//      /   \
//    -6    -5
//   /  \     \
// -3   -4   -13
//     /       \
//    -2       -2

treeMinValue(a); // -> -13

```

### test_03:

```
const a = new Node(42);

//        42

treeMinValue(a); // -> 42

```

## Successful Code

```js
const treeMinValue = (root) => {
  // iterative - depth
  let stack = [root];
  let min = +Infinity;

  while (stack.length > 0) {
    const curr = stack.pop();
    if (curr.val < min) min = curr.val;
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return min;

  // iterative - breadth
  let queue = [root];
  let min = +Infinity;

  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr.val < min) min = curr.val;
    if (curr.right) queue.push(curr.right);
    if (curr.left) queue.push(curr.left);
  }
  return min;

  // recursive
  if (!root) return +Infinity;
  return Math.min(root.val, treeMinValue(root.right), treeMinValue(root.left));
};
```

## Complexity

(both iterative and recursive)
**Time**: `O(n)`
**Space**: `O(n)`

## Steps - Iterative - depth

1. Initialize `stack` array. Initially push `root` to `stack`.
2. While the length of `stack > 0`, pop off end of array, check if `curr.val<min`, add its children to `stack`.

## Steps - Iterative - breadth

1. Initialize `queue` array. Initially push `root` to `queue`.
2. While the length of `queue > 0`, shift off start of array, check if `curr.val<min`, add its children to `queue`.

## Steps - Recursive

1. If node is `null`, then set that value to `+Inifinity`, because any other value will be less.
2. Take the **min** between the `curr` node and each of its children.

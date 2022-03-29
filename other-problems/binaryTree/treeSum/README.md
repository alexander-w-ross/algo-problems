# tree sum

# Problem

Write a function, *breadthFirstValues*, that takes in the root of a binary tree. The function should return an array containing all values of the tree in breadth-first order.

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

breadthFirstValues(a);
//    -> ['a', 'b', 'c', 'd', 'e', 'f']

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
const h = new Node('h');

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

breadthFirstValues(a);
//   -> ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

```

### test_02:

```
const a = new Node('a');

//      a

breadthFirstValues(a);
//    -> ['a']

```

### test_03:

```
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const x = new Node('x');

a.right = b;
b.left = c;
c.left = x;
c.right = d;
d.right = e;

//      a
//       \
//        b
//       /
//      c
//    /  \
//   x    d
//         \
//          e

breadthFirstValues(a);
//    -> ['a', 'b', 'c', 'x', 'd', 'e']

```

### test_04:

```
breadthFirstValues(null);
//    -> []

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

## Steps - Iterative - depth

1. Initialize `sum` array and `stack` array. Initially push `root` to `stack`.
2. While the length of `stack > 0`, pop off end of array, add val to `sum` and add its children to `stack`.
3. return `sum`.

## Steps - Recursive

1. return `root.val + treeSum(root.left) + treeSum(root.right)`

## Steps - Iterative - breadth

1. Initialize `sum` and `queue` array. Initially push `root` to `queue`.
2. While the length of `queue > 0`, shift off start of array, add val to `sum` and add its children to `queue`.
3. return `sum`.

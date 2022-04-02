# Tree value count

# Problem

Write a function, *treeValueCount*, that takes in the root of a binary tree and a target value. The function should return the number of times that the target occurs in the tree.

### test_00:

```
const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

treeValueCount(a,  6); // -> 3

```

### test_01:

```
const a = new Node(12);
const b = new Node(6);
const c = new Node(6);
const d = new Node(4);
const e = new Node(6);
const f = new Node(12);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4  6     12

treeValueCount(a,  12); // -> 2

```

### test_02:

```
const a = new Node(7);
const b = new Node(5);
const c = new Node(1);
const d = new Node(1);
const e = new Node(8);
const f = new Node(7);
const g = new Node(1);
const h = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      7
//    /   \
//   5     1
//  / \     \
// 1   8     7
//    /       \
//   1         1
treeValueCount(a, 1); // -> 4

```

### test_03:

```
const a = new Node(7);
const b = new Node(5);
const c = new Node(1);
const d = new Node(1);
const e = new Node(8);
const f = new Node(7);
const g = new Node(1);
const h = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
f.right = h;

//      7
//    /   \
//   5     1
//  / \     \
// 1   8     7
//    /       \
//   1         1

treeValueCount(a, 9); // -> 0

```

### test_04:

```
treeValueCount(null, 42); // -> 0

```

## Successful Code

```js
const treeValueCount = (root, target) => {
  iterative - depth;
  if (!root) return 0;
  let stack = [root];
  let sum = 0;
  while (stack.length > 0) {
    const curr = stack.pop();
    if (curr.val === target) sum += 1;
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }
  return sum;
};
```

## Complexity

(both iterative and recursive)
**Time**: `O(n)`
**Space**: `O(n)`

## Steps - Iterative - depth

1. Initialize `sum` value and `stack` array. Initially push `root` to `stack`.
2. While the length of `stack > 0`, pop off end of array, add val to `sum` and add its children to `stack`.
3. return `sum`.

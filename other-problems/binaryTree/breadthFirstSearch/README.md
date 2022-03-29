# Breadth first search

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
const breadthFirstValues = (root) => {
  if (!root) return [];

  let output = [];
  let queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    output.push(current.val);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return output;
};
```

## Complexity

**Time**: `O(n)`
**Space**: `O(n)`

## Steps

1. Initialize `output` array and `queue` array. Initially push `root` to `queue`.
2. While the length of `queue > 0`, shift off start of queue, save value to `output` array and add its children to `queue`.
3. return `output`.

**NOTE** this solution should really be considered O(n^2) runtime because the JavaScript shift() methods runs in O(n). JavaScript does not have a native queue data structure that is maximally efficient.

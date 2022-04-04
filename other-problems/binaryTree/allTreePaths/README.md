# All tree paths

# Problem

Write a function, *allTreePaths*, that takes in the root of a binary tree. The function should return a 2-Dimensional array where each subarray represents a root-to-leaf path in the tree.

The order within an individual path must start at the root and end at the leaf, but the relative order among paths in the outer array does not matter.

You may assume that the input tree is non-empty.

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

allTreePaths(a); // ->
// [
//   [ 'a', 'b', 'd' ],
//   [ 'a', 'b', 'e' ],
//   [ 'a', 'c', 'f' ]
// ]

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
const i = new Node('i');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
e.left = g;
e.right = h;
f.left = i;

//         a
//      /    \
//     b      c
//   /  \      \
//  d    e      f
//      / \    /
//     g  h   i

allTreePaths(a); // ->
// [
//   [ 'a', 'b', 'd' ],
//   [ 'a', 'b', 'e', 'g' ],
//   [ 'a', 'b', 'e', 'h' ],
//   [ 'a', 'c', 'f', 'i' ]
// ]

```

### test_02:

```
const q = new Node('q');
const r = new Node('r');
const s = new Node('s');
const t = new Node('t');
const u = new Node('u');
const v = new Node('v');

q.left = r;
q.right = s;
r.right = t;
t.left = u;
u.right = v;

//      q
//    /   \
//   r     s
//    \
//     t
//    /
//   u
//  /
// v

allTreePaths(q); // ->
// [
//   [ 'q', 'r', 't', 'u', 'v' ],
//   [ 'q', 's' ]
// ]

```

### test_03:

```
const z = new Node('z');

//      z

allTreePaths(z); // ->
// [
//   ['z']
// ]

```

## Successful Code

```js
const allTreePaths = (root) => {
  if (!root) return [];
  if (!root.left && !root.right) return [[root.val]];
  const paths = [];
  const leftSubPaths = allTreePaths(root.left);
  // consider what node "a" would receive from left
  // [
  //   [b,d]
  //   [b,e]
  // ]
  for (let subPath of leftSubPaths) {
    paths.push([root.val, ...subPath]);
  }
  const rightSubPaths = allTreePaths(root.right);
  // consider what node "a" would receive from right
  // [
  //   [c,f]
  // ]
  for (let subPath of rightSubPaths) {
    paths.push([root.val, ...subPath]);
  }
  return paths;
};
```

## Complexity

(both iterative and recursive)
**Time**: `O(n)`
**Space**: `O(n)`

## Steps - recursive

1. If `root` is `null` return `[]`.
2. If node is a leaf, return a 2-D array containing value `[[node.val]]`
3. For each subpath, add the current node to the start of the subpath.
4. Push them to an output array.

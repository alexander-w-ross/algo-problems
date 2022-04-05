# level averages

# Problem

Write a function, *levelAverages*, that takes in the root of a binary tree that contains number values. The function should return an array containing the average value of each level.

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

levelAverages(a); // -> [ 3, 7.5, 1 ]

```

### test_01:

```
const a = new Node(5);
const b = new Node(11);
const c = new Node(54);
const d = new Node(20);
const e = new Node(15);
const f = new Node(1);
const g = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = f;
e.right = g;

//        5
//     /    \
//    11    54
//  /   \
// 20   15
//      / \
//     1  3

levelAverages(a); // -> [ 5, 32.5, 17.5, 2 ]

```

### test_02:

```
const a = new Node(-1);
const b = new Node(-6);
const c = new Node(-5);
const d = new Node(-3);
const e = new Node(0);
const f = new Node(45);
const g = new Node(-1);
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
// -3   0     45
//     /       \
//    -1       -2

levelAverages(a); // -> [ -1, -5.5, 14, -1.5 ]

```

### test_03:

```
const q = new Node(13);
const r = new Node(4);
const s = new Node(2);
const t = new Node(9);
const u = new Node(2);
const v = new Node(42);

q.left = r;
q.right = s;
r.right = t;
t.left = u;
u.right = v;

//        13
//      /   \
//     4     2
//      \
//       9
//      /
//     2
//    /
//   42

levelAverages(q); // -> [ 13, 3, 9, 2, 42 ]

```

### test_04:

```
levelAverages(null); // -> [ ]

```

## Successful Code

```js
function getAvg(array) {
  let sum = 0;
  for (let val of array) {
    sum += val;
  }
  return sum / array.length;
}

const levelAverages = (root) => {
  if (!root) return [];

  const stack = [{ node: root, level: 0, avg: root.val }];

  const levels = [];
  const avgs = [];
  while (stack.length > 0) {
    const curr = stack.pop();
    if (levels[curr.level]) levels[curr.level].push(curr.node.val);
    else levels[curr.level] = [curr.node.val];

    if (curr.node.left)
      stack.push({ node: curr.node.left, level: curr.level + 1 });
    if (curr.node.right)
      stack.push({ node: curr.node.right, level: curr.level + 1 });
  }
  for (let level of levels) {
    avgs.push(getAvg(level));
  }

  return avgs;
};
```

## Complexity

**Time**: `O(n)`
**Space**: `O(n)`

## Steps - Iterative - depth

1. Initialize `levels` array. Intialize `stack` array, except store and object instead of just the node. Store `node` and `level` keys. Initalize `node` to `root` and `level` to `0`.
2. When you _pop_ the `curr` value off, if there exists an inner array at the index in `levels` of the `curr.level` value, then push to that array at that index. Otherwise create an inner array with the value of that node inside.
3. When adding children to the stack, add the level as the `curr.level+1` to assign them to the next level.
4. Loop through each sub array and find the average

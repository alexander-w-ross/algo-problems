# Univalue linked list

# Problem

Write a function, *isUnivalueList*, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

You may assume that the input list is non-empty.

### test_00:

```
const a = new Node(7);
const b = new Node(7);
const c = new Node(7);

a.next = b;
b.next = c;

// 7 -> 7 -> 7

isUnivalueList(a); // true

```

### test_01:

```
const a = new Node(7);
const b = new Node(7);
const c = new Node(4);

a.next = b;
b.next = c;

// 7 -> 7 -> 4

isUnivalueList(a); // false

```

### test_02:

```
const u = new Node(2);
const v = new Node(2);
const w = new Node(2);
const x = new Node(2);
const y = new Node(2);

u.next = v;
v.next = w;
w.next = x;
x.next = y;

// 2 -> 2 -> 2 -> 2 -> 2

isUnivalueList(u); // true

```

### test_03:

```
const u = new Node(2);
const v = new Node(2);
const w = new Node(3);
const x = new Node(3);
const y = new Node(2);

u.next = v;
v.next = w;
w.next = x;
x.next = y;

// 2 -> 2 -> 3 -> 3 -> 2

isUnivalueList(u); // false

```

### test_04:

```
const z = new Node('z');

// z

isUnivalueList(z); // true

```

## Successful Code

```js
const isUnivalueList = (head) => {
  if (!head) return false;

  let curr = head;
  let unival = curr.val;
  while (curr) {
    if (curr.val !== unival) return false;
    curr = curr.next;
  }
  return true;
};
```

## Complexity

**Time**: `O(n)`
**Space**: `O(1)`

## Steps

1. Check if value at each node is same as the first node.

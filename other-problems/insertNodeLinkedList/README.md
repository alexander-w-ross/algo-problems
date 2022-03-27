# Remove node from linked list

# Problem

Write a function, *insertNode*, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

Do this **in-place**.

You may assume that the input list is non-empty and the index is not greater than the length of the input list.

### test_00:

```
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

insertNode(a, 'x', 2);
// a -> b -> x -> c -> d

```

### test_01:

```
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

insertNode(a, 'v', 3);
// a -> b -> c -> v -> d

```

### test_02:

```
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d

insertNode(a, 'm', 4);
// a -> b -> c -> d -> m

```

### test_03:

```
const a = new Node("a");
const b = new Node("b");

a.next = b;

// a -> b

insertNode(a, 'z', 0);
// z -> a -> b

```

## Successful Code

```js
const insertNode = (head, value, index) => {
  const newNode = new Node(value);
  if (index === 0) {
    newNode.next = head;
    return newNode;
  }
  let counter = 1;
  let curr = head.next;
  let prev = head;
  let dummy = prev;

  while (curr) {
    if (counter === index) {
      newNode.next = curr;
      prev.next = newNode;
      return dummy;
    }
    prev = prev.next;
    curr = curr.next;
    counter += 1;
  }
  prev.next = newNode;
  return dummy;
};
```

## Complexity

**Time**: `O(n)`
**Space**: `O(1)`

## Steps

1. If the index is 0, insert new node at beginning.
2. Set the `curr` pointer set to the second node, set the `prev` pointer at first node (set `dummy` pointing at `prev`).
3. If the `counter === index` then we want to insert the new node there. Point `prev` at the new node, then point the new node at `curr` node. return `dummy`
4. Else, update `curr` and `prev` to their next nodes.
5. If you've made it through the loop, then the index must be at the end, so set `prev.next === newNode` and then return `dummy`.

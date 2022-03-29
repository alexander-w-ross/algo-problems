# Remove node from linked list

# Problem

Write a function, *removeNode*, that takes in the head of a linked list and a target value as arguments. The function should delete the node containing the target value from the linked list and return the head of the resulting linked list. If the target appears multiple times in the linked list, only remove the first instance of the target in the list.

Do this **in-place**.

You may assume that the input list is non-empty.

You may assume that the input list contains the target.

### test_00:

```
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// a -> b -> c -> d -> e -> f

removeNode(a, "c");
// a -> b -> d -> e -> f

```

### test_01:

```
const x = new Node("x");
const y = new Node("y");
const z = new Node("z");

x.next = y;
y.next = z;

// x -> y -> z

removeNode(x, "z");
// x -> y

```

### test_02:

```
const q = new Node("q");
const r = new Node("r");
const s = new Node("s");

q.next = r;
r.next = s;

// q -> r -> s

removeNode(q, "q");
// r -> s

```

### test_03:

```
const node1 = new Node("h");
const node2 = new Node("i");
const node3 = new Node("j");
const node4 = new Node("i");

node1.next = node2;
node2.next = node3;
node3.next = node4;

// h -> i -> j -> i

removeNode(node1, "i");
// h -> j -> i

```

### test_04:

```
const t = new Node("t");

// t

removeNode(t, "t");
// null

```

## Successful Code

```js
const removeNode = (head, targetVal) => {
  if (!head.next) return null;
  if (head.val === targetVal) return head.next;

  let curr = head.next;
  let prev = head;
  let dummy = prev;

  while (curr) {
    if (curr.val === targetVal) {
      prev.next = curr.next;
      return dummy;
    }
    prev = prev.next;
    curr = curr.next;
  }
  return dummy;
};
```

## Complexity

**Time**: `O(n)`
**Space**: `O(1)`

## Steps

1. If theres only one node in linked list, then return `null`
2. If the first node is the node to remove, then just return the rest of the list
3. Set a `curr` pointer set to `head.next`
4. Set a `prev` pointer set to `head`.
5. Set a `dummy` pointer pointing at `prev`, so that you can return what ever path `prev` takes.
6. Start looping through linked list. If `curr.val` is the val to remove, point `prev` at the next value after the
   node to remove and then return `dummy`.
7. If `curr.val` isn't the `targetVal` then increment `curr` and `prev` to their next values.

# Zipper Linked Lists

# Problem

Write a function, *zipperLists*, that takes in the head of two linked lists as arguments. The function should zipper the two lists together into single linked list by alternating nodes. If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. The function should return the head of the zippered linked list.

Do this **in-place**, by mutating the original Nodes.

You may assume that both input lists are non-empty.

### test_00:

```
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z

```

### test_01:

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

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

zipperLists(a, x);
// a -> x -> b -> y -> c -> z -> d -> e -> f

```

### test_02:

```
const s = new Node("s");
const t = new Node("t");
s.next = t;
// s -> t

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
one.next = two;
two.next = three;
three.next = four;
// 1 -> 2 -> 3 -> 4

zipperLists(s, one);
// s -> 1 -> t -> 2 -> 3 -> 4

```

### test_03:

```
const w = new Node("w");

// w

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;
// 1 -> 2 -> 3

zipperLists(w, one);
// w -> 1 -> 2 -> 3

```

### test_04:

```
const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
one.next = two;
two.next = three;
// 1 -> 2 -> 3

const w = new Node("w");
// w

zipperLists(one, w);
// 1 -> w -> 2 -> 3

```

## Successful Code

```js
const zipperLists = (head1, head2) => {
  let head = head1;
  let curr1 = head1.next;
  let curr2 = head2;
  let tail = head1;
  let counter = 0;
  while (curr1 && curr2) {
    if (counter % 2 === 0) {
      tail.next = curr2;
      curr2 = curr2.next;
    } else {
      tail.next = curr1;
      curr1 = curr1.next;
    }
    counter += 1;
    tail = tail.next;
  }
  tail.next = curr1 || curr2;
  return head;
};
```

## Complexity

**Time**: `O(n)`
**Space**: `O(1)`

## Steps

1. Initalize a `head` variable to `head1`, so you can return it at the end.
2. set `curr1` to the its next value, because the `tail` will start off as the start of `head1`.
3. set `curr2 = head2`
4. Initalize a `counter`
5. While both `curr1` and `curr2` are not null
   - if counter is even number, set `tail.next` pointing at `curr2` and then increase both `tail` and `curr2`.
   - if counter is odd, set `tail.next` pointing at `curr1` and then increase both values.
6. At end of the loop, increase `counter` by one and actually move `tail` to next value.
7. Set `tail.next` to whichever `curr` wasn't null.
8. Return `head`.

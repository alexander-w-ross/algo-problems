# Longest Streak (linked list)

# Problem

Write a function, *longestStreak*, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.

### test_00:

```
const a = new Node(5);
const b = new Node(5);
const c = new Node(7);
const d = new Node(7);
const e = new Node(7);
const f = new Node(6);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 5 -> 5 -> 7 -> 7 -> 7 -> 6

longestStreak(a); // 3

```

### test_01:

```
const a = new Node(3);
const b = new Node(3);
const c = new Node(3);
const d = new Node(3);
const e = new Node(9);
const f = new Node(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 3 -> 3 -> 3 -> 3 -> 9 -> 9

longestStreak(a); // 4

```

### test_02:

```
const a = new Node(9);
const b = new Node(9);
const c = new Node(1);
const d = new Node(9);
const e = new Node(9);
const f = new Node(9);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

// 9 -> 9 -> 1 -> 9 -> 9 -> 9

longestStreak(a); // 3

```

### test_03:

```
const a = new Node(5);
const b = new Node(5);

a.next = b;

// 5 -> 5

longestStreak(a); // 2

```

### test_04:

```
const a = new Node(4);

// 4

longestStreak(a); // 1

```

### test_05:

```
longestStreak(null); // 0

```

## Successful Code

```js
const longestStreak = (head) => {
  if (!head) return 0;
  let curr = head;
  let counter = 0;
  let max = 0;
  let currVal = head.val;
  while (curr) {
    if (currVal === curr.val) counter++;
    else {
      if (max < counter) max = counter;
      counter = 1;
      currVal = curr.val;
    }
    curr = curr.next;
  }
  return max < counter ? counter : max;
};
```

## Complexity

**Time**: `O(n)`
**Space**: `O(1)`

## Steps

1. Initialize the first value to `curr.val`.
2. Map through linked list, while `currVal === curr.val` just increment the counter.
3. Once you hit a new number, if `max` is less than `counter`, update max to that value. Since you're already
   on the "new" number, set `counter = 1` because you've technically already seen it.
4. Set the current value.
5. At the end, you need to check one last time if `counter` is greater than `max` because in the event that the last 3 nodes were all `9`. The `while` loop will reach the last node which is `null` and so it won't enter the loop and thus can't check if `max < counter`, so you need to do it one last time.

# Range Sum Query - Immutable

[Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

Given the `head` of a singly linked list, reverse the list, and return _the reversed list_.

**Example 1:**

![https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)

```
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

```

**Example 2:**

![https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg](https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg)

```
Input: head = [1,2]
Output: [2,1]

```

**Example 3:**

```
Input: head = []
Output: []

```

**Constraints:**

- The number of nodes in the list is the range `[0, 5000]`.
- `5000 <= Node.val <= 5000`

## Successful Code

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let [prev, curr, next] = [null, head, null];
  if (head) {
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
  return head;
};
```

## Complexity

**Time**: `O(n)`
**Space**: `O(1)`

## Steps

1. Set `curr` to head and `prev` and `next` to `null`
2. Iterate through each node if linked list
3. At each node
   - set what the next node is
   - set the `curr` node point back at the `prev` node
   - move the `prev` node to the `curr` node
   - move the `curr` node to the `next` node defined above.
4. Because `curr` will be null at the end, return `prev`

## Comments

![A good visual explanation](https://media.geeksforgeeks.org/wp-content/cdn-uploads/RGIF2.gif)

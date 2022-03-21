# Remove Linked List Elements

[Link to problem](https://leetcode.com/problems/remove-linked-list-elements/)

## Problem

Given the `head` of a linked list and an integer `val`, remove all the nodes of the linked list that has `Node.val == val`, and return _the new head_.

**Example 1:**

![https://assets.leetcode.com/uploads/2021/03/06/removelinked-list.jpg](https://assets.leetcode.com/uploads/2021/03/06/removelinked-list.jpg)

```
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

```

**Example 2:**

```
Input: head = [], val = 1
Output: []

```

**Example 3:**

```
Input: head = [7,7,7,7], val = 7
Output: []

```

**Constraints:**

- The number of nodes in the list is in the range `[0, 104]`.
- `1 <= Node.val <= 50`
- `0 <= val <= 50`

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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return head;

  while (head) {
    if (head.val === val) head = head.next;
    else break;
  }

  let curr = head;
  while (curr && curr.next) {
    if (curr.next.val === val) curr.next = curr.next.next;
    else curr = curr.next;
  }
  return head;
};
```

## Complexity

**Time**: `O(n)`
**Space**: `O(1)`

## Steps

1. Return `head` immediately if `null`
2. Go through each node in linked list until you hit an allowable value.
   - This covers cases where every first `n` node isn't allowable
3. Once you hit an allowable value set the `curr` value to `head`.
4. At each `curr` value, if the `next` val is not an allowable value then set `next` to the `next` value after that and repeat until `next` is an allowable value.

## Comments

- Key is mapping through linked list until you hit an allowed value.

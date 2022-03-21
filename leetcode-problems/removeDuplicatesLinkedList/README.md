# Remove Duplicates Linked List

[Remove Duplicates from Sorted List - LeetCode](https://leetcode.com/problems/remove-duplicates-from-sorted-list/)

## Problem

Given the `head` of a sorted linked list, _delete all duplicates such that each element appears only once_. Return _the linked list **sorted** as well_.

**Example 1:**

![https://assets.leetcode.com/uploads/2021/01/04/list1.jpg](https://assets.leetcode.com/uploads/2021/01/04/list1.jpg)

```
Input: head = [1,1,2]
Output: [1,2]

```

**Example 2:**

![https://assets.leetcode.com/uploads/2021/01/04/list2.jpg](https://assets.leetcode.com/uploads/2021/01/04/list2.jpg)

```
Input: head = [1,1,2,3,3]
Output: [1,2,3]

```

**Constraints:**

- The number of nodes in the list is in the range `[0, 300]`.
- `100 <= Node.val <= 100`
- The list is guaranteed to be **sorted** in ascending order.

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
var deleteDuplicates = function (head) {
  if (!head) return head;

  let curr = head;
  while (curr && curr.next) {
    let next = curr.next;
    if (curr.val === next.val) curr.next = next.next;
    else curr = next;
  }
  return head;
};
```

## Complexity

**Time**: `O(n)`
**Space**: `O(1)`

## Steps

1. Return `head` immediately if `null`
2. At each `curr` value, if the `next` val is a duplicate value then set `next` to the `next` value after that and repeat until `next` is not a value.

## Comments

- Similar to **remove elements from linked list** problem

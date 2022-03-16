## Problem

Given the `head` of a singly linked list, return `true` if it is a palindrome.

**Example 1:**

![https://assets.leetcode.com/uploads/2021/03/03/pal1linked-list.jpg](https://assets.leetcode.com/uploads/2021/03/03/pal1linked-list.jpg)

```
Input: head = [1,2,2,1]
Output: true

```

**Example 2:**

![https://assets.leetcode.com/uploads/2021/03/03/pal2linked-list.jpg](https://assets.leetcode.com/uploads/2021/03/03/pal2linked-list.jpg)

```
Input: head = [1,2]
Output: false

```

**Constraints:**

- The number of nodes in the list is in the range `[1, 105]`.
- `0 <= Node.val <= 9`

## Successful code

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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let fast = head;
  let slow = head;
  if (head) {
    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
    }
    let [prev, curr, next] = [null, slow, null];
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    while (prev) {
      if (prev.val !== head.val) return false;
      prev = prev.next;
      head = head.next;
    }
    return true;
  }
  return head;
};
```

### Time/Space Complexity

**Time**: `O(n)`
**Space**: `O(1)`

## Steps

1. Use **fast** and **slow** pointers to find middle of linked list
2. Once you have the middle, treat it as _"new"_ list and **reverse** it.
3. Once reversed, compare each value from the original linked list to the _"new"_ one and if all of them match return **true**, otherwise return **false**

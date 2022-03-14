# Middle of linked list

## Problem

**Example 1:**

![https://assets.leetcode.com/uploads/2021/07/23/lc-midlist1.jpg](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist1.jpg)

```
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

```

**Example 2:**

![https://assets.leetcode.com/uploads/2021/07/23/lc-midlist2.jpg](https://assets.leetcode.com/uploads/2021/07/23/lc-midlist2.jpg)

```
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

```

**Constraints:**

- The number of nodes in the list is in the range `[1, 100]`.
- `1 <= Node.val <= 100`

## Successful code

```jsx
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
function middleNode(head) {
  let slowptr = head;
  let fastptr = head;
  if (head) {
    while (fastptr && fastptr.next) {
      slowptr = slowptr.next;
      fastptr = fastptr.next.next;
    }
  }
  return slowptr;
}
```

### Time/Space Complexity

**Time**: `O(n)`
**Space**: `O(1)`

## Comments

Used the concept of fast and slow pointers. Increase the fast pointer by 2 everytime and when it gets to the end, the slow pointer will be at half.

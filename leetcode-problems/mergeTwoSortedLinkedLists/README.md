# Merge Two Sorted Linked Lists

[Merge Two Sorted Lists - LeetCode](https://leetcode.com/problems/merge-two-sorted-lists/)

# Problem

You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists in a one **sorted** list. The list should be made by splicing together the nodes of the first two lists.

Return *the head of the merged linked list*.

**Example 1:**

![https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)

```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

```

**Example 2:**

```
Input: list1 = [], list2 = []
Output: []

```

**Example 3:**

```
Input: list1 = [], list2 = [0]
Output: [0]

```

**Constraints:**

- The number of nodes in both lists is in the range `[0, 50]`.
- `100 <= Node.val <= 100`
- Both `list1` and `list2` are sorted in **non-decreasing** order.

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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// iterative
var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(0, null);
  let tail = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  tail.next = list1 || list2;
  return dummy.next;
};

// recursive
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
```

## Complexity

### Iterative

**Time**: `O(n)`
**Space**: `O(n)`

### Recursive

**Time**: `O(n+m)`
**Space**: `O(?)`

## Steps - Iterative

1. Intialize a dummy node.
2. Make a `tail` pointer that always points to the last node in the result list.
3. While you can make a comparison between both lists
   - If `list1.val` is less than `list2.val`, set the tail to point at that value, then move to the next value in `list1` (essentially keep moving through `list1` while its values are lower than `list2`).
   - If `list1.val` is greater than or equal to `list2.val`, set the `tail` to point at that value, then move to the next value in `list2`.
   - Regardless of the above conditions, move the tail to the next value.
4. Once you hit the end of `list1` or `list2`, you need to point the `tail` at the part of either list. (`tail.next = list1 || list2`)
5. Return `dummy.next` because `dummy` will include the null pointer a the start.

## Comments

[Helpful video explaining iterative method](https://www.youtube.com/watch?v=XIdigk956u0)

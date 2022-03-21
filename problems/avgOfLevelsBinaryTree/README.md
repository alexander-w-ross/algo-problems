# Average of Levels in Binary Tree

[Average of Levels in Binary Tree - LeetCode](https://leetcode.com/problems/average-of-levels-in-binary-tree/)

# Problem

Given the

```
root
```

of a binary tree, return

_the average value of the nodes on each level in the form of an array_

. Answers within

```
10-5
```

of the actual answer will be accepted.

**Example 1:**

![https://assets.leetcode.com/uploads/2021/03/09/avg1-tree.jpg](https://assets.leetcode.com/uploads/2021/03/09/avg1-tree.jpg)

```
Input: root = [3,9,20,null,null,15,7]
Output: [3.00000,14.50000,11.00000]
Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11].

```

**Example 2:**

![https://assets.leetcode.com/uploads/2021/03/09/avg2-tree.jpg](https://assets.leetcode.com/uploads/2021/03/09/avg2-tree.jpg)

```
Input: root = [3,9,20,15,7]
Output: [3.00000,14.50000,11.00000]

```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 104]`.
- `231 <= Node.val <= 231 - 1`

## Successful Code

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var averageOfLevels = function (root) {
  if (!root) return root;

  let queue = [root];
  let avgs = [];
  while (queue.length > 0) {
    const currentSize = queue.length;
    let sum = 0;
    for (let i = 0; i < currentSize; i++) {
      const currentNode = queue.shift();
      sum += currentNode.val;
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    avgs.push(sum / currentSize);
  }
};
```

## Complexity

**Time**: `O(n)` - tree is traversed at most once
**Space**: `O(n)`

## Steps

1. Start off like regular BFS. Initialize an `avgs` array.
2. For each iteration in the `while` loop you:
   - calculate the current size of the queue (this is the denominator in average calcuation for the current level).
   - Initialize the current `sum` for that level to `0`.
   - For each node on the level (remove `currentSize` amount of nodes for each level), remove the node, add its value to the sum and push to the back of the queue its children.
   - Divide the current `sum` by the number of nodes (`currentSize`) and push that to the `avgs` array.

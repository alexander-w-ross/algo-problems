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

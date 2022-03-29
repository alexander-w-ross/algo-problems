const treeIncludes = (root, target) => {
  // iterative  - depth
  if (!root) return false;
  let stack = [root];
  while (stack.length > 0) {
    const curr = stack.pop();
    if (curr.val === target) return true;
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return false;
  // iterative - breadth
  if (!root) return false;
  let queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr.val === target) return true;
    if (curr.right) queue.push(curr.right);
    if (curr.left) queue.push(curr.left);
  }
  return false;
};

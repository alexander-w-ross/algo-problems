const treeMinValue = (root) => {
  // iterative - depth
  let stack = [root];
  let min = +Infinity;

  while (stack.length > 0) {
    const curr = stack.pop();
    if (curr.val < min) min = curr.val;
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return min;
  // iterative - breadth
  //   let queue = [root]
  //   let min = +Infinity

  //   while (queue.length > 0) {
  //     const curr = queue.shift()
  //     if (curr.val < min) min = curr.val
  //     if (curr.right) queue.push(curr.right)
  //     if (curr.left) queue.push(curr.left)
  //   }
  //   return min
  // recursive
  // if (!root) return +Infinity
  // return Math.min(root.val, treeMinValue(root.right), treeMinValue(root.left))
};

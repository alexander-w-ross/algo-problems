const treeSum = (root) => {
  // iterative - depth
  //   if (!root) return 0
  //   let sum = 0
  //   let stack = [root]
  //   while (stack.length > 0) {
  //     const curr = stack.pop()
  //     sum += curr.val

  //     if (curr.right) stack.push(curr.right)
  //     if (curr.left) stack.push(curr.left)
  //   }
  //   return sum

  //   iterative - breadth
  if (!root) return 0;
  let sum = 0;
  let queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();
    sum += curr.val;

    if (curr.right) queue.push(curr.right);
    if (curr.left) queue.push(curr.left);
  }
  return sum;

  // recursive
  // if (!root) return 0
  // return root.val + treeSum(root.left) + treeSum(root.right)
};

const treeValueCount = (root, target) => {
  iterative - depth;
  if (!root) return 0;
  let stack = [root];
  let sum = 0;
  while (stack.length > 0) {
    const curr = stack.pop();
    if (curr.val === target) sum += 1;
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }
  return sum;
};

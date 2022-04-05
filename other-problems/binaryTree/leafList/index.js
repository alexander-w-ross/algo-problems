const leafList = (root) => {
  if (!root) return [];

  const stack = [root];
  const leafs = [];
  while (stack.length > 0) {
    const curr = stack.pop();
    if (!curr.left && !curr.right) leafs.push(curr.val);

    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return leafs;
};

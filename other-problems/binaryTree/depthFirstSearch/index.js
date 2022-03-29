const depthFirstValues = (root) => {
  // iterative
  if (!root) return [];
  let output = [];
  let stack = [];

  stack.push(root);
  while (stack.length > 0) {
    const current = stack.pop();

    output.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return output;

  //   recursive
  //   if (!root) return [];
  //   const leftValues = depthFirstValues(root.left);
  //   const rightValues = depthFirstValues(root.right);
  //   return [root.val, ...leftValues, ...rightValues];
};

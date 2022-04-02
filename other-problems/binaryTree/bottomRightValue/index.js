const bottomRightValue = (root) => {
  if (!root.left && !root.right) return root.val;
  let queue = [root];
  let tmp;
  while (queue.length > 0) {
    const curr = queue.shift();
    tmp = curr.val;
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return tmp;
};

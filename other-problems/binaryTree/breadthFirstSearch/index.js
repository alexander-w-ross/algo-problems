const breadthFirstValues = (root) => {
  if (!root) return [];

  let output = [];
  let queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    output.push(current.val);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return output;
};
